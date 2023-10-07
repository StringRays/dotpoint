import Problem, { ProblemProps } from './Problem';
import { ProblemTypes } from '../pages/SingleProblemType';
import { useRef, useState, useEffect } from 'react';
import ReactToPrint from 'react-to-print';

type WorksheetProps = {
    generator: () => Array<ProblemProps>;
    problemType: ProblemTypes;
}

const Worksheet = ({ generator, problemType }: WorksheetProps ) => {
    const componentRef = useRef(null);
    const [numbers, setNumbers] = useState<Array<ProblemProps>>();

    const buttonStyle = {
        padding: '8px', 
        margin: '5px'
    }

    const nameDate = {
        fontWeight: 'bold', 
        padding: '5px'
    }



    function generateNew() {
        const newNums: Array<ProblemProps> | null = generator();
        newNums && setNumbers(newNums);
    }

    useEffect(() => {
        const newNums: Array<ProblemProps> | null = generator();
        newNums && setNumbers(newNums);
    }, [generator])

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div 
                style={{ backgroundColor: '#83b692', display: 'flex', width: '100vw', justifyContent: 'center' }}
                data-cy={'worksheet-menu'}>
                <ReactToPrint
                trigger={() => <button style={buttonStyle}>Print this Worksheet</button>}
                content={() => componentRef.current}
            />
            <button style={buttonStyle} onClick={generateNew}>Generate New Worksheet</button>
            <button style={buttonStyle}><a href='/dotpoint/' style={{ textDecoration: 'none', color: 'black' }}>Return Home</a></button>
        </div>
        <div ref={componentRef} 
            style={{ display: 'flex', flexDirection: 'column' }}
            data-cy={'worksheet-'+problemType}>
            <div style={{ display: 'flex', justifyContent: 'space-around', padding: '30px' }}>
                <div style={nameDate}>Name: ____________________________________________</div>
                <div style={nameDate}>Date: ____________________________________________</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {numbers &&
                       numbers.slice(0, 5).map((problem, index) => (
                            <Problem 
                                numOne={problem.numOne} 
                                numTwo={problem.numTwo} 
                                operator={problem.operator}
                                key={'one'+index.toString()}/>
                       )) 
                    }
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {numbers &&
                       numbers.slice(5).map((problem, index) => (
                            <Problem 
                                numOne={problem.numOne} 
                                numTwo={problem.numTwo} 
                                operator={problem.operator}
                                key={'two'+index.toString()} />
                       )) 
                    }
                </div>
            </div>
        </div>
        </div>
    )
}

export default Worksheet;
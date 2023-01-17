import Problem, { ProblemProps } from './Problem';
import { useRef } from 'react';
import ReactToPrint from 'react-to-print';

export type WorksheetProps = {
    columns: Array<ProblemProps>;
}

const Worksheet = ({ columns }: WorksheetProps ) => {
    const colOne: Array<ProblemProps> = columns.slice(0, 5);
    const colTwo: Array<ProblemProps> = columns.slice(5);
    const componentRef = useRef(null);

    const buttonStyle = {
        padding: '8px', 
        margin: '5px'
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ backgroundColor: '#83b692', display: 'flex', width: '100vw', justifyContent: 'center' }}>
                <ReactToPrint
                trigger={() => <button style={buttonStyle}>Print this Worksheet</button>}
                content={() => componentRef.current}
            />
            <button style={buttonStyle} onClick={() => window.location.reload()}>Generate New Worksheet</button>
            <button style={buttonStyle}><a href='/' style={{ textDecoration: 'none', color: 'black' }}>Return Home</a></button>
            </div>
        <div ref={componentRef}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', padding: '30px' }}>
                <div style={{ fontWeight: 'bold', padding: '5px' }}>Name: ____________________________________________</div>
                <div style={{ fontWeight: 'bold', padding: '5px' }}>Date: ____________________________________________</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {colOne &&
                       colOne.map((problem, index) => (
                            <Problem 
                                numOne={problem.numOne} 
                                numTwo={problem.numTwo} 
                                operator={problem.operator}
                                key={'one'+index.toString()}/>
                       )) 
                    }
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {colTwo &&
                       colTwo.map((problem, index) => (
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
        </div>
    )
}

export default Worksheet;
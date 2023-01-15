import Number from './Number';
import Operator from './Operator';

export type ProblemProps = {
    numOne: number;
    numTwo: number;
    operator: string;
}

interface ProblemPropsWithKey extends ProblemProps {
    key: string;
}

const Problem = ({ numOne, numTwo, operator }: ProblemPropsWithKey) => {
    return (
        <div 
            style={{ 
                height: '180px', 
                width: '300px', 
                paddingLeft: '20px', 
                paddingRight: '20px', 
                border: '1px solid black'}}>
                <div 
                style={{ 
                    display: 'flex', 
                    justifyContent: 'center',
                    borderBottom: '2px solid black', 
                    marginLeft: '20px',
                    marginRight: '20px' 
                    }}>
                <div>
                    <Operator 
                        symbol={operator} 
                        size={'xsOp'} />
                </div>
                <div 
                    style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: "center" 
                    }}>
                    <Number 
                        num={numOne} 
                        size={'xsNum'}/>
                    <Number 
                        num={numTwo} 
                        size={'xsNum'}/>
                </div>
            </div>
        </div>
    )
}

export default Problem;
import Number from './Number';
import Operator from './Operator';

const InnerProblem = () => {
    return (
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
                    symbol={'+'} 
                    size={'xsOp'} />
            </div>
            <div 
                style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: "center" 
                }}>
                <Number 
                    num={1} 
                    size={'xsNum'}/>
                <Number 
                    num={2} 
                    size={'xsNum'}/>
            </div>
        </div>
    )
}

const Problem = () => {
    return (
        <div 
            style={{ 
                height: '180px', 
                width: '300px', 
                paddingLeft: '20px', 
                paddingRight: '20px', 
                border: '1px solid black'}}>
            <InnerProblem />
        </div>
    )
}

export default Problem;
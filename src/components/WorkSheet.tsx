import Problem, { ProblemProps } from './Problem';

export type WorkSheetProps = {
    columns: Array<ProblemProps>;
}

const Worksheet = ({ columns }: WorkSheetProps ) => {
    const colOne: Array<ProblemProps> = columns.slice(0, 5);
    const colTwo: Array<ProblemProps> = columns.slice(5);

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', padding: '10px' }}>
                <div style={{ fontWeight: 'bold' }}>Name: ____________________________________________</div>
                <div style={{ fontWeight: 'bold' }}>Date: ____________________________________________</div>
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
    )
}

export default Worksheet;
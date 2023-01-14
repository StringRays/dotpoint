import Problem from './Problem';

const Worksheet = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', padding: '10px' }}>
                <div style={{ fontWeight: 'bold' }}>Name: ____________________________________________</div>
                <div style={{ fontWeight: 'bold' }}>Date: ____________________________________________</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Problem />
                    <Problem />
                    <Problem />
                    <Problem />
                    <Problem />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Problem />
                    <Problem />
                    <Problem />
                    <Problem />
                    <Problem />
                </div>
            </div>
        </div>
    )
}

export default Worksheet;
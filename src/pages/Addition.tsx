import Worksheet from '../components/WorkSheet';
import { useEffect, useState } from 'react';
import { ProblemProps } from '../components/Problem'

const Addition = () => {
    const [numbers, setNumbers] = useState<Array<ProblemProps>>();

    useEffect(() => {
        const numberList: Array<ProblemProps> = [];
        for (let i = 0; i < 10; i++){
            numberList.push({
                numOne: Math.floor(Math.random()*10),
                numTwo: Math.floor(Math.random()*10),
                operator: '+'
            })
        }
        setNumbers(numberList);
    }, []);
    
    return (
        <>
        {numbers && <Worksheet columns={numbers} />}
        </>
    )
}

export default Addition;
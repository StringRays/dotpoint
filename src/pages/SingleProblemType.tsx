import Worksheet from '../components/Worksheet';
import { ProblemProps } from '../components/Problem';

type ProblemTypes = 'addition' | 'subtraction' | 'multiplication' | 'division';

interface ProblemType {
    problemType: ProblemTypes
}

const SingleProblemType = ({ problemType }: ProblemType) => {

    const addition = () => {
        const numberList: Array<ProblemProps> = [];
        for (let i = 0; i < 10; i++){
            numberList.push({
                numOne: Math.floor(Math.random()*10),
                numTwo: Math.floor(Math.random()*10),
                operator: '+'
            })
        }
        return numberList;
    }

    const subtraction = () => {
        const numberList: Array<ProblemProps> = [];
        let firstNum: number;
        let secondNum: number;
        for (let i = 0; i < 10; i++){
            //1-9
            firstNum = Math.floor(Math.random()*9)+1;
            //0-firstNum
            secondNum = Math.floor(Math.random()*(firstNum+1));
            numberList.push({
                numOne: firstNum,
                numTwo: secondNum,
                operator: '-'
            })
        }
        return numberList;
    }

    const multiplication = () => {
        const numberList: Array<ProblemProps> = [];
        for (let i = 0; i < 10; i++){
            numberList.push({
                numOne: Math.floor(Math.random()*10),
                numTwo: Math.floor(Math.random()*10),
                operator: 'x'
            })
        }
        return numberList;
    }

    const division = () => {
        const numberList: Array<ProblemProps> = [];
        const problems = [
            [1],
            [1, 2],
            [1, 3],
            [1, 2, 4],
            [1, 5],
            [1, 2, 3, 6],
            [1, 7],
            [1, 2, 4, 8],
            [1, 3, 9]
        ]
        for (let i = 0; i < 10; i++){
            const dividend = Math.floor(Math.random()*9);
            const divisor = problems[dividend][Math.floor(Math.random()*problems[dividend].length)];
            numberList.push({
                numOne: dividend+1,
                numTwo: divisor,
                operator: '/'
            })
        }
        return numberList;
    }

    return (
        <>
            {problemType === 'addition' && <Worksheet generator={addition} />}
            {problemType === 'subtraction' && <Worksheet generator={subtraction} />}
            {problemType === 'multiplication' && <Worksheet generator={multiplication} />}
            {problemType === 'division' && <Worksheet generator={division} />}
        </>
    )
}

export default SingleProblemType;
import { useState } from 'react';
import Number from './Number';
import Operator from './Operator';
import Problem from './Problem';
import Layout from './components/Layout';

const Home = () => {
    const [numberSize, setNumberSize] = useState('smallNum');
    const [opSize, setOpSize] = useState('smallOp');
    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const operators = ['+', '-', 'x', '/', '='];

    const changeSize = () => {
        const currentSize = numberSize.slice(0, numberSize.length-3);
        currentSize === 'small' ? setSizes('med') : 
        currentSize === 'med' ? setSizes('large') : 
        currentSize === 'large' ? setSizes('xl') :
        currentSize === 'xl' ? setSizes('xs') : setSizes('small');
    }

    const setSizes = (size: string) => {
        setNumberSize(size+'Num');
        setOpSize(size+'Op');
    }

    return (
    <Layout>
      <button 
        style={{ margin: "10px" }} 
        onClick={changeSize}>
          Toggle Number Size
      </button>
      <div 
        style={{ display: "flex" }}>
      <div 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center' 
        }}>
      {
        operators.map((operator) => 
        <div style={{ border: '1px solid black' }}>
          <Operator symbol={operator} size={opSize} />
        </div>
        )
      }
        </div>
        <div 
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center' 
          }}>
      {
        digits.map((digit) => 
        <div style={{ border: '1px solid black' }}>
          <Number 
            num={digit} 
            size={numberSize} />
        </div>
        )
      }
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Problem />
          <Problem />
          <Problem />
          <Problem />
          <Problem />
        </div>
      </div>
    </Layout>
    )
}

export default Home;
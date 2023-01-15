import { useState } from 'react';
import Number from '../components/Number';
import Operator from '../components/Operator';
import Layout from '../components/Layout';

const Symbols = () => {
    const [numberSize, setNumberSize] = useState('smallNum');
    const [opSize, setOpSize] = useState('smallOp');
    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const operators = ['+', '-', 'x', '/', '='];

    const changeSize = () => {
        const currentSize = numberSize.slice(0, numberSize.length-3);
        currentSize === 'small' ? setSizes('med') : 
        currentSize === 'med' ? setSizes('large') : 
        currentSize === 'large' ? setSizes('xs') : setSizes('small');
    }

    const setSizes = (size: string) => {
        setNumberSize(size+'Num');
        setOpSize(size+'Op');
    }
    return (
        <Layout>
      <div 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          maxWidth: '600px' 
          }}>
        <div style={{ marginTop: '10px', textAlign: 'center', padding: '10px', maxWidth: `${window.innerWidth-10}` }}><em>Ignore this random and not at all useful page, or play with clicking this button. 
          I'm mainly here because the website developer likes clicking things and resized the numbers a bunch while drawing them. 
          They haven't removed me yet and might experiment more here, so click to your heart's content! </em></div>
      <div><button 
        style={{ margin: "10px" }} 
        onClick={changeSize}>
          Toggle Number Size
      </button>
      </div>
      </div>
      <div 
        style={{ display: "flex", justifyContent: 'center' }}>
      <div 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center' 
        }}>
      {
        operators.map((operator) => 
        <div style={{ border: '1px solid black' }} key={'op'+operator.toString()}>
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
        <div style={{ border: '1px solid black' }} key={'num'+digit.toString()}>
          <Number 
            num={digit} 
            size={numberSize} />
        </div>
        )
      }
        </div>
      </div>
    </Layout>

    )
}

export default Symbols;
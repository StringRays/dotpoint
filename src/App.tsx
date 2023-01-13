import React from 'react'
import Number from './Number'

function App() {

  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
      {
        digits.map((digit) => 
        <div style={{ border: '1px solid black' }}>
          <Number num={digit} />
        </div>
        )
      }
    </div>
  )
}

export default App
import React, { useState } from 'react';


const Counter = () => {

    const [num, setNum] = useState(0);
    
  return (
    <div>
        <div>
            <h1 className='count'>{num}</h1>
            <button onClick={() => {
                setNum(num+1)
            }} className='btnInc'>Increase</button>
            <button onClick={() => {
                setNum(num-1)
            }} className='btnDec'>Decrease</button>
        </div>
        <div className='incFive'>
            <button className='incrementFive' onClick={() => {
                setNum(num + 5)
            }}>Increase Five</button>
            <button className='reset' onClick={() => {
                setNum(0)
            }}>Reset</button>
        </div>
    </div>
  )
}

export default Counter

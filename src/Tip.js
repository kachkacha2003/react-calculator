import React from 'react'
import { useState } from 'react';

export default function Tip() {
  const [num, setNum] = useState('');

  const handleNumChange = event => {
    const limit = 5;
    setNum(event.target.value.slice(0, limit));
  };
  return (
    <div className='tip'>
    <h3>Select Tip %</h3>
    <div className='buttons'>
      <button>5%</button>
      <button>10%</button>
      <button>15%</button>
      <button>25%</button>
      <button>50%</button>
      <input className='enter-procent'
        type={"number"}
        placeholder="Custom"
        value={num}
        onChange={handleNumChange}
        ></input>
      

    </div>
    </div>
  )
}

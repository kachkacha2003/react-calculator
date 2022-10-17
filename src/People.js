import React from 'react'
import { useState } from 'react';
export default function People() {
  const [num, setNum] = useState('');

  const handleNumChange = event => {
    const limit = 10;
    setNum(event.target.value.slice(0, limit));
  };
  return (
    <div className='people-quantity'>
      <h3>Number of People</h3>
      <input type={"number"}
       value={num}
       onChange={handleNumChange}
       placeholder="0"
      ></input>

    </div>
    
  )
}

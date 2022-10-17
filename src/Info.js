import React from 'react'
import {useState} from 'react';

export default function Info() {
  const [num, setNum] = useState('');

  const handleNumChange = event => {
    const limit = 10;
    setNum(event.target.value.slice(0, limit));
  };
  return (
    <div className="first-part">
      <h3>Bill</h3>
      <input
        type="number"
        id="num"
        name="num"
        placeholder='0'
        value={num}
        onChange={handleNumChange}
      />

    </div>
  )
}

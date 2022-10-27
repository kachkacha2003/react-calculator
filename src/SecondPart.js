import React from 'react'

export default function SecondPart(props) {
  return (
    <div className='second-part'>
    <div className='flex'>
      <div className='amount'>
      <h4>Tip Amount</h4>
      <h5>/ person</h5>
      </div>
      <div className='dolar'>
      <h2>$<span>{`${props.tipCalculate.toFixed(2)}`}</span></h2>

      </div>
      

    </div>
    <div className='flex-2'>
    <div className='total'>
      <h4>Total</h4>
      <h5>/ person</h5>
      </div>
      <div className='second-dolar'>
        <h2>$<span>{`${props.personCalculate.toFixed(2)}`}</span></h2>

      </div>
    

    </div>
    <button onClick={props.delete} className='reset'>RESET</button>
    </div>
  )
}

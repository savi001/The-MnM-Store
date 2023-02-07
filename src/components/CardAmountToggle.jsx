import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

const CardAmountToggle = ({amount,setIncrease,setDecrease,id}) => {
  
  return (
    <div className='cart-button'>
        <div className='amount-toggle'>
            <button onClick={()=>setDecrease(id)}>
                <FaMinus/>
            </button>
            <div className='amount-style'> {amount}</div>
            <button onClick={()=>setIncrease(id)}><FaPlus/></button>
        </div>
    </div>
  )
}

export default CardAmountToggle
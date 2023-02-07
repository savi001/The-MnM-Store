import React from 'react'
import FormatPrice from './FromatPrice'
import CardAmountToggle from './CardAmountToggle'
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../context/addtocartContext'
import { NavLink } from 'react-router-dom'

const CartItem = ({detail}) => {
    const {RemoveCartItem,setIncrease,setDecrease}=useCartContext();
    const {id,
        name,
        activeColor,
        image,
        price,
        max,
        amount}=detail


        
  return (
    <div className='cart_heading grid grid-five-column'>
        <NavLink to={`/singleproduct/${id}`}>
        <div className='cart-image--name'>
            <div>
                <figure>
                    <img src={image} alt={name}/>

                </figure>
            </div>
            <div>
                <p>{name}</p>
                <div className='color-div'>
                    <p>color:</p>
                    <div className='color-style' style={{backgroundColor:activeColor,color:activeColor}}>

                    </div>
                </div>
            </div>
        </div>
        </NavLink>
        {/*price */}
        <div className='cart-hide'>
          <p>
            {" "}

            <FormatPrice price={price}/> {" "}
            </p>  
        </div>

        {/* quantity */}
        <div>
        <CardAmountToggle amount={amount} setIncrease={setIncrease} setDecrease={setDecrease} id={id}/>
        </div>
        {/* subtotal */}
        <div className='cart-hide'>
            <p>
                <FormatPrice price={price*amount}/>
            </p>
        </div>
        <div> 
            <FaTrash className='remove_icon' onClick={() => RemoveCartItem(id)}/>
        </div>

    </div>
  )
}

export default CartItem
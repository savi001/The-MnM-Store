import React from 'react'
import FormatPrice from './FromatPrice'
import CardAmountToggle from './CardAmountToggle'
import { FaTrash } from 'react-icons/fa'

const CartItem = ({detail}) => {
    const {id,
        name,
        activeColor,
        image,
        price,
        max,
        amount}=detail


        function setIncrease(){
            // stock>amount?setamount(amount+1):setamount(stock);
           
        };
        function setDecrease(){
            // amount>1?setamount(amount-1):setamount(1);
            
        }
  return (
    <div className='cart_heading grid grid-five-column'>
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
        {/*price */}
        <div className='cart-hide'>
          <p>
            {" "}

            <FormatPrice price={price}/> {" "}
            </p>  
        </div>

        {/* quantity */}
        <div>
        <CardAmountToggle amount={amount} setIncrease={setIncrease} setDecrease={setDecrease}/>
        </div>
        {/* subtotal */}
        <div className='cart-hide'>
            <p>
                <FormatPrice price={price*amount}/>
            </p>
        </div>
        <div>
            <FaTrash className='remove_icon'/>
        </div>

    </div>
  )
}

export default CartItem
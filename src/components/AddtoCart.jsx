import React, { useEffect, useState } from 'react'
import { FaCheck } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import CardAmountToggle from './CardAmountToggle';
import { Button } from '../styles/Button';
import { useCartContext } from '../context/addtocartContext';
const AddtoCart = ({product}) => {
  const {addtoCart}=useCartContext();
    const [amount,setamount]=useState(1);
    
    console.log(product);
    const {id,colors,stock}=product
    const [activeColor,setactiveColor]=useState(colors[0]);
    function setIncrease(){
        stock>amount?setamount(amount+1):setamount(stock);
       
    };
    function setDecrease(){
        amount>1?setamount(amount-1):setamount(1);
        
    };
  return (
    <Wrapper>
        <div className='colors'>
            <p>
                Colors:
                {colors.map((curColor,index)=>{
                    return  <button key={index} style={{backgroundColor:curColor}}
                    className={activeColor===curColor? 'btnStyle active':"btnStyle"} onClick={()=>setactiveColor(curColor)}>
                       {activeColor===curColor?<FaCheck className='checkStyle'/>:null}
                    </button>
                })}
            </p>
        </div>
        <CardAmountToggle amount={amount} setIncrease={setIncrease} setDecrease={setDecrease}/>
        <NavLink to={"/cart"} 
        onClick={()=>addtoCart(id,activeColor,amount,product)}>
            <Button className='btn'>Add to Cart</Button>
        </NavLink>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;
    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }
    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;
export default AddtoCart
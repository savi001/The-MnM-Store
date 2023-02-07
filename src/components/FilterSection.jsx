import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useFilterContext } from '../context/filter_context';
import { FaCheck } from 'react-icons/fa';
import FormatPrice from './FromatPrice';
import MultiRangeSlider from "multi-range-slider-react";

const FilterSection = () => {
 
  const [value, setValue] = useState([1000, 4333])
  const {filters:{text,category,color,price,maxPrice,minPrice},updateFilterValue, all_products,FilterCategory,getMaxValue,getMinValue}=useFilterContext();
  const [minValue, set_minValue] = useState(0);
  const properMax=Math.round(maxPrice/100)
  const [maxValue, set_maxValue] = useState(10000);
  const [active,setactive]=useState("All");
  const getUniqueData=(data,property)=>{
  
    let newdata=data.map((currentele)=>{
      return currentele[property];
    })
    if(property==="colors")
    newdata=newdata.flat();

    if(property==="price")
   return newdata=[...new Set(newdata)]
   else
   return newdata=["All",...new Set(newdata)]
  }
  const categoryOnlyData=getUniqueData(all_products,"category");
  const CompanyOnlyData=getUniqueData(all_products,"company");
  const colorData=getUniqueData(all_products,"colors");
  console.log(colorData);
  const PriceData=getUniqueData(all_products,"price");
  console.log(PriceData);
  let maxprice=Math.max(...PriceData);
  const handleInput = async (e) => {

    const max=e.maxValue
    const min=e.minValue

    set_minValue(e.minValue);
    set_maxValue(e.maxValue);

    
    
    
    

    
  };
  useEffect(()=>{
    const maxevent={
      target:{
        name:"maxPrice",
        value:maxValue
      }
    }
    const minevent={
      target:{
      name:"minPrice",
      value:minValue
    }}

    updateFilterValue(maxevent)
    updateFilterValue(minevent)
    
   
  },[maxValue,minValue])




  // let newarr=[];
//   const getColors=(data)=>{
//     let newdata=data.map((currentele)=>{
//       return currentele.colors;
//     })
//     newdata=newdata.flat();
//   return (newdata=["All",...new Set(newdata)]);
//   }
// const unioncolors=getColors(all_products);
// console.log(unioncolors);
// function HandleClick(event){
  

// }
const onValueSChange = (values) => {
  setValue(values)
}

  return (
    <Wrapper>
      <div className='filter-section'>
        <form onSubmit={(e)=>e.preventDefault()}>
          <input type={"text"} name='text' value={text} onChange={updateFilterValue} placeholder='SEARCH'></input>
        </form>
      </div>
      <div className='filter-category'>
        <div>
        <h3>Category</h3>
        {categoryOnlyData.map((currentEle,index)=>{
          return <button key={index} type='button' name={"category"} onClick={updateFilterValue} className={currentEle === category ? "active" : ""} value={currentEle}>{currentEle}</button>
        })}
        </div>
      </div>

      <div className='filter-company'>
        <h3>Company</h3>
        <form action='#'>
          <select name='company' id='company' className='filter-company--select' onChange={updateFilterValue}>
            {CompanyOnlyData.map((currentEle,index)=>{
              return <option value={currentEle} key={index}>{currentEle}</option>
            })}
          </select>

        </form>

      </div>
      <div className='filter-colors colors'>
        <h3>Colors</h3>
        <div className='filter-color-style'>

          {colorData.map((currentEle,index)=>{
            if(currentEle==="All"){
              return <button key={index} name='color' type='button' className={ active===currentEle? 'color-all--style allActive':"color-all--style"}     onClick={(event)=>{
                const newevent=event;
            updateFilterValue(newevent);
            setactive(currentEle)
  
              }} value={currentEle}>All</button>
            }
            else{
            return <button
            key={index}
            name='color'
            type='button'
            style={{backgroundColor:currentEle}}
            className={ active===currentEle? 'btnStyle active':"btnStyle"}
            onClick={(event)=>{
              const newevent=event;
          updateFilterValue(newevent);
          setactive(currentEle)

            }}

            value={currentEle}
         
            >{active ===currentEle?<FaCheck className='checkStyle'/>:null}</button>}
          })}
        </div>

      </div>
      <div className='filter_price'>
        <h3>Price</h3>
        <p>
          <span>Max :</span><FormatPrice price={maxPrice*100}/>
         
        </p>
        <p>
          <span>Min :</span><FormatPrice price={minPrice*100}/>
         
        </p>
      </div>

    <MultiRangeSlider

style={{ border: 'none', boxShadow: 'none', padding: '10 10px' }}
label='false'
ruler='false'
barLeftColor='#B9F3FC'
barInnerColor='#674188'
barRightColor='#B9F3FC'
thumbLeftColor='#8EA7E9'
thumbRightColor='#8EA7E9'

      minValue={minValue}
      maxValue={maxValue}
			min={0}
			max={price/100}
			step={50}
			
			onInput={handleInput}
		/>
    </Wrapper>
     
  )
}


export default FilterSection;
const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h3 {
    padding: 2rem 0;
    font-size: bold;
  }
  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }
  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }
      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }
  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }
  .filter-color-style {
    display: flex;
    justify-content: center;
  }
  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .allActive {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
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
  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }
  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;

import React from 'react'
import FormatPrice from './FromatPrice';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button } from '../styles/Button';

const ListProduct = ({detail}) => {
    const {id,name,image,price,category,description}=detail;
    console.log();
  return (
    <div className='card grid grid-two-column'>
        <NavLink  to={`/singleproduct/${id}`}><figure>
        <img src={image} alt={name}/>
        <figcaption className='caption'>{category}</figcaption>
        </figure></NavLink>
        <div className='card-data'>
            <h3>{name}</h3>
            <p><FormatPrice price={price}/></p>
            <p>{description.slice(0,90)}...</p>
            <NavLink to={`/singleproduct/${id}`}>
                <Button className='btn'>Read More</Button>
            </NavLink>
        </div>
        
        </div>
  )
}


export default ListProduct



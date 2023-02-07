import styled from "styled-components";
import { useProductContext } from "./context/productcontext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Container } from "./styles/Container";

import {GiAlarmClock} from "react-icons/gi"
import {TbTruckDelivery,TbReplace} from "react-icons/tb"
import {MdSecurity,MdDeliveryDining} from "react-icons/md"

import PageNavigation from "./components/PageNavigation";
import MyImage from "./components/MyImage";
import FormatPrice from "./components/FromatPrice";
import Timer from "./components/Timer";
import Stars from "./components/Stars";
import AddtoCart from "./components/AddtoCart";



const API="https://api.pujakaitem.com/api/products";
const SingleProduct=()=>{
  useEffect(()=>{
    getSingleProduct(`${API}?id=${productID}`);
  },[])
  const {id:productID}=useParams();
  const {isSingleProductLoading,singleProductDetails,getSingleProduct}=useProductContext();
  const {
    id:prod_server_id,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image
  }=singleProductDetails;
 
  if(isSingleProductLoading){
    return <div className="page-loading">..loading</div>
  }
  else{
    return <Wrapper>
      <PageNavigation title={name}/>
      <Container className="container">
        <div className="grid grid-two-column ">
        {/*product image*/}
        <div className="product_images">
        <MyImage key={prod_server_id} images_array={image}/>

      
        </div>
        {/*product data*/}
        <div className="product-data">
           <h2>{name}</h2>
           <div><Stars star={stars} reviews={reviews}/></div>
           <p className="product-data-price">MRP:<del>
            <FormatPrice price={price+Number(price*30/100)}/>
           </del>
           </p>
           <p className="product-data-price product-data-real-price">Deal of the Day : 
            <FormatPrice price={price}/>
           </p>
           <div className="hurry"><div><GiAlarmClock className="clock"/></div><div className="hurrytext">{" Hurry up ! "} 
             <Timer/></div>
           
           </div>
           <p>{description}</p>
           <div className="product-data-warranty">

            <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon"/>
                <p>Free Delivery</p>
            </div>

            <div className="product-warranty-data">
              <TbReplace className="warranty-icon"/>
              <p>10 Days Instant Replacement</p>
            </div>

            <div className="product-warranty-data">
              <MdDeliveryDining className="warranty-icon"/>
              <p>Same day Delivery</p>
            </div>

            <div className="product-warranty-data">
              <MdSecurity className="warranty-icon"/>
              <p>1 Year Warranty</p>
            </div>
           </div>

           <div className="product-data-info">
            <p>Available :
            <span>{stock>0 ? "In Stock":"Not Available"}</span>
            </p>
            <p>
              ID : <span>{prod_server_id}</span>
            </p>
            <p>
              Brand : <span>{company}</span>
            </p>
           </div>
           
           
          <hr/> 
          {stock>0 && <AddtoCart product={singleProductDetails}/>}
        </div>
        </div>

        

      </Container>
      
    </Wrapper>;
  }
  
}





























const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product_images{
    display:flex;
    align-items:center;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .hurry{
      display:flex;
      font-size:1.8rem;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.hurry};
      .hurrytext{
       margin-top: 3px;
       padding-left:0.5rem;
      }
    }
    .clock{
      font-weight: bold;
      font-size:2.5rem;
      color:"#FFFF00";
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;

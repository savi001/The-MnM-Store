import React, { useState } from 'react'
import styled from 'styled-components';
import Zoom from './Zoom';

const MyImage = ({images_array=[{}]}) => {
  const image=images_array
  const [mainImage,setmainImage]=useState(image[0]);
    

  return (
    <Wrapper>
        <div className='grid grid-four-column'>
            {image.map((curElement,index)=>{
                return <figure key={index}>
                    <img src={curElement.url}
                    alt={curElement.filename}
                    className="box-image--style"
                    onClick={()=>{
                      return setmainImage(curElement);
                    }}
                    />
                    
                </figure>
                
            })}
            
        </div>
        <div className='main-screen'>
            <img src={mainImage.url} className='mobile-img' alt=''/> 
          <Zoom  image={mainImage}/>


        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;
  .grid {
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    /* order: 2; */
    img {
      max-width: 100%;
      max-height: 100%;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
  .main-screen {
    display: grid;
    place-items: center;
    order: 1;
    .mobile-img {
      display:none;
    }
  }
  .grid-four-column {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 0.5fr);
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;
    order: 1;
    .grid-four-column {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }

    .main-screen {
    display: grid;
    place-items: center;
    order: 1;
    .mobile-img {
      display: grid;
    z-index: 1;
      max-width: 100%;
      height: auto;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
   
  }
  }
`;

export default MyImage;
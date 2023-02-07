import React from 'react'


import { useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import styled from 'styled-components';


function Zoom({image={}}) {
    const {url}=image
   const img=`${url}`
    

    return (
        <Wrapper
        className="container"
        >
            <div 
            className="left"
            >
                <div 
                className="left_2" 
                >
                    <ReactImageMagnify 
                        {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: img,
                                
                                
                            },
                            largeImage: {
                                src: img,
                                width: 1800,
                                height: 2000,
                                

                                
                            },
                            enlargedImageContainerDimensions: {
                               
                                width:"162%",
                                height:"161%",
                                
                                
                               
                                
                            },
                            enlargedImageContainerClassName:"large"
                        
                        }}
                    />
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper=styled.section`
height: auto;
      /* box-shadow: ${({ theme }) => theme.colors.shadow}; */
.container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
}

.left {
    display: flex;
    height: 50vh;
}



.left_2 {
    /* margin-top:100px; */
}
.left_2 img {
    width: 500px;
    height: 100%;
    object-fit: contain;
    box-shadow: ${({ theme }) => theme.colors.shadow};
}
.active {
    border: 2px solid #e77600;
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: none;
   
  }
`
export default Zoom;
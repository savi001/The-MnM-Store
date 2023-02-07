import React from 'react'
import styled from 'styled-components'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import Trusted from './components/Trusted'
import Featured from './components/featured'

const Home = () => {
  return (
    <Wrappper>
      <HeroSection content="Welcome to The M n' M Store, your one-stop-shop for all your grocery needs. We are an online grocery store that delivers fresh, high-quality products right to your doorstep. Our goal is to make grocery shopping more convenient and efficient for busy individuals and families.

With our user-friendly website, you can easily browse and shop for a wide variety of products, including fresh produce, meats, dairy products, pantry staples, and much more. We carefully source our products from trusted suppliers to ensure that they meet the highest standards of quality and freshness"/>
      <Featured/>
      <Services/>
      
      <Trusted/>
    </Wrappper>
  )
}
const Wrappper=styled.section`

`;
export default Home
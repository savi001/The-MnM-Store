import React, { useContext } from 'react'
import HeroSection from './components/HeroSection'
import { AppContext } from './context/productcontext'

const About = () => {
  const myname=useContext(AppContext)
  return (
   <>
   {/* {myname} */}
   <HeroSection content="M&M Grocery Ecommerce is a revolutionary new startup that is changing the way people shop for groceries. We are an online grocery store that delivers fresh, high-quality products right to your doorstep. Our goal is to make grocery shopping more convenient and efficient for busy individuals and families.

We understand that grocery shopping can be a time-consuming and tedious task, which is why we have made it our mission to make it as easy and stress-free as possible. Our website is user-friendly and easy to navigate, making it simple to find the products you need. We offer a wide variety of products, including fresh produce, meats, dairy products, pantry staples, and much more..

Our team is made up of passionate and dedicated individuals who are committed to providing the highest level of service to our customers. We carefully source our products from trusted suppliers to ensure that they meet the highest standards of quality and freshness.

We are a startup and we are constantly striving to improve our service and offerings to our customers. We value your feedback and welcome any suggestions you may have to help us better serve you.

At M&M Grocery Ecommerce, we are committed to providing our customers with an unparalleled shopping experience. We look forward to serving you and becoming your go-to online grocery store."/>
   </>
  )
}

export default About
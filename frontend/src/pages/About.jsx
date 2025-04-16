import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox';


const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt='' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
          This is an online platform that allows users to buy and sell second-hand items easily. 
          It provides detailed product descriptions, images, and pricing information to help users make informed purchases. 
          We ensure secure transactions and verify sellers for your peace of mind. Each item is carefully reviewed for quality and authenticity. 
          Our platform is user-friendly and accessible, making it easy for anyone to navigate and list items for sale or purchase. 
          </p>
          <p>
          We offer a variety of secure payment methods and flexible delivery options to suit your preferences. 
          By buying and selling second-hand items, you're helping reduce waste and promote sustainability. 
          Additionally, we provide a return policy to ensure you're completely satisfied with your purchase, with easy returns within 7 days of delivery. 
          Browse reviews and ratings from other customers to help you make the best purchasing decisions.
          </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>
          Our mission is to enable simple and secure buying and selling of second-hand items by providing users with an intuitive platform featuring detailed product descriptions, clear images, and transparent pricing. 
          Our goal is to reduce waste, promote sustainable consumption, and connect people looking for quality products at affordable prices. 
          Through reliable transactions, security measures, and customer support, we strive to create a community where every user feels safe and satisfied while selling or buying. 
          We believe every item deserves a second chance – join us and be part of the change!
          </p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>
          We carefully verify all listed second-hand items to ensure they meet quality standards. 
          Every product goes through a detailed inspection so buyers can shop with confidence, knowing they are getting reliable items at great prices.
          </p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>
          Our platform is designed for a smooth and hassle-free experience. 
          Whether you're buying or selling, our intuitive interface makes the process quick, easy, and secure. 
          Find the best deals on second-hand products without leaving your home!
          </p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>
          We prioritize customer satisfaction by providing dedicated support for all your needs. 
          Whether you have questions about a product, need help with a transaction, or require assistance with returns, our team is here to help every step of the way.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About

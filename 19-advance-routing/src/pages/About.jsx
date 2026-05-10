import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import Company from './Company'
import Product from './Product'

const About = () => {
  return (
    <div>
      <div className='flex justify-center gap-5 p-5'>
        <p><Link to='/about/company' className='bg-gray-800 px-6 py-2 text-sm font-semibold rounded hover:underline cursor-pointer'>Company</Link></p>
        <p><Link to='/about/product' className='bg-gray-800 px-6 py-2 text-sm font-semibold rounded hover:underline cursor-pointer'>Product</Link></p>
        <p><Link to='/about/ceo' className='bg-gray-800 px-6 py-2 text-sm font-semibold rounded hover:underline cursor-pointer'>CEO</Link></p>
      </div>
      
      <Outlet/>
      {/* <h1>About Page</h1> */}
    </div>
  )
}

export default About

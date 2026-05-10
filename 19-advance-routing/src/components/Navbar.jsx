import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()

  const returnHome = () => {
    navigate('/')
  }
  
  return (
    <div className='flex justify-between items-center bg-cyan-800 p-5 '>
      <h2 onClick={returnHome} className='text-xl font-bold hover:underline cursor-pointer'>CWJihad</h2>
      <div className='flex gap-10 font-semibold'>
        <Link  to='/'>Home</Link>
        <Link to='/courses'>Courses</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar

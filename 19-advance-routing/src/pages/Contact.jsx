import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

  const navigate = useNavigate()

  const returnHome = () => {
    navigate('/')
  }
  
  return (
    <div>
      <button onClick={returnHome} className='bg-gray-800 text-gray-300 text-sm px-5 py-2 m-2 rounded cursor-pointer active:scale-95'>Return Home</button>
      <h1>Contact Page</h1>
    </div>
  )
}

export default Contact

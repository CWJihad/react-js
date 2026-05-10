import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <div className='nav'>
        <span>CWJihad</span>
        <div>
            {/* Page will be reload  */}
          {/* <a href="/">Home</a>
          <a href="/contact">Contact</a>
          <a href="/about">About</a> */}

          {/* Page will not be reload */}
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Nav

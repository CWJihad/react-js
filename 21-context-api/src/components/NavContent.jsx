import React, { useContext } from 'react'
import { PostDataContext } from '../context/ThemeContext'


const NavContent = (props) => {
  const PostData = useContext(PostDataContext)
  return (
    <div className='nav-content'>
      <h4>Home</h4>
      <h4>About</h4>
      <h4>Contact</h4>
      <h4>Services</h4>
      {/* <h4>{PostData}</h4> */}
      {/* <h4 style={{color: 'black', background: 'white', fontSize: '16px'}} >{props.theme}</h4> */}
    </div>
  )
}

export default NavContent

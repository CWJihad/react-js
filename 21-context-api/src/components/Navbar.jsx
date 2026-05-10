import React, { useContext } from 'react'
import NavContent from './NavContent'
import { PostDataContext, ThemeDataContext } from '../context/ThemeContext'

const Navbar = (props) => {

  // const PostData = useContext(PostDataContext)
  const ThemeData = useContext(ThemeDataContext)
  
  return (
    <div className={ThemeData[0]}>
      <h2>{ThemeData[2]}</h2>
      <NavContent theme={props.theme}/>
    </div>
  )
}

export default Navbar

import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext';

const Button = () => {

    const [l, s] = useContext(ThemeDataContext)
    console.log(l, s);
    
    const ChangeTheme = () => {
        s( l == 'dark' ? 'light' : 'dark')
        // console.log(l);
        // console.log('working');
        
    }
    
  return (
    <div className='btnDiv'>
      <button onClick={ChangeTheme}>{l}</button>
    </div>
  )
}

export default Button

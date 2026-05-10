import React, { createContext, useState } from 'react'

export const PostDataContext = createContext()
export const ThemeDataContext = createContext()

const ThemeContext = (props) => {

  const [theme, setTheme] = useState("dark");
  const [name, setName] = useState('CWJihad');
    
  return (
    <div>
      {/* <PostDataContext.Provider value="CWJihad">
      {props.children}
      </PostDataContext.Provider> */}
      <ThemeDataContext.Provider value={[theme, setTheme, name]}>
        {props.children}
      </ThemeDataContext.Provider>
    </div>
  )
}

export default ThemeContext

import React from 'react'

const Button = (props) => {
    
  return (
    <div>
      <button onClick={() => {
        // props.setTheme(props.theme == "Light" ? "Dark" : "Light")
        props.setTheme("Dark")
      }}>Change</button>
    </div>
  )
}

export default Button

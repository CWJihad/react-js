import React from 'react'


const btnClick = () => {
  console.log("Button Clicked");
  
}
const mouseHover = () => {
  console.log("Cursor Pointed");

}

const Button = () => {
  return (
    <div>
      <div>
        <button onClick={btnClick} className='bg-red-500 py-2 px-5 rounded-xl m-10 cursor-pointer'>Click Me</button>
        <button onMouseEnter={mouseHover} onClick={() => {
          console.log("Explore inside fn of onClick")
        }} className='bg-blue-500 py-2 px-5 rounded-xl m-10 cursor-pointer'>Explore</button>
      </div>
    </div>
  )
}

export default Button

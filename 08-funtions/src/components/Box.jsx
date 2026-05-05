import React from 'react'


const mouseMoving = (ele) => {
  console.log("Mouse is moving on container");
  console.log(ele.clientX);
  console.log(ele.clientY);
  
}

const Box = () => {
  return (
    <div>
       <div onMouseMove={(elem) => 
        {
          // console.log('x: ', elem.clientX);
          // console.log('y: ', elem.clientY);
          mouseMoving(elem)
        
        }} className="box m-5 h-50 w-50 bg-pink-600">

      </div>
    </div>
  )
}

export default Box

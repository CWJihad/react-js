import React from 'react'



const pageWheel = () => {
  console.log("Page is wheeling.......");
  
}




const App = () => {
  return (
    <div onWheel={(elem) => {
      // console.log(elem);
      
      console.log(elem.deltaY); // value of up-down wheeling speed  
      // pageScroll()
    }}>

      <div className="page1 h-screen w-full bg-gray-400">

      </div>

      <div className="page1 h-screen w-full bg-gray-600">

      </div>

      <div className="page1 h-screen w-full bg-gray-800">

      </div>
      
    </div>
  )
}

export default App

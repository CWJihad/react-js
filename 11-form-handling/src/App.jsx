import React from 'react'

const App = () => {

  const formHandler = (e) => {
    e.preventDefault()
    console.log("Form Submitted");
    
  }
  
  return (
    <div>
      <h1>Form Handling</h1>
      <form action="" onSubmit={(e) => {
        formHandler(e)
      }}>
        <input type="text" placeholder='Enter your name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App

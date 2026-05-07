import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('');

  const formHandler = (e) => {
    e.preventDefault()
    console.log("Form Submitted by", title);
    setTitle('')
  }
  
  return (
    <div>
      <h1>Form Handling</h1>
      <form action="" onSubmit={(e) => {
        formHandler(e)
      }}>
        <input type="text" placeholder='Enter your name' value={title} onChange={(e) => {
          setTitle(e.target.value)
          console.log(e.target.value);
        }} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App

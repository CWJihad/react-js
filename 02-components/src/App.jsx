import React from 'react'
import Card from './components/Card.jsx'
import Navbar from './components/Navbar.jsx'

const App = () => {

  const user = "Jihad"
  const age = 89

  return (
    <div>
      <Navbar/>
      <Card/>
      <Navbar/>
    </div>
  )
}

export default App

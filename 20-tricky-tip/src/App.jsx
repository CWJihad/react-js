import React from 'react'
import { useState } from 'react'
import Button from './components/Button';

const App = () => {

  const [theme, setTheme] = useState("Light");
  
  return (
    <div>
      <h1>The theme is: {theme}</h1>
      <Button setTheme={setTheme} />
    </div>
  )
}

export default App

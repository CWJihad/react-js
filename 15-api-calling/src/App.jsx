import React, { useState } from 'react'
import axios from 'axios'


const App = () => {

  const [data, setData] = useState([]);

  // api call with js built in method fetch()
  /*
  const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    console.log(res);
    console.log(data);
    
  }
  */

  // api call with js library which is axios
  const getData = async () => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(data);
    
  }

  const getPhoto = async () => {
    const res = await axios.get('https://picsum.photos/v2/list')
    setData(res.data)
  }
  
  return (
    <div>
      <h1>Api Calling</h1>
      <button onClick={getPhoto}>Click</button>
      {data.map((elem, idx) => {
        return <div>{idx+1} author: <h1> {elem.author} </h1></div>
      })}
    </div>
  )
}

export default App

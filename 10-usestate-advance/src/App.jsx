import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)
  const [obj, setObj] = useState({username: 'Jihad', age: 20})
  const [arr, setArr] = useState([10, 20, 30])

  const changeObj = () => {
    const newobj = {...obj}
    newobj.username = 'Ahad'
    newobj.age = 25
    setObj(newobj)
  }

  const arrFn = () => {
    const newArr = [...arr]
    newArr.push(90)
    console.log(newArr);
    
    setArr(newArr)
  }

  const changeObjNew = () => {
    setObj(n => ({...n, age: 25}))
  }

  // batch updating

  const onTimeChange = () => {
    // that will not be work at a time to update
    /*
    setNum(num+1)
    setNum(num+1)
    setNum(num+1)
    */

    // solution is batch updating
    setNum(i => (i+1))
    setNum(i => (i+1))
    setNum(i => (i+1))
    console.log(num);
    
  }


  return (
    <div>
      <h1>Username is {obj.username} and age is {obj.age}</h1>
      <button onClick={changeObj}>Change Obj</button> <br />
      <button onClick={changeObjNew}>New Way</button>

      <h1>objbers: {arr}</h1>
      <button onClick={arrFn}>Change Arr</button> <br />
      <h1>The num: {num}</h1>
      <button onClick={onTimeChange}>At a Time</button>
    </div>
  )
}

export default App

import React from 'react'

const App = () => {

  // local storage have basic 4 methods: setItem(), getItem(), removeItem(), clear()
  // localStorage.setItem("location", "Pabna")

  // setItem() to store data with key-value pair
  /*
  localStorage.setItem("username", "Jihad")
  localStorage.setItem("age", 18)
  localStorage.setItem("location", "Pabna")
  */

  // getItem() to get value by using key

  const username = localStorage.getItem("username")
  const age = localStorage.getItem("age")
  const location = localStorage.getItem("location")
  // console.log(username, age, location); // get values

  // console.log(typeof (username, age, location)); // local storage store data as a string formate

  const len = localStorage.length
  // console.log(len); // you get all length of localstorage

  // removeItem() to remove a specific item using that item key
  /*
  localStorage.removeItem("username")
  localStorage.removeItem("age")
  */

  // clear() to clear or remove all data from localstorage
  // localStorage.clear()

  //TODO: Now let's try with object
  const user = {
    username: "Jihad",
    age: 20,
    location: "Pabna"
  }

  localStorage.setItem("user", JSON.stringify(user)) // if you are storing without string data you should convert that data into string formate using JSON.stringify()

  const data = JSON.parse(localStorage.getItem("user")) // to get stringified data you should convert that data original form by using JSON.parse() 
  console.log(data);
  


  

  
  
  return (
    <div>
      Quick Revision of Local Storage
    </div>
  )
}

export default App

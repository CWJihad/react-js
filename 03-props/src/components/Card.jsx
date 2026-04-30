import React from 'react'

const Card = (props) => {
    console.log(props.img);
    
  return (
    <div>
    <div className="card">
        <img src={props.img}  alt="" />
        <h1>{props.user}</h1>
        <p>I am {props.age} years old </p>
        <button>View Profile</button>
      </div>
    </div>
  )
}

export default Card

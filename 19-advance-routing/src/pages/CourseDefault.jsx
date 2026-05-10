import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDefault = () => {

    const params = useParams()
    console.log(params);
    
    
  return (
    <div>
      <h1>{params.id} Default Page for Courses</h1>
    </div>
  )
}

export default CourseDefault

import React from 'react'


const inputTextChange = () => {
  console.log("Function work when input text is changing");

}


const paramsPass = (val) => {
  console.log(val)
}

function Input() {
  return (
    <div>
      <div>
        <input onChange={inputTextChange} className='text-white bg-gray-600 border placeholder:text-sm w-[25%] border-gray-500 py-2 px-5 rounded-full m-5 outline-0' type="text" placeholder='Write something........' />
      </div>

      <div>
        <input onChange={(elem) => {
          paramsPass(elem.target.value)
          // console.log(elem.target.value);
        }} className='text-white bg-gray-600 border placeholder:text-sm w-[25%] border-gray-500 py-2 px-5 rounded-full m-5 outline-0' type="text" placeholder='Write something........' />
      </div>
    </div>
  )
}

export default Input

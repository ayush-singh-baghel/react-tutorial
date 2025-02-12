import React, { useEffect, useRef, useState } from 'react'

export default function UseRef() {

  const [count, setCount] = useState(0)

  //   let val = 3; 
  let data = useRef(1)
  //  console.log(data)

  const btnRef = useRef()

  const handleCount = () => {
    // val = val + 1
    // console.log("The value of val is ", val)

    data.current = data.current + 1
    console.log("The value of data is ", data.current)
    setCount(count + 1)
  }

  useEffect(() => {
    console.log("useEffect called")
  })

  const handleColor = () => {
    btnRef.current.style.backgroundColor = "red"
  }

  return (
    <div className='mt-[10%]'>
      <h1 className='text-gray-50 text-2xl font-semibold'>useRef in React JS</h1>
      {/* <input type='text' placeholder='Enter your name' className='mt-7 p-1 rounded-lg outline-none' ref={inputRef}/> */}

      <p className='mt-6 text-lg text-gray-200'>Count : {count}</p>
      <button type='' className='p-2 border border-gray-200 rounded-xl bg-gray-500 mt-3 font-medium' onClick={handleCount} ref={btnRef}>Update Count</button>
      <div>
        <button type='' className='p-2 border border-gray-200 rounded-xl bg-gray-700 mt-10 font-medium' onClick={handleColor}>Change the color of Update Button</button>
      </div>

    </div>
  )
}

import React, { useEffect, useState } from 'react'

export default function UseEffect() {

  const [data, setData] = useState(0)
  const [count, setCount] = useState(1)

  useEffect(() => {
    const handleData = () => {
      setData(data + 1)
    }

    console.log("useEffect called")
  })

  return (
    <div>
      <h1>useEffect in React JS</h1>
      <p>Data : {data}</p>
      <p>Count : {count}</p>
      <button onClick={handleData}>Update Data</button>
      <button>Update Count</button>
    </div>
  )
}

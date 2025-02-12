import React, { useState } from 'react'
import Child from './Child'

export default function Parent() {

  const [data, setData] = useState({
    name: "Ayush Singh",
    city: "GKP",
    email: "ayush@gmail.com",
    phone: "+91 7275826778"
  })

  return (
    <div>
      <Child data={data} />
    </div>
  )
}

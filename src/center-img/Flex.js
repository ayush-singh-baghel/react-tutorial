import React from 'react'
import msd from "../assets/msd-img.webp"

export default function Flex() {
  return (
    <div className="h-screen flex flex-col">
  <h1 className="p-4 text-center text-2xl font-semibold text-gray-300">Set the image in center using Flexbox</h1>
  <div className="flex flex-grow justify-center items-center">
    <img src={msd} className="object-contain rounded-xl" alt="Centered Image" />
  </div>
</div>


  )
}

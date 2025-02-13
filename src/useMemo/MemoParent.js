import React from 'react'
import UseMemo from './UseMemo'

export default function () {
  return (
    <div className='flex flex-col h-screen text-center items-center justify-center text-gray-50 text-2xl font-semibold'>
        <h1>useMemo in React JS</h1>
        <UseMemo marks={84} subject={"Mathh"}/>
    </div>
  )
}

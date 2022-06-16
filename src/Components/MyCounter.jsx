import React, { useContext, useState } from 'react'
import { CounterContext } from '../Context/CounterContext'
import ComponentA from './ComponentA'

const MyCounter = () => {
  const {increase, decrease, count} =  useContext(CounterContext)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increase}>Increase</button>
        <button  onClick={decrease}>Decrease</button>
        <ComponentA/>
    </div>
  )
}

export default MyCounter
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './Reducx/slices/counter'
import Component2 from './Component'

const App = () => {
  const count = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  return (
     <div>
      <h1>{count}</h1>

      <button className=' border  p-2 m-2  bg-gray-200' onClick={() => dispatch(increment())}>
        +
      </button>

      <button  className=' border  p-2 m-2  bg-gray-200' onClick={() => dispatch(decrement())}>
        -
      </button>
      <Component2/>
    </div>
  )
}

export default App
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Component2 = () => {
  const count = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default Component2
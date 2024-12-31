import React, { useContext } from 'react'
import { data } from './Home'

const Child3 = () => {
  const name = useContext(data)
  return (
    <div>
      Child3
      <h1>{name}</h1>
    </div>
  )
}

export default Child3

import React, { useCallback, useState } from 'react'
import Child2 from "./Child2"

const Child1 = () => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("text")







  
  const clickme = useCallback(() => {
    setText("xyz")
  },[text])
  return (
    <div>
      {/* <button onClick={() => setCount(count + 1)}>+</button>
      <h1>{count}</h1> */}
      <Child2 />
    </div>
  )
}

export default Child1

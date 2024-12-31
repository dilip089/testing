import React, { memo, useReducer } from 'react'

const Child2 = () => {
  const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
      return { num: state.num + 1 }
    }
    if (action.type === "DECREMENT") {
      return { num: state.num - 1 }
    }
  }
  const [state, dispatch] = useReducer(reducer, { num: 0 })

  return (
    <div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <h1>{state.num}</h1>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  )
}

export default memo(Child2)

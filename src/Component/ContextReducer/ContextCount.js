import React, { useContext } from 'react'
import CreateReducer from './CreateReducer'

const ContextCount = () => {
 const {state, dispatch} = useContext(CreateReducer)
  return (
    <div>
     <h2>{state.count}</h2>
      <button onClick={()=>dispatch({type : "INCREMENT"})}>Increment</button>
      <button onClick={()=>dispatch({type : "DECREMENT"})}>Decrement</button>
      <button onClick={()=>dispatch({type : "RESET"})}>Reset</button>
    </div>
  )
}

export default ContextCount

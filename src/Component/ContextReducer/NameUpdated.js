import React, { useContext } from 'react'
import CreateContectName from './CreateContectName'

const NameUpdated = () => {
 const {state, dispatch} = useContext(CreateContectName)
  return (
    <div>
       <p>Name: {state.name}</p>
      <p>Age: {state.age}</p>
      <button onClick={()=>dispatch({type : "UPDATE", payload: "Patidar"})}>UPDATE</button>
      <button onClick={()=>dispatch({type : "INCREMENT"})}>INCREMENT</button>
    </div>
  )
}

export default NameUpdated

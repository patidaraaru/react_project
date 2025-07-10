import React, { useReducer } from 'react'
import CreateContectName from './CreateContectName'

const NameProvider = ({children}) => {
 const initiativeState = {
  name : "Aarti",
  age :'24',
 }
const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return { ...state, name: action.payload };

    case "INCREMENT" :
     return {...state, age : String(Number(state.age) + 1) }
     
    default:
      return state;
  }
};

 const [state, dispatch] = useReducer(reducer, initiativeState)

  return (
    <CreateContectName.Provider value={{state,dispatch}}>
      {children}
    </CreateContectName.Provider>
  )
}

export default NameProvider

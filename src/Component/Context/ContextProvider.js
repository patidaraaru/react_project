import { useState } from 'react';
import { CreatContextMsg } from './CreatContext'
import NameContent from './NameContent';

const ContextProvider = () => {
 const [count, setCount] = useState('');
 const name = "aarti";
  return (
   <CreatContextMsg.Provider value={{name, setCount, count}}>
      <NameContent/>
   </CreatContextMsg.Provider>
  )
}

export default ContextProvider

import { useContext } from 'react'
import { CreatContextMsg } from './CreatContext'

const NameContent = () => {
 const {name, setCount, count} = useContext(CreatContextMsg)
setCount(24)
  return (
    <div>
      <p>My name is : {name}</p>
      <p>My age is : {count}</p>
    </div>
  )
}

export default NameContent;

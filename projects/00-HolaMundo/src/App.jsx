import { useState } from 'react'
import TwitterFollowCard from './TwitterFollowCard'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const format = (userName)=>`@${userName}`  
  return (
    <>
      <TwitterFollowCard formatUserName={format} userName="midudev" name="Miguel Angel Duran"/>
      <TwitterFollowCard formatUserName={format} userName="pheralb" name="Pablo Hernandez"/>
      <TwitterFollowCard formatUserName={format} userName="vxnder" name="Vanderhart"/>

    </>
  )
}

export default App

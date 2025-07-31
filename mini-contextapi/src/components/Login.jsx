import React from 'react'
import { useState,useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
  const [username,setUsername] = useState("")
  const {password,setPassword} = useState("")
  const {user,setUser}  = useContext(UserContext)
  return (

    <div>
        <h2>Login</h2>
        <input type = "text" placeholder='username' onChange={(e)=>setUsername(e.target.value)}/>
        <input type = "text" placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={()=>setUser(username)}>Submit</button>
        <h2>{user}</h2>
        
    </div>
  )
}

export default Login
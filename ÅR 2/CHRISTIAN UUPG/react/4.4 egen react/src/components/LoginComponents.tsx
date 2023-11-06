import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginComponent() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useNavigate()
    async function handleSubmit(e:React.FormEvent){
        e.preventDefault()
        const res = await fetch('http://10.111.3.78:3001/api/login', {
            method: 'Post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        const data = await res.json()
        console.log(data)
        if(data.token){
            router("/shop",{replace:true})
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
            <input type="text"placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const CaptainLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captainData, setCaptainData] = useState({});
  
  const HandleSubmit=(e)=>{
    e.preventDefault()
    setCaptainData({
      email:email,
      password:password
    })
    console.log(captainData)
setEmail("")
setPassword("")
  }
  
  return (
    <div className='p-7 flex h-screen flex-col justify-between'>
  
     <div>
     <img
        className='w-20 mb-10'
        src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
        alt="Uber Logo"
      />
            <h1 className='text-2xl font-semibold mb-4 text-center bg-slate-100 py-2 '>Captain Login</h1>

     <form onSubmit={HandleSubmit}>
        <h3 className='text-xl mb-3 font-semibold '>Whats your Email?</h3>
        <input
         required
         className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full  text-lg placeholder:text-base' 
         type="email" 
         value={email}
         onChange={(e)=>{
setEmail(e.target.value)
         }}
       placeholder='Email' />
        <h3 className='text-xl mb-3 font-semibold '>Enter Password</h3>
        <input
                 className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
         type="password"
      placeholder='password'
      value={password}
      onChange={(e)=>{
        setPassword(e.target.value)
                 }}
       />
       <button className='bg-[#111] mb-7  text-white rounded px-4 py-2 border w-full font-semibold' 
>Login</button>
      </form>
    <p className='text-center  font-semibold'>Wanna be a Driver? <Link to="/captain-signup" className='text-blue-600 '>Register as a Captain</Link></p>
     </div>
     <div className='mt-10 text-center'>
     <Link to="/login" className='bg-[#d4e023] mb-7  text-black rounded px-10 py-2 border w-full font-semibold' 
     >Sign in as User</Link>
     </div>
    </div>
  )
}

export default CaptainLogin
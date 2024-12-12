import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const CaptainSignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setuserData] = useState();
  
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setuserData({
      fullName:{
      firstName:firstName,
      lastName:lastName},
      email:email,
      password:password
    })
    console.log(userData)
    setFirstName("")
    setLastName("")
    setEmail("")
    setPassword("")
  }
  
  return (
    <div className='p-7 flex h-screen flex-col justify-between'>
  
     <div>
     <img
        className='w-20 mb-3'
        src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
        alt="Uber Logo"
      />
                  <h1 className='text-2xl mb-4 font-semibold  text-center bg-slate-100 py-2 '>Captain Signup</h1>

     <form onSubmit={handleSubmit}>
        <h3 className='text-xl mb-1 font-semibold'>What's your Name?</h3>
        <div className='flex gap-2'> 
        <input
         required
         className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base' 
         type="text" 
         value={firstName}
         onChange={(e) => setFirstName(e.target.value)}
         placeholder='First Name' />
       <input
         required
         className='bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base' 
         type="text" 
         value={lastName}
         onChange={(e) => setLastName(e.target.value)}
         placeholder='Last Name' />
        </div>
        <h3 className='text-xl mt-2  font-semibold '>Whats your Email?</h3>

        <input
         required
         className='bg-[#eeeeee] mt-2  rounded px-4 py-2 border w-full  text-lg placeholder:text-base' 
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
>SignUp</button>
      </form>
    <p className='text-center font-semibold'>Already have a Account ?<Link to="/captain-login" className='ml-2 text-blue-600 '>Login</Link></p>
     </div>
  
     <div className='text-[12px] leading-tight'>
<p>By proceeding you consent to  get calls,Whatsapp ,SMS and messages included by automated means from uber</p>
     </div>
    </div>
  )
}
export default CaptainSignUp
import React from 'react'
import {Link} from "react-router-dom"
const Riding = () => {
  return (
    <div>
  <Link to="/profile" className='fixed h-10 w-10 right-2 top-2 flex items-center justify-center rounded-full bg-white'>
    <i className="text-lg font-bold ri-home-5-line"></i>
  </Link>
      <div className='h-full'> 

      <div className="w-screen h-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://s.wsj.net/public/resources/images/BN-XR452_201802_M_20180228165525.gif"
          alt=""
          />
      </div>
      <div className='h-1/2'> 
      <div className='w-full '>
      <div className='justify-between flex p-4 items-center '>
   <img className='h-24 rounded-full w-24 object-cover ' src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww" alt="" />
<div className='items-end'>
<h2 className='text-xl font-semibold text-gray-700 ml-20 '> Uzair</h2>
<h1 className='text-2xl font-semibold'>MH-9579-1</h1> 
<p className='text-gray-600 ml-10'>White Alto</p>
<h3 className='ml-20 text-gray-600 font-semibold'><i class="ri-star-s-fill"></i>4.1</h3>
</div>
</div>
 <div className='p-1 border-2 border-gray-200 rounded-lg  '>
<div className='flex items-start gap-5'>
    <h3 className='mt-2'><i class="ri-map-pin-2-fill"></i></h3>
     <h2 className='text-xl ml-1 font-semibold'>512/11-A</h2>
    </div>
     <p className='text-[15px] ml-10 text-gray-500'>Punjab Bank okara</p>
 </div>

 <div className='p-1 border-2 border-gray-200 rounded-lg  '>
<div className='flex items-start gap-5'>
    <h3 className='mt-2'><i class="ri-cash-line"></i></h3>
     <h2 className='text-xl ml-1 font-semibold'>200 Pkr</h2>
    </div>
     <p className='text-[15px] ml-10 text-gray-500'>Payment Cash</p>
 </div>
 
</div>
<div className='flex items-center justify-center mt-4 '>
  <button className='bg-green-600  text-white py-2 px-8 rounded-full  '>Make a Payment</button>
</div>
      </div>
          </div>
    </div>
  )
}

export default Riding
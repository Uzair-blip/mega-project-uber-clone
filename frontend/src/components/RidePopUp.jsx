import React from 'react'
import { Link } from 'react-router-dom'

const RidePopUp = (props) => {
  return (
    <div>
          <div className="flex items-center ">
    <h3 className="text-2xl font-semibold mb-3">New Ride for you!</h3>
    <h5 onClick={()=>{
    props.setRidePop(false)
    }} className="absolute right-0 top-6  mr-10 text-xl">
      <i className="text-black ri-arrow-down-wide-line"></i>
    </h5>
   </div>
   <div className='flex justify-between items-center p-3 bg-yellow-400 mb-3'>
    <div className='flex items-center gap-4'>
        <img className='w-12 h-12 rounded-full object-contain ' src="https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        <h2 className='text-lg font-medium'>Ahmad</h2>
    </div>
    <h4 className='text-lg font-semibold'>2.2km</h4>
   </div>
   <div className='justify-between flex flex-col items-center gap-5'>
<div className='w-full '>
 <div className='p-2 border-2 border-gray-200 rounded-lg  '>
<div className='flex items-start gap-5'>
    <h3 className='mt-2'><i class="ri-map-pin-2-fill"></i></h3>
     <h2 className='text-2xl ml-1 font-semibold'>512/11-A</h2>
    </div>
     <p className='text-[15px] ml-10 text-gray-500'>Punjab Bank okara</p>
 </div>
 <div className='p-2 border-2 border-gray-200 rounded-lg  '>
<div className='flex items-start gap-5'>
    <h3 className='mt-2'><i class="ri-map-pin-line"></i></h3>
     <h2 className='text-2xl ml-1 font-semibold'>China Town </h2>
    </div>
     <p className='text-[15px] ml-10 text-gray-500'>Block 7, Gulshan-e-Iqbal, Lahore</p>
 </div>
 <div className='p-2 border-2 border-gray-200 rounded-lg  '>
<div className='flex items-start gap-5'>
    <h3 className='mt-2'><i class="ri-cash-line"></i></h3>
     <h2 className='text-2xl ml-1 font-semibold'>200 Pkr</h2>
    </div>
     <p className='text-[15px] ml-10 text-gray-500'>Payment Cash</p>
 </div>
 
</div>
<Link to="/captain-ride" onClick={()=>{
}} className='w-full p-2 text-center rounded-full bg-green-600 text-white'>Confirm</Link>
<button onClick={()=>{
props.setRidePop(false)
}} className='w-full p-2 rounded-full bg-red-400 text-white'>Ignore</button>
   </div>
    </div>
  )
}

export default RidePopUp
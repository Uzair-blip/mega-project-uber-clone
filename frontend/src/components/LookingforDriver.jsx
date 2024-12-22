import React from 'react'

const LookingforDriver = (props) => {
  return (
    <>
    <div className="flex items-center ">
    <h3 className="text-2xl font-semibold mb-3">Looking for Driver</h3>
    <h5 onClick={()=>{
    props.setVehicleFounder(false)
    }} className="absolute right-0 top-6  mr-10 text-xl">
      <i className="text-black ri-arrow-down-wide-line"></i>
    </h5>

   </div>
   <div className='justify-between flex flex-col items-center gap-5'>
   <img className='h-20 mt-5' src="https://www.asaproadworthys.com.au/wp-content/uploads/2021/11/Select.jpeg" alt="" />
<div className='w-full '>
 <div className='p-5 border-2 border-gray-200 rounded-lg  '>
<div className='flex items-start gap-5'>
    <h3 className='mt-2'><i class="ri-map-pin-2-fill"></i></h3>
     <h2 className='text-2xl ml-1 font-semibold'>512/11-A</h2>
    </div>
     <p className='text-[15px] ml-10 text-gray-500'>Punjab Bank okara</p>
 </div>
 <div className='p-5 border-2 border-gray-200 rounded-lg  '>
<div className='flex items-start gap-5'>
    <h3 className='mt-2'><i class="ri-map-pin-line"></i></h3>
     <h2 className='text-2xl ml-1 font-semibold'>China Town </h2>
    </div>
     <p className='text-[15px] ml-10 text-gray-500'>Block 7, Gulshan-e-Iqbal, Lahore</p>
 </div>
 <div className='p-5 border-2 border-gray-200 rounded-lg  '>
<div className='flex items-start gap-5'>
    <h3 className='mt-2'><i class="ri-cash-line"></i></h3>
     <h2 className='text-2xl ml-1 font-semibold'>200 Pkr</h2>
    </div>
     <p className='text-[15px] ml-10 text-gray-500'>Payment Cash</p>
 </div>
 
</div>
   </div>
          </>
  )
}

export default LookingforDriver
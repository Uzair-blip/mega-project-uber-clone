import React from 'react'

const Captaindetails = () => {
  return (
    <div>
              <div className='h-[40%] p-6'>
      <div className='flex items-center justify-between'>
    <div className='flex items-center gap-3 justify-between'>
        <img className='h-14 w-14 rounded-full object-cover ' src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFufGVufDB8fDB8fHww" alt="" />
        <h3 className='text-2xl font-bold' >Uzair </h3>
    </div>
        <div>
  <h4 className='text-xl font-semibold'>Rs:3000</h4>
  <p className='font-sm font-medium text-gray-500'>Earned</p>
</div>
      </div>
   <div className='flex mt-10 p-3 bg-gray-100 rounded-lg justify-between items-center'>
    <div  className='text-center'>
      <i className="text-3xl mb-2  font-thin ri-timer-2-line"></i>
      <h5 className='text-lg font-medium'>10.2</h5>
      <p className="text-gray-400"> Hours Online </p>
    </div>
    <div className='text-center'>
      <i className="text-3xl mb-2  font-thin ri-speed-up-line"></i>
      <h5 className='text-lg font-medium'>10.2</h5>
      <p className="text-gray-400">Hours Online </p>
    </div>
    <div className='text-center'>
      <i className="text-3xl mb-2  font-thin ri-booklet-line"></i>
      <h5 className='text-lg font-medium'>10.2</h5>
      <p className="text-gray-400">Hours Online </p>
    </div>
  
   </div>

</div>
    </div>
  )
}

export default Captaindetails
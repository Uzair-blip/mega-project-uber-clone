import React from 'react'

const WaitingforDriver = () => {
  return (
    <>
    <div className="flex justify-between items-center">
    <h3 className="text-2xl font-semibold mb-3">Meet at Pickup Point</h3>
    <h2 className='p-2 bg-black text-white font-semibold '>2 min</h2>

   </div>
   <div className='justify-between flex p-4 items-center '>
   <img className='h-24 rounded-full w-24 object-cover ' src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww" alt="" />
<div className='items-end'>
<h2 className='text-xl font-semibold text-gray-700 ml-20 '> Uzair</h2>
<h1 className='text-2xl font-semibold'>MH-9579-1</h1> 
<p className='text-gray-600 ml-10'>White Alto</p>
<h3 className='ml-20 text-gray-600 font-semibold'><i class="ri-star-s-fill"></i>4.1</h3>
</div>
   </div>
          </>
)
}

export default WaitingforDriver
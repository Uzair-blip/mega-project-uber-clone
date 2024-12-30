import React, { useEffect, useRef, useState } from 'react'
import {Link} from 'react-router-dom'
import Captaindetails from '../components/Captaindetails'
import RidePopUp from '../components/RidePopUp'
import gsap from 'gsap'
const CaptainProfile = () => {
  const [ridePop, setRidePop] = useState(true);
  
  useEffect(() => {
    if(ridePop){

      gsap.to(RideRef.current,{
        transform:"translateY(0)"
      })
    }
    else{
      gsap.to(RideRef.current,{
        transform:"translateY(100%)"
      })
    }
  }, [ridePop]);
  const RideRef = useRef(null);
  return (
<div>
  <Link to="/captain-profile" className='fixed h-10 w-10 right-2 top-2 flex items-center justify-center rounded-full bg-white'>
    <i className="text-lg font-medium ri-logout-box-r-line"></i>
  </Link>
      <div className='h-full'> 

      <div className="w-screen h-[70%]">
        <img
          className="w-full h-full object-cover"
          src="https://s.wsj.net/public/resources/images/BN-XR452_201802_M_20180228165525.gif"
          alt=""
          />
      </div>
<Captaindetails/>
</div>
<div ref={RideRef} className="fixed  w-full bg-white z-10  bottom-0 px-3 py-6">
  <RidePopUp setRidePop={setRidePop}/>
      </div>
</div>
  )
}

export default CaptainProfile
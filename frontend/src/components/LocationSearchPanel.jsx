import React from 'react'

const LocationSearchPanel = (props) => {
//  sample array for location
const location=[
    "234,street lahore greentown",
    "234,street lahore multan",
    "234,street lahore sargoda",
    "234,street lahore okara",
]
    return (
    <div>
        
        {location.map(function(elem,idx){
            return  <div key={idx} onClick={()=>{
                props.setVehiclePanel(true)
                props.setPanelOpen(false)
            }} className='flex justify-start  p-3  border-2 active:border-black  cursor-pointer items-center gap-3 my-2'>
            <h2 className='bg-[#eee] h-8 w-8 flex items-center justify-center rounded-full'>
                <i className='ri-map-pin-fill '></i>
            </h2>
            <h5>{elem}</h5>
        </div> 
        })}
       
        
    </div>
  )
}

export default LocationSearchPanel
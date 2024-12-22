import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingforDriver from "../components/LookingforDriver";
import WaitingforDriver from "../components/WaitingforDriver";
const Profile = () => {
  const [tripDetails, setTripDetails] = useState({
    pickup: "",
    destination: "",
  });
  const [panelOpen, setPanelOpen] = useState(false);
  const panelref = useRef(null);
  const panelCloseref = useRef(null);
  const Vehiclepanelref = useRef(null);
  const VehicleFounderRef = useRef(null); 
  const WaitingDriverRef = useRef(null); 
  const ConfirmRideref = useRef(null); 
  const [vehiclePanel, setVehiclePanel] = useState();
  const [confirmRidePanel, setConfirmRidePanel] = useState();
 const [vehicleFounder, setVehicleFounder] = useState(false);
 const [waitingforDriver, setWaitingforDriver] = useState(false);
 
  // for animations and panel open and close 
  
  useEffect(() => {
    if (panelOpen) {
      gsap.to(panelref.current, {
        height: "70%",
        duration: 0.5,
        ease: "power2.out",
        padding:24,
        opacity:1
      });
      gsap.to(panelCloseref.current, {
       opacity:1
      });
    } else {
      gsap.to(panelref.current, {
        height: "0%",
        duration: 0.5,
        ease: "power2.out",
        padding:0,
        opacity:0

      });
      gsap.to(panelCloseref.current, {
        opacity:0
       });
    }
  }, [panelOpen]);
  useEffect(() => {
    if(vehiclePanel){

      gsap.to(Vehiclepanelref.current,{
        transform:"translateY(0)"
      })
    }
    else{
      gsap.to(Vehiclepanelref.current,{
        transform:"translateY(100%)"
      })
    }
  }, [vehiclePanel]);
  useEffect(() => {
    if(confirmRidePanel){

      gsap.to(ConfirmRideref.current,{
        transform:"translateY(0)"
      })
    }
    else{
      gsap.to(ConfirmRideref.current,{
        transform:"translateY(100%)"
      })
    }
  }, [confirmRidePanel]);
  useEffect(() => {
    if(vehicleFounder){

      gsap.to(VehicleFounderRef.current,{
        transform:"translateY(0)"
      })
    }
    else{
      gsap.to(VehicleFounderRef.current,{
        transform:"translateY(100%)"
      })
    }
  }, [vehicleFounder]);
  useEffect(() => {
    if(waitingforDriver){

      gsap.to(WaitingDriverRef.current,{
        transform:"translateY(0)"
      })
    }
    else{
      gsap.to(WaitingDriverRef.current,{
        transform:"translateY(100%)"
      })
    }
  }, [waitingforDriver]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTripDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!tripDetails.pickup || !tripDetails.destination) {
      alert("Please fill in both pickup and destination locations");
      return;
    }

    // Log trip details
    console.log("Trip Details:", tripDetails);

    // Reset form
    setTripDetails({
      pickup: "",
      destination: "",
    });

    // Toggle panel state
    setPanelOpen(false);
  };

  return (
    <div className="relative">
      <img
        className="w-32 pl-9 absolute"
        src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
        alt="Uber Logo"
      />
      <div className="w-screen h-screen">
        <img
          className="w-full h-full object-cover"
          src="https://s.wsj.net/public/resources/images/BN-XR452_201802_M_20180228165525.gif"
          alt=""
        />
      </div>
      {/* Ride bool k liye */}
      <div className="absolute   h-screen flex flex-col justify-end w-full bottom-0">
        <div className="h-[30%] p-5 bg-white relative">
          <h5 ref={panelCloseref} onClick={()=>{
            setPanelOpen(false)
          }} className="absolute opacity-0 right-6 top-6 text-xl">
          <i class="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold mb-3">Find a Trip</h4>
          <form onSubmit={onSubmitHandler}>
            <div className="line absolute h-20 w-1 ml-2 top-[36%] bg-gray-900 rounded-full"></div>
            <input
              className="bg-[#eee] w-full px-8 py-2 text-base rounded-sm mb-2"
              type="text"
              name="pickup"
              onClick={() => setPanelOpen(true)}
              value={tripDetails.pickup}
              onChange={handleInputChange}
              placeholder="Add a pick-up Location"
            />
            <input
              className="bg-[#eee] w-full  px-8 py-2 text-base rounded-sm"
              type="text"
              name="destination"
              onClick={() => setPanelOpen(true)}
              value={tripDetails.destination}
              onChange={handleInputChange}
              placeholder="Enter your Destination"
            />
                      </form>
        </div>
        <div ref={panelref} className="h-0 opacity-0 overflow-hidden bg-white">
  {panelOpen && <LocationSearchPanel vehiclePanel={vehiclePanel} setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />}
</div>

      </div>
      {/* vehicle data */}
      <div ref={Vehiclepanelref} className="fixed  w-full bg-white z-10 translate-y-full bottom-0 px-3 py-6">
    <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}/>
      </div>
      <div ref={ConfirmRideref} className="fixed  w-full bg-white z-10 translate-y-full bottom-0 px-3 py-6">
     <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFounder={setVehicleFounder} />
      </div>  
      <div ref={VehicleFounderRef}  className="fixed  w-full bg-white z-10 translate-y-full bottom-0 px-3 py-6">
        <LookingforDriver setVehicleFounder={setVehicleFounder}/>
      </div>
      <div ref={WaitingDriverRef} className="fixed  w-full bg-white z-10 bottom-0 px-3 py-6">
        <WaitingforDriver setWaitingforDriver={setWaitingforDriver}/>
      </div>
      
    </div>
  );
};

export default Profile;

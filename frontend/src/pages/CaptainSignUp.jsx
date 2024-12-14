import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { captainDataContext } from '../context/CaptainContext';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CaptainSignUp = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const navigate = useNavigate();
  const [captain, setCaptain] = useContext(captainDataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const captaindata = {
      fullname: {
        firstname: firstname,
        lastname: lastname
      },
      email: email,
      password: password,
      vehicle: {
        type: vehicleType,
        color: vehicleColor,
        model: vehicleModel,
        plate: vehiclePlate,
        capacity: vehicleCapacity
      }
    };

    try {
      const response = await axios.post("http://localhost:4000/captain/register", captaindata);
      if (response.status === 200) {
        const data = response.data;
        console.log(data);
        setCaptain(data.captain);
        localStorage.setItem("token", data.token);

        // Show success toast
        toast.success('Registration Successful! Redirecting...', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        });

        setTimeout(() => navigate("/captain-profile"), 3000); // Redirect after 3 seconds
      }
    } catch (error) {
      console.log("Some error in data. Please insert correct data.");
      toast.error('Registration Failed. Please try again!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setVehicleType("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleColor("");
    setVehicleModel("");
  };

  return (
    <div className='p-7 flex h-screen flex-col justify-between'>
      <ToastContainer />
      <div>
        <img
          className='w-20 mb-3'
          src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
          alt="Uber Logo"
        />
        <form onSubmit={handleSubmit}>
          <h3 className='text-xl mb-1 font-semibold'>What's your Name?</h3>
          <div className='flex gap-2'>
            <input
              required
              className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
              type="text"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder='First Name' />
            <input
              required
              className='bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
              type="text"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              placeholder='Last Name' />
          </div>
          <h3 className='text-xl mt-2  font-semibold '>Whats your Email?</h3>
          <input
            required
            className='bg-[#eeeeee] mt-2  rounded px-4 py-2 border w-full  text-lg placeholder:text-base'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email' />
          <h3 className='text-xl mb-3 font-semibold '>Enter Password</h3>
          <input
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="password"
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <h3 className='text-xl mb-1 font-semibold'>Vehicle Information</h3>
          <div className='mb-4'>
            <select
              required
              className='bg-[#eeeeee] rounded px-4 py-1 border w-full text-base placeholder:text-base mb-4'
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="">Select Vehicle Type</option>
              <option value="motorcycle">Motorcycle</option>
              <option value="car">Car</option>
              <option value="rickshaw">Rickshaw</option>
            </select>
          </div>
          <div className='flex flex-wrap gap-2 mb-4'>
            <input
              required
              className='bg-[#eeeeee] rounded px-4 py-2 border w-[48%] text-lg placeholder:text-base'
              type="text"
              placeholder='Color'
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
            />
            <input
              required
              className='bg-[#eeeeee] rounded px-4 py-2 border w-[48%] text-lg placeholder:text-base'
              type="text"
              placeholder='Model'
              value={vehicleModel}
              onChange={(e) => setVehicleModel(e.target.value)}
            />
            <input
              required
              className='bg-[#eeeeee] rounded px-4 py-2 border w-[48%] text-lg placeholder:text-base'
              type="text"
              placeholder='Number Plate'
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
            />
            <input
              required
              className='bg-[#eeeeee] rounded px-4 py-2 border w-[48%] text-lg placeholder:text-base'
              type="number"
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
            />
          </div>
          <button className='bg-[#111] mb-7  text-white rounded px-4 py-2 border w-full font-semibold'>SignUp</button>
        </form>
        <p className='text-center mb-4 font-semibold'>Already have an Account? <Link to="/captain-login" className='ml-2 text-blue-600 '>Login</Link></p>
      </div>
    
    </div>
  );
};

export default CaptainSignUp;

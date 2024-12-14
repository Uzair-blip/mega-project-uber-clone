import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { userDataContext } from "../context/UserContext";
const UserSignUp = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  const [user, setUser] = useContext(userDataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    }

    setPasswordError(""); // Clear any existing error if password is valid

    const userdata = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
    };

    console.log(userdata);

    try {
      const response = await axios.post("http://localhost:4000/user/register", userdata);
      if (response.status === 201) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem("token",data.token)

        navigate("/profile");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("Failed to register. Please try again.");
    }

    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className='p-7 flex h-screen flex-col justify-between'>
      <div>
        <img
          className='w-20 mb-3'
          src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
          alt="Uber Logo"
        />
        <h1 className='text-2xl font-semibold mb-4 text-center bg-slate-100 py-2'>User Signup</h1>
        <form onSubmit={handleSubmit}>
          <h3 className='text-xl mb-1 font-semibold'>What's your Name?</h3>
          <div className='flex gap-2'>
            <input
              required
              className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              placeholder='First Name'
            />
            <input
              required
              className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              placeholder='Last Name'
            />
          </div>
          <h3 className='text-xl mt-2 font-semibold'>What's your Email?</h3>
          <input
            required
            className='bg-[#eeeeee] mt-2 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
          />
          <h3 className='text-xl mb-3 font-semibold'>Enter Password</h3>
          <input
            required
            className='bg-[#eeeeee] mb-1 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && (
            <p className='text-red-600 text-sm mt-1'>{passwordError}</p>
          )}
          <button
            className='bg-[#111] mb-7 mt-3 text-white rounded px-4 py-2 border w-full font-semibold'
          >
            SignUp
          </button>
        </form>
        <p className='text-center font-semibold'>
          Already have an account?
          <Link to="/login" className='ml-2 text-blue-600'>Login</Link>
        </p>
      </div>
      <div className='mt-10 text-center'>
        <Link to="/captain-signup" className='bg-[#d4e023] mb-7 text-black rounded px-10 py-2 border w-full font-semibold'>
          Sign up as Captain
        </Link>
      </div>
      <div className='text-[12px] mt-4 leading-tight'>
        <p>By proceeding you consent to get calls, WhatsApp, SMS, and messages included by automated means from Uber</p>
      </div>
    </div>
  );
};

export default UserSignUp;

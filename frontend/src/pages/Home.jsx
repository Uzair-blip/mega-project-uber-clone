import React from 'react';
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='h-screen bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8fHww)] flex pt-5 justify-between flex-col w-full'>
      <img
        className='w-32 pl-9'
        src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
        alt="Uber Logo"
      />
      <div className='bg-white py-5 px-10 '>
        <h2 className='text-2xl font-bold'>Get Started with Uber</h2>
        <div className='flex flex-row'>
          <Link to="/login" className='bg-black text-2xl w-full rounded mt-2 py-3 text-white flex items-center justify-center'>
            Continue
            <span className='ml-2 mt-2'>
              <GoArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

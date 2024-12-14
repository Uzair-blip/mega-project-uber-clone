import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userDataContext } from "../context/UserContext";
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // For error messages
  const navigate = useNavigate();
  const [user, setUser] = useContext(userDataContext);

  const HandleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Email and Password cannot be empty.");
      return;
    }

    try {
      const userdata = { email:email, password:password };
      const response = await axios.post("http://localhost:4000/user/login", userdata);
      if (response.status === 200) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem("token",data.token)
        setEmail("");
        setPassword("");
        setError(""); // Clear any previous errors
        navigate("/profile");
      } else {
        setError("Invalid login credentials.");
      }
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      setError("Failed to login. Please try again.");
    }
  };

  return (
    <div className="p-7 flex h-screen flex-col justify-between">
      <div>
        <img
          className="w-20 mb-4"
          src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
          alt="Uber Logo"
        />
        <h1 className="text-2xl font-semibold mb-4 text-center bg-slate-100 py-2">
          User Login
        </h1>
        <form onSubmit={HandleSubmit}>
          <h3 className="text-xl mb-3 font-semibold">What's your Email?</h3>
          <input
            required
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <h3 className="text-xl mb-3 font-semibold">Enter Password</h3>
          <input
            required
            className="bg-[#eeeeee] mb-2 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-600 text-sm mb-3">{error}</p>}
          <button className="bg-[#111] mb-7 text-white rounded px-4 py-2 border w-full font-semibold">
            Login
          </button>
        </form>
        <p className="text-center font-semibold">
          New Here?{" "}
          <Link to="/signup" className="text-blue-600">
            Create new Account
          </Link>
        </p>
      </div>
      <div className="mt-10 text-center">
        <Link
          to="/captain-login"
          className="bg-[#d4e023] mb-7 text-black rounded px-10 py-2 border w-full font-semibold"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;

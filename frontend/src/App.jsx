import React from 'react'
import Home from './pages/Home'
import UserLogin from "./pages/UserLogin"
import UserSignUp from "./pages/UserSignUp"
import CaptainLogin from "./pages/CaptainLogin"
import CaptainSignUp from "./pages/CaptainSignUp"
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
<>
<Routes>
  <Route  path="/" element={<Home/>} />
  <Route  path="/login" element={<UserLogin/>} />
  <Route  path="/signup" element={<UserSignUp/>} />
  <Route  path="/captain-login" element={<CaptainLogin/>} />
  <Route  path="/captain-signup" element={<CaptainSignUp/>} />
</Routes>
</>
  )
}

export default App
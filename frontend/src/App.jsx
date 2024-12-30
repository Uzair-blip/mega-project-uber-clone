import React from 'react'
import Home from './pages/Home'
import UserLogin from "./pages/UserLogin"
import UserSignUp from "./pages/UserSignUp"
import CaptainLogin from "./pages/CaptainLogin"
import CaptainSignUp from "./pages/CaptainSignUp"
import Profile from './pages/Profile'
import { Route, Routes } from 'react-router-dom'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainProfile from './pages/CaptainProfile'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import CaptainLogout from './pages/CaptainLogout'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Riding from './pages/Riding'
import CaptainRide from './pages/CaptainRide'
import FinishRide from './pages/FinishRide'

const App = () => {
  return (
<>
<ToastContainer />
<Routes>
  <Route  path="/" element={<Home/>} />
  <Route  path="/login" element={<UserLogin/>} />
  <Route  path="/signup" element={<UserSignUp/>} />
  <Route  path="/riding" element={<Riding/>} />
  <Route  path="/captain-login" element={<CaptainLogin/>} />
  <Route  path="/captain-signup" element={<CaptainSignUp/>} />
  <Route  path="/captain-signup" element={<CaptainSignUp/>} />
  <Route  path="/captain-ride" element={<CaptainRide/>} />
  <Route  path="/finish-ride" element={<FinishRide/>} />
  <Route path='/profile' element=
  {<UserProtectWrapper>   
      <Profile/>
    </UserProtectWrapper>}  />
  <Route path='/user/logout' element=
  {<UserProtectWrapper>   
      <UserLogout/>
    </UserProtectWrapper>}  
     />
  <Route path='/captain/logout' element=
  {<CaptainProtectWrapper>   
      <CaptainLogout/>
    </CaptainProtectWrapper>}  
     />
    <Route path='/captain-profile' element={
      <CaptainProtectWrapper>
        <CaptainProfile/>
      </CaptainProtectWrapper>
        }
/>
</Routes>
</>
  )
}

export default App
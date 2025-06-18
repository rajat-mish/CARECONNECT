import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Doctors from './pages/Doctors.jsx'
import MyProfile from './pages/MyProfile.jsx'
import MyAppointment from './pages/MyAppointment.jsx'
import Appointment from './pages/Appointment.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'





const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
    

      <Navbar/>
 


      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/doctors/:speciality' element={<Doctors/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/my-profile' element={<MyProfile/>}/>
        <Route path='/my-appointments' element={<MyAppointment/>}/>
        <Route path='/appointment/:docId' element={<Appointment/>}/>
      </Routes>
      
      <Footer/>
     
    </div>
  )
}

export default App

import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import { AdminContext } from './context/AdminContex';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import AllApointment from './pages/Admin/AllApointment';
import AddDocter from './pages/Admin/AddDocter';
import DoctorsList from './pages/Admin/DoctorsList';
import { DoctorContext } from './context/DoctorContex';
import DoctorDashboard from './pages/Doctor/DoctorDashboard';
import DoctorAppointments from './pages/Doctor/DoctorAppointments';
import DoctorProfile from './pages/Doctor/DoctorProfile';


const App = () => {
  const { aToken } = useContext(AdminContext)
  const { dToken } = useContext(DoctorContext)



  return aToken || dToken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      <Navbar />
      <div className='flex items-start'>
        <Sidebar />
        <Routes>
          {/*admin route*/}

          <Route path='/' element={<></>} />
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/all-appointments' element={<AllApointment />} />
          <Route path='/add-doctor' element={<AddDocter />} />
          <Route path='/doctor-list' element={<DoctorsList />} />

          {/*Doctor route*/}

          <Route path='/doctor-dashboard' element={< DoctorDashboard />} />
          <Route path='/doctor-appointments' element={< DoctorAppointments />} />
          <Route path='/doctor-profile' element={< DoctorProfile />} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  )
}

export default App

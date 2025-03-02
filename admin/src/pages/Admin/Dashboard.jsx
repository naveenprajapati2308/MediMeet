import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContex'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'

const Dashboard = () => {
    const { aToken, getDashData, cancelAppointment, dashData } = useContext(AdminContext)
    const { slotDateFormat } = useContext(AppContext)

    useEffect(() => {
        if (aToken) {
            getDashData()
        }
    }, [aToken])

    return dashData && (
        <div className='min-h-screen w-full p-5 bg-gray-100 flex flex-col gap-6'>
            {/* Stats Section */}
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
                <div className='flex items-center gap-4 bg-white p-6 rounded-lg shadow-md border border-gray-300 hover:scale-105 transition-all'>
                    <img className='w-16' src={assets.doctor_icon} alt="" />
                    <div>
                        <p className='text-2xl font-semibold text-gray-700'>{dashData.doctors}</p>
                        <p className='text-gray-500'>Doctors</p>
                    </div>
                </div>
                <div className='flex items-center gap-4 bg-white p-6 rounded-lg shadow-md border border-gray-300 hover:scale-105 transition-all'>
                    <img className='w-16' src={assets.appointments_icon} alt="" />
                    <div>
                        <p className='text-2xl font-semibold text-gray-700'>{dashData.appointment}</p>
                        <p className='text-gray-500'>Appointments</p>
                    </div>
                </div>
                <div className='flex items-center gap-4 bg-white p-6 rounded-lg shadow-md border border-gray-300 hover:scale-105 transition-all'>
                    <img className='w-16' src={assets.patients_icon} alt="" />
                    <div>
                        <p className='text-2xl font-semibold text-gray-700'>{dashData.patients}</p>
                        <p className='text-gray-500'>Patients</p>
                    </div>
                </div>
            </div>

            {/* Latest Bookings */}
            <div className='bg-white shadow-md rounded-lg overflow-hidden flex-1'>
                <div className='flex items-center gap-4 px-6 py-4 bg-gray-200 border-b'>
                    <img src={assets.list_icon} alt="" />
                    <p className='font-semibold text-lg'>Latest Bookings</p>
                </div>
                <div className='overflow-y-auto max-h-[60vh] divide-y'>
                    {dashData.latestAppointment.map((item, index) => (
                        <div className='flex items-center px-6 py-4 gap-4 hover:bg-gray-100 transition' key={index}>
                            <img className='rounded-full w-12 h-12 object-cover' src={item.docData.image} alt="" />
                            <div className='flex-1 text-sm'>
                                <p className='text-gray-800 font-medium'>{item.docData.name}</p>
                                <p className='text-gray-600'>{slotDateFormat(item.slotDate)}</p>
                            </div>
                            {item.cancelled ? <p className='text-red-400 text-xs font-medium'>Cancelled</p>
                                : item.isCompleted
                                    ? <p className='text-green-500 text-xs font-medium'>Completed </p>
                                    : <img onClick={() => { cancelAppointment(item._id) }} className='w-10 cursor-pointer' src={assets.cancel_icon} alt="" />}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Dashboard

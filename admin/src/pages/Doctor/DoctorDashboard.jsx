import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContex'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'

const DoctorDashboard = () => {

    const { dToken, dashData, setDashData, getDashData, completeAppointment, cancelAppointment } = useContext(DoctorContext)
    const { currencySymbol, slotDateFormat } = useContext(AppContext)

    useEffect(() => {
        if (dToken) {
            getDashData()
        }
    }, [dToken])

    // ✅ Handle Cancel Appointment
    const handleCancelAppointment = async (id) => {
        await cancelAppointment(id); // API Call to cancel
        setDashData(prev => ({
            ...prev,
            latestAppointments: prev.latestAppointments.map(app =>
                app._id === id ? { ...app, cancelled: true } : app
            )
        }));
    };

    // ✅ Handle Complete Appointment
    const handleCompleteAppointment = async (id) => {
        await completeAppointment(id); // API Call to complete
        setDashData(prev => ({
            ...prev,
            latestAppointments: prev.latestAppointments.map(app =>
                app._id === id ? { ...app, isCompleted: true } : app
            )
        }));
    };

    return dashData && (
        <div className='m-5'>
            {/* Stats Section */}
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10'>
                <div className='flex items-center gap-4 bg-white p-6 rounded-lg shadow-md border border-gray-300 hover:scale-105 transition-all'>
                    <img className='w-16' src={assets.earning_icon} alt="" />
                    <div>
                        <p className='text-2xl font-semibold text-gray-700'>{currencySymbol} {dashData.earnings}</p>
                        <p className='text-gray-500'>Earnings</p>
                    </div>
                </div>
                <div className='flex items-center gap-4 bg-white p-6 rounded-lg shadow-md border border-gray-300 hover:scale-105 transition-all'>
                    <img className='w-16' src={assets.appointments_icon} alt="" />
                    <div>
                        <p className='text-2xl font-semibold text-gray-700'>{dashData.appointments}</p>
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

            {/* Latest Bookings Section */}
            <div className='bg-white shadow-md rounded-lg overflow-hidden flex-1 mt-8 px-6 py-4'>
                <div className='flex items-center gap-4 px-6 py-4 bg-gray-200 border-b'>
                    <img src={assets.list_icon} alt="" />
                    <p className='font-semibold text-lg'>Latest Bookings</p>
                </div>
                <div className='overflow-y-auto max-h-[60vh] divide-y'>
                    {dashData.latestAppointments.map((item, index) => (
                        <div className='flex items-center px-6 py-5 gap-6 hover:bg-gray-100 transition' key={index}>
                            <img className='rounded-full w-14 h-14 object-cover' src={item.userData.image} alt="" />
                            <div className='flex-1 text-sm'>
                                <p className='text-gray-800 font-medium text-lg'>{item.userData.name}</p>
                                <p className='text-gray-600'>{slotDateFormat(item.slotDate)}</p>
                            </div>
                            {
                                item.cancelled ? <p className='text-red-400 text-xs font-medium'>Cancelled</p>
                                    : item.isCompleted ? <p className='text-green-400 text-xs font-medium'>Completed</p>
                                        : <div className='flex'>
                                            <img onClick={() => handleCancelAppointment(item._id)} className='w-10 cursor-pointer' src={assets.cancel_icon} alt="Cancel" />
                                            <img onClick={() => handleCompleteAppointment(item._id)} className='w-10 cursor-pointer' src={assets.tick_icon} alt="Complete" />
                                        </div>
                            }
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default DoctorDashboard;

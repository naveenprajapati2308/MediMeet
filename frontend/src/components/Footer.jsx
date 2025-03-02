import React from 'react'
import { assets } from '../assets/assets'
import './Footer.css'

const Footer = () => {
    return (
        <div className='md:mx-10  ' >
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my10 mt-40 text-sm'>
                {/* ----left side of footer--- */}
                <div className='left-side'>
                    <img className="h-14 w-44 mb-6 cursor-pointer object-cover border-2 border-white-500 rounded-full" src={assets.logo} alt="" />
                    <p className='w-full md:w-2/3 text-grey-600 leading-6'>"Fostering a strong doctor-patient bond built on trust, compassion, <br /> care, and commitment to ensure healthier, happier lives for all."</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>

                </div>


                {/* -------middle part of footer------- */}
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col text-gray-600 gap-2'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy policy</li>
                    </ul>

                </div>

                {/* ------right side of footer------ */}
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col text-gray-600 gap-2'>
                        <li>+91987654321</li>
                        <li>prescription@gmail.medimeet</li>
                    </ul>
                </div>
            </div>
            {/* ----------copyright text  */}
            <div>
                <hr />
                <p className='py-6 text-sm text-center'>Copyright 2025-26@ MediMeet - All Right Reserved                       </p>

            </div>
        </div>
    )
}

export default Footer

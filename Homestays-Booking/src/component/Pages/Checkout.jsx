

import { useLocation } from 'react-router-dom';
import React, { useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import RoomsData from '../../Rooms.json';
import emailjs from '@emailjs/browser';

import sectionElement from '../../assets/section-element.png';
import Element1 from '../../assets/element-1.png';
import Element2 from '../../assets/element-2.png';
import Element3 from '../../assets/element-3.png';

const Checkout = () => {
    const { id } = useParams();
    const room = RoomsData.find((room) => room.id === id);

    if (!room) {
        return (
            <div className='text-center py-20 text-3xl text-red-500'>
                Room Not Found ?
            </div>
        );
    }

    const [showModal, setShowModal] = useState(false);
    const form = useRef();
    const [status, setStatus] = useState({ text: '', type: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setShowModal(true);
        setStatus({ text: '', type: '' });

        try {
            await emailjs.sendForm(
                'service_c1lcmym',
                'template_3d23n3n',
                form.current,
                { publicKey: 'iDnsyeNW2wHQtj5-7' }
            );
            setStatus({ text: 'Message sent successfully ✅', type: 'success' });
            form.current.reset();
        } catch (error) {
            setStatus({ text: 'Failed to send message ❌', type: 'error' });
        }
    };
    const location = useLocation();
    const { checkIn, checkOut } = location.state || {}; // fallback to empty if not passed


    return (
        <>
            {/* Banner Section */}
            <div className="section-banner booking-banner mt-5 pt-6 relative flex flex-col items-center justify-center">
                <img src={sectionElement} className='w-full h-full section-banner-element-1 absolute' alt="" />
                <img src={sectionElement} className='w-full h-full section-banner-element-2 absolute' alt="" />
                <img src={Element1} className='w-full h-full section-banner-element-3 absolute' alt="" />
                <img src={Element2} className='w-full h-full section-banner-element-4 absolute' alt="" />
                <img src={Element3} className='w-full h-full section-banner-element-5 absolute' alt="" />

                <div className="section-banner-content flex items-center flex-col text-center z-auto">
                    <h1 className='text-7xl font-semibold'>Booking <br />Confirmation</h1>
                    <div className="mt-10 bg-[#d5f1f1] w-[250px] p-2 text-xl rounded">
                        <Link to='/'>Home</Link> &nbsp; / &nbsp;
                        <span className='text-gray-500'>Checkout</span>
                    </div>
                </div>

                {/* Booking Content */}
                <div className="py-[150px] px-[8%] w-full">
                    <div className="bg-[#f7fefe] rounded-3xl shadow-md p-10 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
                        {/* Form Section */}
                        <div className="lg:col-span-2">
                            <h2 className='text-2xl font-semibold mb-6'>Confirm & Payment</h2>
                            <form ref={form} className='space-y-6' onSubmit={handleSubmit}>
                                {/* First Name */}
                                <div className="flex flex-col gap-2">
                                    <label className='text-sm font-semibold uppercase text-[#1d2b3a]'>First Name</label>
                                    <div className="flex items-center bg-[#f0fbfd] border border-[#d0e7ea] rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-[#10b4d1] transition-all duration-200">
                                        <input type="text" placeholder='Enter Your First Name' className='w-full bg-transparent outline-none text-[#1d2b3a] placeholder:text-[#1d2b3a]/60' name="firstName" required />
                                        <i className="ri-user-line text-[#10b4d1] text-xl ml-2 animate-pulse"></i>
                                    </div>
                                </div>

                                {/* Last Name */}
                                <div className="flex flex-col gap-2">
                                    <label className='text-sm font-semibold uppercase text-[#1d2b3a]'>Last Name</label>
                                    <div className="flex items-center bg-[#f0fbfd] border border-[#d0e7ea] rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-[#10b4d1] transition-all duration-200">
                                        <input type="text" placeholder='Enter Your Last Name' className='w-full bg-transparent outline-none text-[#1d2b3a] placeholder:text-[#1d2b3a]/60' name="lastName" required />
                                        <i className="ri-user-smile-line text-[#10b4d1] text-xl ml-2 animate-pulse"></i>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex flex-col gap-2">
                                    <label className='text-sm font-semibold uppercase text-[#1d2b3a]'>E-mail</label>
                                    <div className="flex items-center bg-[#f0fbfd] border border-[#d0e7ea] rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-[#10b4d1] transition-all duration-200">
                                        <input type="email" placeholder='Enter Your E-mail' className='w-full bg-transparent outline-none text-[#1d2b3a] placeholder:text-[#1d2b3a]/60' name="email" required />
                                        <i className="ri-mail-line text-[#10b4d1] text-xl ml-2 animate-pulse"></i>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex flex-col gap-2">
                                    <label className='text-sm font-semibold uppercase text-[#1d2b3a]'>Phone</label>
                                    <div className="flex items-center bg-[#f0fbfd] border border-[#d0e7ea] rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-[#10b4d1] transition-all duration-200">
                                        <input type="tel" placeholder='Enter Your Phone Number' className='w-full bg-transparent outline-none text-[#1d2b3a] placeholder:text-[#1d2b3a]/60' name="phone" required />
                                        <i className="ri-phone-line text-[#10b4d1] text-xl ml-2 animate-pulse"></i>
                                    </div>
                                </div>

                                <button type='submit' className='bg-[#1cb6be] text-white px-6 py-3 rounded-full font-medium mt-4 hover:bg-[#16a3aa] transition duration-300 flex items-center justify-center gap-2'>
                                    <i className="ri-bookmark-line"></i> Confirm and Pay
                                </button>
                            </form>
                        </div>

                        {/* Booking Summary */}
                        <div className="bg-white p-5 rounded-2xl shadow-md">
                            <img src={room.photos?.[0]} alt={room.title} className='rounded-xl mb-4 w-full h-[200px] object-cover' />
                            <div className="flex justify-between text-sm text-gray-600 mb-2 px-1 mt-3">
                                <div className="flex items-center gap-2">
                                    <i className="ri-user-line"></i> Adults: {room.adults}
                                </div>
                                <div className="flex items-center gap-2">
                                    <i className="ri-expand-left-right-line"></i> Size: {room.size}
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mt-3">{room.title}</h3>
                            <div className="mt-4 space-y-3 text-sm text-gray-600 border-t border-gray-200 pt-4">
                                <p className="flex justify-between"> <span>Check In Date:</span><span>{ checkIn }</span></p>
                                <p className="flex justify-between"> <span>CheckOut Date: </span><span>{ checkOut}</span></p>
                                <p className="flex justify-between"> <span>Total Nights:</span><span>1</span></p>
                                <p className="flex justify-between font-bold text-lg"> <span>Total Cost:</span><span className='text-[#1cb6be]'>${room.price}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            {/* Confirmation Modal */}
            {showModal && status.text && (
                <div className={`fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-[9999]  ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                    <div className="bg-white rounded-2xl p-8 w-[90%] max-w-md shadow-lg text-center relative">
                        <h2 className='text-3xl font-bold text-[#1cb6be] mb-4'>Booking Confirmed!</h2>
                        <p className="text-gray-600">Thank you for your reservation. <br />{status.text}</p>
                        <button className='mt-6 bg-[#1cb6be] hover:bg-[#16a3aa] text-white px-6 py-2 rounded-full' onClick={() => setShowModal(false)}>Close</button>
                        <button className='absolute top-3 right-4 text-gray-500 hover:text-black text-2xl' onClick={() => setShowModal(false)}>&times;</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Checkout;


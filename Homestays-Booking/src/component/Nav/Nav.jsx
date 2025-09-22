
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bookmark from '../../assets/bookmark.svg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import logo from '../../assets/Ghotul-logo.png';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [adults, setAdults] = useState(1);

    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            checkInDate &&
            checkOutDate &&
            new Date(checkOutDate) > new Date(checkInDate) &&
            adults >= 1
        ) {
            setIsModalOpen(false);
            navigate('/rooms');
        }
    };

    return (
        <>
            {/* Navbar */}
            <nav
                className={` bg-white px-[5%] h-[60px] w-full fixed top-4 left-0 lg:left-8 rounded-2xl lg:w-[95%] flex justify-between items-center z-[9999] transition-all duration-300 ${isScrolled ? 'bg-[#111111] shadow-md' : 'bg-transparent'
                    }`}
            >
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <img
                        src={logo}
                        alt="logo"
                        className="w-10 h-auto rounded-lg shadow-lg p-0.5 bg-[#23bcec] hover:shadow-2xl transition duration-300"
                    />
                    <Link to="/" className="text-3xl font-bold font-bricolage flex items-center">
                        <span className="text-2xl text-[#23bcec]">Ghotul</span>
                        <span className="text-2xl text-[#f5c518] ml-1">HomeStays</span>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex gap-6 text-sm font-medium">
                    {['Home', 'About', 'Services', 'Rooms', 'Blog', 'Contact'].map((item) => (
                        <li key={item}>
                            <Link
                                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                className="uppercase opacity-70 hover:opacity-100 transition px-3 py-2 lg:px-0 lg:py-0"
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop Buttons */}
                <div className="hidden lg:flex items-center gap-4">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-[#ecb934] text-white flex items-center gap-2 px-6 py-2 rounded-full hover:scale-110 transition"
                    >
                        <img src={bookmark} alt="bookmark" className="w-4 h-4 invert brightness-0" />
                        Book Now
                    </button>
                </div>

                {/* Mobile menu toggle */}
                <div className="lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <i className={`ri-menu-line text-3xl ${isOpen ? 'hidden' : 'block'}`}></i>
                        <i className={`ri-close-line text-3xl ${isOpen ? 'block' : 'hidden'}`}></i>
                    </button>
                </div>
            </nav>

            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            {/* Mobile Menu */}
            <div
                className={`lg:hidden fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white z-50 shadow-lg transform transition-transform duration-300
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <ul className="flex flex-col gap-4 mt-20 text-center px-4">
                    {['Home', 'About', 'Services', 'Rooms', 'Blog', 'Contact'].map((item) => (
                        <li key={item}>
                            <Link
                                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                onClick={() => setIsOpen(false)}
                                className="uppercase text-sm opacity-70 hover:opacity-100 transition"
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="flex flex-col gap-3 mt-6 items-center px-4">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-[#ecb934] text-white flex items-center justify-center gap-2 px-6 py-2 rounded-full w-full hover:scale-105 transition"
                    >
                        <img src={bookmark} alt="bookmark" className="w-4 h-4 invert brightness-0" />
                        Book Now
                    </button>
                </div>
            </div>

            {/* Modal form */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[rgba(32,79,94,0.9)] px-4 sm:px-6">
                    <div className="bg-white w-full max-w-[500px] sm:max-w-[450px] p-6 sm:p-8 md:p-10 rounded-[15px] shadow-lg relative overflow-y-auto max-h-[90vh]">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-xl font-bold text-black bg-[#eafbfb] rounded-full hover:bg-[#ecb934] hover:text-white transition duration-300"
                        >
                            x
                        </button>

                        <h2 className='text-2xl sm:text-3xl font-semibold mb-8 text-center'>Search</h2>

                        <form onSubmit={handleSubmit} className='space-y-6 sm:space-y-8'>
                            {/* Check-in */}
                            <div className="relative">
                                <label className='block text-sm sm:text-base font-[500] text-[#204f5e] tracking-widest uppercase mb-2'>
                                    Check-in
                                </label>
                                <DatePicker
                                    selected={checkInDate}
                                    onChange={(date) => setCheckInDate(date)}
                                    placeholderText="Select Check-in Date"
                                    minDate={new Date()}
                                    className="w-full p-3 h-[50px] sm:h-[60px] bg-[#eafbfb] rounded border border-[#d5f1f1] outline-none"
                                    dateFormat="dd/MM/yyyy"
                                    required
                                />
                            </div>

                            {/* Check-out */}
                            <div className="relative">
                                <label className='block text-sm sm:text-base font-[500] text-[#204f5e] tracking-widest uppercase mb-2'>
                                    Check-Out
                                </label>
                                <DatePicker
                                    selected={checkOutDate}
                                    onChange={(date) => setCheckOutDate(date)}
                                    placeholderText='Select Check-out Date'
                                    minDate={checkInDate || new Date()}
                                    className='w-full p-3 h-[50px] sm:h-[60px] bg-[#eafbfb] rounded border border-[#d5f1f1] outline-none'
                                    dateFormat="dd/MM/yyyy"
                                    required
                                />
                            </div>

                            {/* Adults */}
                            <div className="relative">
                                <label className='block text-sm sm:text-base font-[500] text-[#204f5e] tracking-widest uppercase mb-2'>
                                    Adults
                                </label>
                                <input
                                    type="number"
                                    value={adults}
                                    onChange={(e) => setAdults(e.target.value)}
                                    placeholder='0'
                                    min='1'
                                    className='w-full p-3 h-[50px] sm:h-[60px] bg-[#eafbfb] rounded border border-[#d5f1f1] outline-none'
                                    required
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type='submit'
                                disabled={
                                    !checkInDate ||
                                    !checkOutDate ||
                                    new Date(checkOutDate) <= new Date(checkInDate) ||
                                    adults < 1
                                }
                                className={`py-3 px-5 rounded-full w-full uppercase tracking-widest transition
                                    ${checkInDate && checkOutDate && new Date(checkOutDate) > new Date(checkInDate) && adults >= 1
                                        ? "bg-sky-400 text-white hover:bg-sky-500 cursor-pointer"
                                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                    }`}
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default Nav;

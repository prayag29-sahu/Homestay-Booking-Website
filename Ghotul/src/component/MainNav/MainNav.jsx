

// src/components/MainNav/MainNav.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import bookmark from '../../assets/bookmark.svg';
import logo from '../../assets/Ghotul-logo.png';

function MainNav({ showLoginModal, setShowLoginModal, isLoggedIn, handleLogout }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on link click
    const handleLinkClick = (item) => {
        if (item !== 'Home') {
            setShowLoginModal(true);
        }
        setIsOpen(false);
    };

    return (
        <>
            {/* Navbar */}
            <nav
                className={` bg-white px-[5%] h-[60px] w-full fixed top-4 left-0 lg:left-8 rounded-2xl lg:w-[95%] flex justify-between items-center z-[9999] transition-all duration-300 ${isScrolled ? 'bg-[#111111] shadow-md' : 'bg-transparent'
                    }`}
            >

                {/* Logo & Title */}
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
                                onClick={item === 'Rooms' ? () => setShowLoginModal(true) : undefined}
                                className="uppercase opacity-70 hover:opacity-100 transition"
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop Buttons */}
                <div className="hidden lg:flex items-center gap-4">
                    <button
                        onClick={isLoggedIn ? handleLogout : () => setShowLoginModal(true)}
                        className="bg-[#23bcec] text-white uppercase tracking-wider px-6 py-2 rounded-full hover:scale-110 transition"
                    >
                        {isLoggedIn ? 'Logout' : 'Login / Signup'}
                    </button>
                    <button
                        onClick={() => setShowLoginModal(true)}
                        className="bg-[#ecb934] text-white flex items-center gap-2 px-6 py-2 rounded-full hover:scale-110 transition"
                    >
                        <img src={bookmark} alt="bookmark" className="w-4 h-4 invert brightness-0" />
                        Book Now
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
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
                                to={item === 'Home' ? '/' : '#'}
                                onClick={() => handleLinkClick(item)}
                                className="uppercase text-sm opacity-70 hover:opacity-100 transition"
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="flex flex-col gap-3 mt-6 items-center px-4">
                    <button
                        onClick={isLoggedIn ? handleLogout : () => setShowLoginModal(true)}
                        className="bg-[#23bcec] text-white uppercase tracking-wider px-6 py-2 rounded-full w-full hover:scale-105 transition"
                    >
                        {isLoggedIn ? 'Logout' : 'Login / Signup'}
                    </button>
                    <button
                        onClick={() => setShowLoginModal(true)}
                        className="bg-[#ecb934] text-white flex items-center justify-center gap-2 px-6 py-2 rounded-full w-full hover:scale-105 transition"
                    >
                        <img src={bookmark} alt="bookmark" className="w-4 h-4 invert brightness-0" />
                        Book Now
                    </button>
                </div>
            </div>
        </>
    );
}

export default MainNav;

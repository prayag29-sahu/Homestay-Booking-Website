import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import service1 from '../../assets/services-1.jpg'
import service2 from '../../assets/services-2.jpg'
import service3 from '../../assets/services-3.jpg'
import service4 from '../../assets/services-4.jpg'

import feature1 from '../../assets/feature-icon-1.svg'
import feature2 from '../../assets/feature-icon-2.svg'
import feature3 from '../../assets/feature-icon-3.svg'
import feature4 from '../../assets/feature-icon-4.svg'
import feature5 from '../../assets/feature-icon-5.svg'
import feature6 from '../../assets/feature-icon-6.svg'
import vid1 from '../../assets/video1.mp4'
import vid2 from '../../assets/video2.mp4'
import element1 from '../../assets/element-1.png'
import element2 from '../../assets/element-2.png'
import element3 from '../../assets/element-3.png'

import socialIcon1 from '../../assets/social-icon-1.svg'
import socialIcon2 from '../../assets/social-icon-2.svg'
import socialIcon3 from '../../assets/social-icon-3.svg'
import socialIcon4 from '../../assets/social-icon-4.svg'

import RoomsData from '../../Rooms.json'

import heroImg from '../../assets/about.png'

import MainImg from '../../assets/hero-image.jpg'

import avatar1 from '../../assets/review-1.jpg';
import avatar2 from '../../assets/review-2.jpg';
import avatar3 from '../../assets/review-3.jpg';
import avatar4 from '../../assets/review-4.jpg';
import avatar5 from '../../assets/review-5.jpg';
import avatar6 from '../../assets/review-6.jpg';

import blog1 from '../../assets/blog-2.jpg'
import blog2 from '../../assets/blog-3.jpg'
import blog3 from '../../assets/blog-4.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination';
import { VolumeX, Volume2 } from "lucide-react"; // icons
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react"; // make sure lucide-react is installed

function Main({ setShowLoginModal }) {

    const [checkInDate, setCheckInDate] = useState(null)
    const [checkOutDate, setCheckOutDate] = useState(null)
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null)
    const prevRef = useRef(null)
    const nextRef = useRef(null)
    // const [showLoginModal, setShowLoginModal] = useState(false);

    const [activeTab, setActiveTab] = useState('All');
    const tabs = ['All', 'Economy', 'Standard', 'Luxury']
    const filteredRooms = activeTab === 'All' ? RoomsData : RoomsData.filter(room => room.type === activeTab);

    const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];
    const testimonials = [
        {
            name: "Sarah Newman",
            company: "Envato Market",
            message: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime qui quia quam asperiores neque modi possimus, laudantium molestias iste ipsum.",
        },
        {
            name: "Sarah Newman",
            company: "Envato Market",
            message: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime qui quia quam asperiores neque modi possimus, laudantium molestias iste ipsum.",
        },
        {
            name: "Sarah Newman",
            company: "Envato Market",
            message: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime qui quia quam asperiores neque modi possimus, laudantium molestias iste ipsum.",
        },
        {
            name: "Sarah Newman",
            company: "Envato Market",
            message: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime qui quia quam asperiores neque modi possimus, laudantium molestias iste ipsum.",
        },
        {
            name: "Sarah Newman",
            company: "Envato Market",
            message: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime qui quia quam asperiores neque modi possimus, laudantium molestias iste ipsum.",
        },
        {
            name: "Sarah Newman",
            company: "Envato Market",
            message: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime qui quia quam asperiores neque modi possimus, laudantium molestias iste ipsum.",
        },
    ]

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Browser will auto-check required fields first.
        navigate("/rooms"); // Navigate only after validation passes
    };

    // Hero Slideshow State
    const heroImages = [MainImg, service1, blog3];
    const [currentHero, setCurrentHero] = useState(0);

    // Automatic slideshow effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHero((prev) => (prev + 1) % heroImages.length);
        }, 3000); // 3 seconds

        return () => {
            clearInterval(interval); // cleanup interval
        };
    }, []);


    const [adults, setAdults] = useState("");


    const [isModalOpen, setIsModalOpen] = useState(false);

    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);

    const toggleMute = () => {
        const video = videoRef.current;
        if (video) {
            video.muted = !video.muted;
            setIsMuted(video.muted);
        }
    };



    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();

        // lowercase input
        const section = query.toLowerCase();

        // check if id exists
        const element = document.getElementById(section);
        if (query.toLowerCase() === 'ghotul') {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            return;
        } else if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        } else {
            alert("Section not found!");
        }
    };



    return (

        <>
            {/* home */}
            <div id='ghotul' className="hero w-full lg:px-[12%] px-[8%] py-[150px] flex items-center justify-center relative overflow-hidden">

                {heroImages.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute top-0 left-0 w-full h-full bg-center bg-cover transition-opacity duration-1000 ${index === currentHero ? 'opacity-100' : 'opacity-0'
                            }`}
                        style={{ backgroundImage: `url(${img})`, zIndex: 0 }}
                    ></div>
                ))}

                <div className="hero-content w-full flex flex-col gap-4 z-9 relative">
                    <span className='text-[#204f5e] bg-[#d5f1f1] w-fit py-1 px-3 rounded-full text-sm lg:text-base'>
                        Welcome Friend
                    </span>
                    <h1 className='ch-col-1 text-3xl sm:text-5xl xl:text-7xl font-[600] mb-5'>
                        Wandering the World <br /> is living a story untold.
                    </h1>
                    <form className='w-full flex justify-between items-center gap-2 bg-white contact-form p-2'>

                        <div className="relative input-box">
                            <label className='block text-sm font-[500] text-[#204f5e] tracking-widest uppercase mb-2'>
                                Check-in
                            </label>
                            <DatePicker
                                selected={checkInDate}
                                onChange={(date) => setCheckInDate(date)}
                                placeholderText="Select Check-in Date"
                                className="w-auto xl:w-[250px] p-3 h-[50px] bg-[#eafbfb] rounded border border-[#d5f1f1] outline-none"
                                dateFormat="dd/MM/yyyy"
                                minDate={new Date()}   // ✅ Past date select nahi hoga
                            />
                            <i className="ri-calendar-line"></i>
                        </div>


                        <div className="relative input-box">
                            <label className='block text-sm font-[500] text-[#204f5e] tracking-widest uppercase mb-2'>
                                Check-out
                            </label>
                            <DatePicker
                                selected={checkOutDate}
                                onChange={(date) => setCheckOutDate(date)}
                                placeholderText='Select Check-out Date'
                                className='w-auto xl:w-[250px] p-3 h-[50px] bg-[#eafbfb] rounded border border-[#d5f1f1] outline-none'
                                dateFormat="dd/MM/yyyy"
                                minDate={checkInDate || new Date()}  // ✅ Check-out always after Check-in
                            />
                            <i className='ri-calendar-line'></i>
                        </div>

                        <div className="relative input-box">
                            <label className='block text-sm font-[500] text-[#204f5e] tracking-widest uppercase mb-2'>
                                Adults
                            </label>
                            <input
                                type="number"
                                placeholder='0'
                                min='1'
                                className='w-auto xl:w-[250px] p-3 h-[50px] bg-[#eafbfb] rounded border border-[#d5f1f1] outline-none'
                            />
                        </div>

                        <button
                            type='button'
                            onClick={() => setShowLoginModal(true)}
                            className={`
        bg-sky-400 text-white 
        text-2xl 
        flex items-center justify-center 
        shadow-md 
        hover:bg-sky-500 
        transition-all

        /* Desktop: Circle */
        w-[70px] h-[50px] rounded xl:w-[60px] xl:h-[60px] xl:rounded-full
    `}
                        >
                            <span className="bi bi-search"></span>
                        </button>
                    </form>


                    <p className='ch-col text-[#5a8695] text-base '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, aliquam!
                    </p>

                    <div className="flex items-center pt-3 gap-3">
                        <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                            <img
                                src={socialIcon1}
                                alt="Facebook"
                                className="bg-blue-100 p-2 rounded-full hover:bg-[#23bcec] cursor-pointer transition duration-300 transform hover:scale-125"
                            />
                        </a>

                        <a href="https://www.twitter.com/yourpage" target="_blank" rel="noopener noreferrer">
                            <img
                                src={socialIcon2}
                                alt="Twitter"
                                className="bg-blue-100 p-2 rounded-full hover:bg-[#23bcec] cursor-pointer transition duration-300 transform hover:scale-125"
                            />
                        </a>

                        <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
                            <img
                                src={socialIcon3}
                                alt="Instagram"
                                className="bg-blue-100 p-2 rounded-full hover:bg-[#23bcec] cursor-pointer transition duration-300 transform hover:scale-125"
                            />
                        </a>

                        <a href="https://www.instagram.com/ghotulstays?igsh=NjkzdzdvZHdwZTRn&amp;utm_source=qr" target="_blank" rel="instagram">
                            <img
                                src={socialIcon4}
                                alt="LinkedIn"
                                className="bg-blue-100 p-2 rounded-full hover:bg-[#23bcec] cursor-pointer transition duration-300 transform hover:scale-125"
                            />
                        </a>
                    </div>


                    <form
                        onSubmit={handleSearch}
                        className="flex items-center max-w-full lg:max-w-lg w-[90%] lg:w-auto bg-white shadow-lg rounded-full overflow-hidden border border-gray-200 fixed lg:static top-20 lg:top-auto right-[5%] z-[9999]"
                    >
                        <input
                            type="text"
                            list="search-options"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search ghotul, rooms, services, features, about, review, blogs..."
                            className="flex-1 px-5 py-3 text-gray-700 focus:outline-none w-full lg:w-[500px]"
                        />

                        <datalist id="search-options">
                            <option value="ghotul" />
                            <option value="rooms" />
                            <option value="services" />
                            <option value="features" />
                            <option value="about" />
                            <option value="review" />
                            <option value="blogs" />
                        </datalist>

                        <button
                            type="submit"
                            className="bg-gradient-to-r rounded-full from-teal-500 to-blue-500 text-white px-5 py-3 flex items-center hover:from-teal-600 hover:to-blue-600 transition-all"
                        >
                            <Search className="w-5 h-5" />
                        </button>
                    </form>


                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="fixed bottom-6 left-6 z-[99] flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 z-50"
                    >
                        ?
                    </button>

                </div>
            </div>


            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[rgba(32,79,94,0.9)] px-4 sm:px-6">
                    <div className="bg-[#9CBBC7] w-full max-w-[700px] sm:max-w-[600px] md:max-w-[600px] p-6 sm:p-8 md:p-10 rounded-[15px] shadow-lg relative">

                        {/* Close Button */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-xl font-bold text-black bg-[#eafbfb] rounded-full hover:bg-[#ecb934] hover:text-white transition duration-300"
                        >
                            x
                        </button>

                        {/* Modal Content */}
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-6 text-gray-800"><br />
                                What Can You Do Here?
                            </h2>
                            <p className="text-base sm:text-lg md:text-lg leading-relaxed text-gray-700 space-y-4">
                                <span className="block mb-2 sm:mb-4">👉 <strong>Login or Sign Up</strong> to manage your bookings easily.</span>
                                <span className="block mb-2 sm:mb-4">🏨 <strong>Explore and book comfortable rooms</strong> as per your needs.</span>
                                <span className="block mb-2 sm:mb-4">🎉 <strong>Reserve our hall</strong> for events, parties, or meetings.</span>
                                <span className="block mb-2 sm:mb-4">🍴 <strong>Enjoy delicious meals</strong> at our Food Corner.</span>
                                <span className="block mb-2 sm:mb-4">🗺️ <strong>Plan exciting trips</strong> with our local travel packages.</span>
                                <span className="block mb-2 sm:mb-4">📍 <strong>Discover nearby attractions</strong> with our tourist guide info.</span>
                                <span className="block mb-2 sm:mb-4">📞 <strong>Get 24/7 customer support</strong> whenever you need help.</span>
                                <span className="block">💰 <strong>Avail special offers</strong> and discounts for your stays.</span>
                            </p>
                        </div>

                    </div>
                </div>
            )}




            {/* services */}
            <div id='services' className="service w-full lg:px-[12%] px-[8%] py-[150px] flex flex-col items-center justify-center gap-20">
                <div className="section-title text-center w-full space-y-4">
                    <span className='bg-[#d5f1f1] rounded-full px-5 py-2 font-bricolage tracking-wider text-sm uppercase '>Service</span>
                    <h1 className='text-5xl fontsemibold'>Discover the touch of nature</h1>
                </div>
                <div className='service-wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-10 w-full '>
                    <div className="service-item relative rounded-lg overflow-hidden">
                        <img src={service1} alt="service-image" className='w-full h-[250px] object-cover rounded-lg' />
                        <span className='absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white text-center rounded-full py-1 text-sm font-medium text-[#204f5e] tracking-widset uppercase w-[90%] max-w-[250px]'>Magic Hall</span>
                    </div>

                    <div className="service-item relative rounded-lg overflow-hidden">
                        <video
                            ref={videoRef}
                            src={vid1}
                            className="w-full h-full object-cover rounded-lg"
                            autoPlay
                            loop
                            muted
                            playsInline
                        ></video>

                        {/* Mute / Unmute Button */}
                        <button
                            onClick={toggleMute}
                            className="absolute bottom-4 right-4 bg-black/50 text-white p-2 rounded-full"
                        >
                            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                        </button>
                        <span className='absolute top-2 left-1/2 transform -translate-x-1/2 bg-white text-center rounded-full py-1 text-sm font-medium text-[#204f5e] tracking-widset uppercase w-[90%] max-w-[250px]'>Visit</span>
                    </div>

                    <div className="service-item relative rounded-lg overflow-hidden">
                        <img src={service3} alt="service-image" className='w-full h-[250px] object-cover rounded-lg' />
                        <span className='absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white text-center rounded-full py-1 text-sm font-medium text-[#204f5e] tracking-widset uppercase w-[90%] max-w-[250px]'>Birds House</span>
                    </div>

                    <div className="service-item relative rounded-lg overflow-hidden">
                        <video
                            ref={videoRef}
                            src={vid2}
                            className="w-full h-full object-cover rounded-lg"
                            autoPlay
                            loop
                            muted
                            playsInline
                        ></video>

                        {/* Mute / Unmute Button */}
                        <button
                            onClick={toggleMute}
                            className="absolute bottom-4 right-4 bg-black/50 text-white p-2 rounded-full"
                        >
                            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                        </button>
                        <span className='absolute top-2 left-1/2 transform -translate-x-1/2 bg-white text-center rounded-full py-1 text-sm font-medium text-[#204f5e] tracking-widset uppercase w-[90%] max-w-[250px]'>About</span>
                    </div>
                </div>

                <div className="service-bottom mt-20 w-full flex lg:flex-row flex-col justify-between items-center  lg:text-start text-center gap-5">
                    <p className='lg:w-1/2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptates nulla numquam ratione nesciunt aliquam blanditiis saepe ducimus dolore est
                        ?
                    </p>
                    <button className='w-[200px] tracking-[2px] h-[60px] bg-[#ecb934] transition hover:bg-#ffca44] rounded-full text-white uppercase'>
                        Read More
                    </button>
                </div>
            </div>

            {/* Features */}
            <div id='features' className="features bg-[#f3fdfd]  w-full lg:px-[12%] px-[8%] py-[150px] flex flex-col items-center justify-center gap-20 relative overflow-hidden">
                <div className="section-title text-center w-full space-y-4">
                    <span className='bg-[#d5f1f1] rounded-full px-5 py-2 font-bricolage tracking-wider text-sm uppercase '>Features</span>
                    <h1 className='text-5xl fontsemibold'>Features that will make your vacation <br /> unforgettable</h1>

                </div>

                <div className="feature-wrapper grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 z-auto ">
                    <div className="features-item bg-white rounded-xl py-14 px-5" style={{ boxShadow: '0 4px 20px rgba(32,79,94,.05)' }}>
                        <img src={feature1} className='bg-[#eafbfb] text-[#23bce] h-[80px] w-[80px] py-5 px-5 rounded-lg' alt="feature-image" />
                        <h3 className='mt-12 xxl:text-3xl text-2xl mb-4 font-semibold '>BeachFront Location</h3>
                        <p className='font-light'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ducimus quaerat possimus laboriosam quibusdam inventore nobis porro expedita quia corrupti.
                        </p>
                    </div>

                    <div className="features-item bg-white rounded-xl py-14 px-5" style={{ boxShadow: '0 4px 20px rgba(32,79,94,.05)' }}>
                        <img src={feature2} className='bg-[#eafbfb] text-[#23bce] h-[80px] w-[80px] py-5 px-5 rounded-lg' alt="feature-image" />
                        <h3 className='mt-12 xxl:text-3xl text-2xl mb-4 font-semibold '>Luxury Accommodations</h3>
                        <p className='font-light'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ducimus quaerat possimus laboriosam quibusdam inventore nobis porro expedita quia corrupti.
                        </p>
                    </div>

                    <div className="features-item bg-white rounded-xl py-14 px-5" style={{ boxShadow: '0 4px 20px rgba(32,79,94,.05)' }}>
                        <img src={feature3} className='bg-[#eafbfb] text-[#23bce] h-[80px] w-[80px] py-5 px-5 rounded-lg' alt="feature-image" />
                        <h3 className='mt-12 xxl:text-3xl text-2xl mb-4 font-semibold '>On-Site-Dining</h3>
                        <p className='font-light'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ducimus quaerat possimus laboriosam quibusdam inventore nobis porro expedita quia corrupti.
                        </p>
                    </div>

                    <div className="features-item bg-white rounded-xl py-14 px-5" style={{ boxShadow: '0 4px 20px rgba(32,79,94,.05)' }}>
                        <img src={feature4} className='bg-[#eafbfb] text-[#23bce] h-[80px] w-[80px] py-5 px-5 rounded-lg' alt="feature-image" />
                        <h3 className='mt-12 xxl:text-3xl text-2xl mb-4 font-semibold '>Recreational Facilities</h3>
                        <p className='font-light'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ducimus quaerat possimus laboriosam quibusdam inventore nobis porro expedita quia corrupti.
                        </p>
                    </div>

                    <div className="features-item bg-white rounded-xl py-14 px-5" style={{ boxShadow: '0 4px 20px rgba(32,79,94,.05)' }}>
                        <img src={feature5} className='bg-[#eafbfb] text-[#23bce] h-[80px] w-[80px] py-5 px-5 rounded-lg' alt="feature-image" />
                        <h3 className='mt-12 xxl:text-3xl text-2xl mb-4 font-semibold '>Spa and Wellness Services</h3>
                        <p className='font-light'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ducimus quaerat possimus laboriosam quibusdam inventore nobis porro expedita quia corrupti.
                        </p>
                    </div>

                    <div className="features-item bg-white rounded-xl py-14 px-5" style={{ boxShadow: '0 4px 20px rgba(32,79,94,.05)' }}>
                        <img src={feature6} className='bg-[#eafbfb] text-[#23bce] h-[80px] w-[80px] py-5 px-5 rounded-lg' alt="feature-image" />
                        <h3 className='mt-12 xxl:text-3xl text-2xl mb-4 font-semibold '>Surfing Lessons</h3>
                        <p className='font-light'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ducimus quaerat possimus laboriosam quibusdam inventore nobis porro expedita quia corrupti.
                        </p>
                    </div>
                </div>
            </div>

            {/* Rooms */}
            <div id='rooms' className='py-[80px]'>
                <div className="section-title text-center w-full space-y-4">
                    <span className='bg-[#d5f1f1] rounded-full px-5 py-2 font-bricolage tracking-wider text-sm uppercase '>Rooms</span>
                    <h1 className='text-2xl sm:text-5xl font-semibold w-full xl:w-[50%] mx-auto leading-tight'>Our Best Rooms</h1>
                </div>
            </div>
            <div className="w-full lg:px-[12%] px-[8%] pb-[100px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredRooms.map((room) => (
                        <div key={room.id} className="bg-white rounded-2xl shadow-md overflow-hidden show-rooms">
                            <div className="relative">
                                <Swiper
                                    modules={[Pagination]}
                                    pagination={{ clickable: true }}
                                    className="w-full h-[280px] custom-swiper"
                                >
                                    {room.photos.map((photo, index) => (
                                        <SwiperSlide key={index}>
                                            <img
                                                src={photo}
                                                alt={`${room.title} ${index + 1}`}
                                                className="w-full h-[280px] object-cover"
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>

                            <div className="bg-[#e8faff] flex gap-4 px-4 py-3 text-sm">
                                <span className='flex items-center gap-1'>
                                    <i className="bg-white shadow rounded py-1 px-3 ri-user-line"></i>
                                    Adults : {room.adults}
                                </span>
                                <span className='flex items-center gap-1'>
                                    <i className="bg-white shadow rounded py-1 px-3 ri-aspect-ratio-line"></i>
                                    Size : {room.size}
                                </span>
                            </div>
                            <Link onClick={() => setShowLoginModal(true)} >
                                <div className="px-6 pt-4 pb-4">
                                    <div className="py-4">
                                        <h3 className='text-2xl font-semibold mb-1 '>
                                            {room.title}
                                        </h3>
                                        <p className='text-md text-gray-500'>{room.description} </p>
                                    </div>
                                    <div className="border-t mt-4 pt-4 flex justify-between items-center">
                                        <p className='text-lg font-bold text-[#000]'>
                                            ${room.price}
                                        </p>
                                        <button className='w-12 h-12 bg-[#23bcec] rounded-full flex items-center justify-center text-white text-xl'>
                                            <i className="ri-bookmark-line"></i>
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* About section */}
            <div id='about' className="about about-1 bg-[#f3fdfd] lg:px-[12%] px-[8%] py-[150px] flex items-center flex-col lg:flex-row justify-between gap-20 relative overflow-hidden ">
                <div className='py-[50px]'>
                    <div className="section-title text-start space-y-4 relative z-[9] lg:w-1/2 w-full">
                        <span className='bg-[#d5f1f1] rounded-full px-5 py-2 font-bricolage tracking-wider text-sm uppercase '>About Us</span>
                        <h1 className=' about-text pb-5 text-2xl sm:text-5xl font-semibold w-full xl:w-[200%] mx-auto leading-tight'>Why more than a million visitors chose us</h1>
                        <ul className='flex flex-col gap-5'>
                            <li className='flex flex-col sm:flex-row align-items-start gap-5'>
                                <span className='text-2xl font-bold text-[#ecb934]'>01.</span>
                                <div>
                                    <h4 className='md:text-2xl text-xl font-semibold mb-2'>Ocean Oasis</h4>
                                    <p className='text-base md:text-lg  xl:w-[200%] mx-auto '>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde suscipit reprehenderit repellendus ab animi dolores nihil nesciunt!
                                    </p>
                                </div>
                            </li>
                            <li className='flex flex-col sm:flex-row align-items-start gap-5'>
                                <span className='text-2xl font-bold text-[#ecb934]'>02.</span>
                                <div>
                                    <h4 className='md:text-2xl text-xl font-semibold mb-2'>Beach Heven</h4>
                                    <p className='text-base md:text-lg  xl:w-[200%] mx-auto '>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde suscipit reprehenderit repellendus ab animi dolores nihil nesciunt!
                                    </p>
                                </div>
                            </li>
                            <li className='flex flex-col sm:flex-row align-items-start gap-5'>
                                <span className='text-2xl font-bold text-[#ecb934]'>03.</span>
                                <div>
                                    <h4 className='md:text-2xl text-xl font-semibold mb-2'>Sunset Bliss</h4>
                                    <p className='text-base md:text-lg  xl:w-[200%] mx-auto '>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde suscipit reprehenderit repellendus ab animi dolores nihil nesciunt!
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="lg:w-1/2 w-full ">
                    <div className="about-images w-full h-full relative z-auto ">
                        <img src={service1} alt="service-image" className='about-image about-image1' />
                        <img src={service2} alt="service-image" className='about-image about-image2' />
                        <img src={service3} alt="service-image" className='about-image about-image3' />
                        <img src={service4} alt="service-image" className='about-image about-image4' />

                        <img src={element1} alt="element-image" className='about-element1' />
                        <img src={element2} alt="element-image" className='about-element2' />
                        <img src={element3} alt="element-image" className='about-element3' />
                    </div>
                </div>
            </div>
            <div className="about-2 bg-[#f3fdfd] lg:px-[12%] px-[8%] py-[150px] relative overflow-hidden pb-0 ">
                <div className="about flex flex-col-reverse lg:flex-row items-center justify-between gap-20 relative z-auto">
                    {/* {righ hero image} */}
                    <div className="w-full lg:w-1/2 relative z-[9] ">
                        <img src={heroImg} alt="about" className='w-full h-full object-contain relative z-10' />
                    </div>

                    <div className="w-full lg:w-1/2 text-start">
                        <span className='bg-[#d5f1f1] rounded-full px-5 py-2 font-bricolage tracking-wider text-sm uppercase '>About Us</span>
                        <h1 className='text-2xl py-5 sm:text-5xl font-semibold w-full  mx-auto leading-tight'>Our goal and philosophy</h1>

                        <p className='text-gray-500 mb-4'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero ullam corporis voluptatem ducimus cum adipisci!
                        </p>
                        <p className='text-gray-500 mb-8'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quam ipsum iusto maxime minima accusamus a, molestiae modi omnis temporibus cupiditate impedit nulla libero pariatur quaerat, totam eligendi aperiam officia.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, saepe.
                        </p>
                        <div className="flex w-full  flex-col sm:flex-row items-center gap-4 ">
                            <button onClick={() => setShowLoginModal(true)} className='bg-[#fdc335] text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-[#e6ae00] transition duration-300'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightning-charge-fill" viewBox="0 0 16 16">
                                    <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
                                </svg>
                                Get In Touch
                            </button>
                            <button onClick={() => setShowLoginModal(true)} className='text-[#1d2b3a] font-semibold flex items-center gap-2 hover:underline transition'>
                                Book Now
                                <i class='fa-solid fa-arrow-right'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Review Section */}
            <div id='review' className="bg-[f9fefe] w-full testimonials">
                <div className="w-full lg:w-[95%] mx-auto py-12 bg-[#eafbfb] rounded-[20px] box-sadow-larger relative ">
                    <div className="text-center mb-12">
                        <span className='bg-[#d5f1f1] rounded-full px-5 py-2 font-bricolage tracking-wider text-sm uppercase '>Review</span>
                        <h1 className='text-2xl py-5 sm:text-5xl font-semibold w-full xl:w-[50%] mx-auto leading-tight'>Customer Voices : <br /> Hear What They Say!</h1>
                        <div className="flex h-[100px] items-center justify-center space-x-4 mb-6 mt-6">
                            {avatars.map((avatar, index) => (
                                <img key={index} src={avatar} alt={`avatar${index}`} className={`cursor-pointer rounded-full object-cover ${activeIndex === index ? 'w-16 h-16' : 'w-12 h-12'} transition-all duration-300`}
                                    onClick={() => {
                                        setActiveIndex(index);
                                        swiperRef.current?.slideToLoop(index);
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto relative">
                        <Swiper
                            modules={[Navigation]}
                            slidesPreView={1}
                            loop={true}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                            navigation={{
                                nextEl: '.custom-next',
                                prevEl: '.custom-prev',
                            }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <SwiperSlide
                                    key={index}
                                >
                                    <div className="flex flex-col items-center text-center justify-center px-6 h-[350px]">
                                        <div className="text-[#ecb934] text-4xl mb-4">❝</div>
                                        <p className='text-gray-600 text-base italic max-w-2xl'>
                                            {testimonial.message}
                                        </p>
                                        <div className="mt-4">
                                            <h4 className='font-bold text-lg text-[#1d2b3a]'>
                                                {testimonial.name}
                                            </h4>
                                            <span className='text-sm uppercase tracking-wide text-gray-400'>
                                                {testimonial.company}
                                            </span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <button ref={prevRef} className="custom-prev absolute left-0 top-1/2 translate-y-1/2 z-10 transition">
                            <i className="ri-arrow-left-s-line text-xl"></i></button>
                        <button ref={nextRef} className="custom-next absolute right-0 top-1/2 translate-y-1/2 z-10 transition">
                            <i className="ri-arrow-right-s-line text-xl"></i></button>
                    </div>
                </div>
            </div>

            {/* Blog Section */}
            <div id='blogs' className='bg-[#f3fdfd] lg:px-[12%] px-[8%] py-[150px] flex flex-col items-center justify-center gap-10  relative overflow-hidden pt-[20px]'>
                <span className='bg-[#d5f1f1] rounded-full px-5 py-2 font-bricolage tracking-wider text-sm uppercase '>Our Blogs</span>
                <h1 className='text-2xl py-5 sm:text-5xl font-semibold w-full xl:w-[50%] mx-auto leading-tight'>latest blog publications</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full text-left">

                    <div className="bg-white rounded-[20px] shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 group p-4">
                        <div className="overflow-hidden rounded-t-[16px]">
                            <img src={blog1} alt="blog-image" className='w-full h-56 object-cover transform transition-transform duration-300 group-hover:scale-105' />
                        </div>
                        <div className="p-4 bg-[#f2fbfb] rounded-b-[16px]">
                            <div className="flex items-center text-sm text-gray-500 gap-2 mb-4">
                                <img src={blog1} alt="blog-image" className='w-6 h-6 rounded-full object-cover' />
                                <span>paul T.</span>
                                <span className='w-1 h-1 bg-gray-400 rounded-full '></span>
                                <span>24.09.2025</span>
                            </div>
                            <h3 className='font-semibold xl:text-2xl text-xl text-[#1d2b3a] mb-2 leading-snug'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dolorem?
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis rerum suscipit sint! Perspiciatis, officiis porro!
                            </p>
                            <a href="#" className='text-sm font-semibold text-[#1d2b3a] inline-flex items-center group'>
                                Read More
                                <span className='ml-1 group-hover:translate-x-1 transition-transform'>
                                    <i className="ri-arrow-right-s-line"></i>
                                </span>
                            </a>
                        </div>
                    </div>

                    <div className="bg-white rounded-[20px] shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 group p-4">
                        <div className="overflow-hidden rounded-t-[16px]">
                            <img src={blog2} alt="blog-image" className='w-full h-56 object-cover transform transition-transform duration-300 group-hover:scale-105' />
                        </div>
                        <div className="p-4 bg-[#f2fbfb] rounded-b-[16px]">
                            <div className="flex items-center text-sm text-gray-500 gap-2 mb-4">
                                <img src={blog2} alt="blog-image" className='w-6 h-6 rounded-full object-cover' />
                                <span>paul T.</span>
                                <span className='w-1 h-1 bg-gray-400 rounded-full '></span>
                                <span>24.09.2025</span>
                            </div>
                            <h3 className='font-semibold xl:text-2xl text-xl text-[#1d2b3a] mb-2 leading-snug'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dolorem?
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis rerum suscipit sint! Perspiciatis, officiis porro!
                            </p>
                            <a href="#" className='text-sm font-semibold text-[#1d2b3a] inline-flex items-center group'>
                                Read More
                                <span className='ml-1 group-hover:translate-x-1 transition-transform'>
                                    <i className="ri-arrow-right-s-line"></i>
                                </span>
                            </a>
                        </div>
                    </div>

                    <div className="bg-white rounded-[20px] shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 group p-4">
                        <div className="overflow-hidden rounded-t-[16px]">
                            <img src={blog3} alt="blog-image" className='w-full h-56 object-cover transform transition-transform duration-300 group-hover:scale-105' />
                        </div>
                        <div className="p-4 bg-[#f2fbfb] rounded-b-[16px]">
                            <div className="flex items-center text-sm text-gray-500 gap-2 mb-4">
                                <img src={blog3} alt="blog-image" className='w-6 h-6 rounded-full object-cover' />
                                <span>paul T.</span>
                                <span className='w-1 h-1 bg-gray-400 rounded-full '></span>
                                <span>24.09.2025</span>
                            </div>
                            <h3 className='font-semibold xl:text-2xl text-xl text-[#1d2b3a] mb-2 leading-snug'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dolorem?
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis rerum suscipit sint! Perspiciatis, officiis porro!
                            </p>
                            <a href="#" className='text-sm font-semibold text-[#1d2b3a] inline-flex items-center group'>
                                Read More
                                <span className='ml-1 group-hover:translate-x-1 transition-transform'>
                                    <i className="ri-arrow-right-s-line"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main

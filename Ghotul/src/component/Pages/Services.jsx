
import CountUp from 'react-countup'
import authorImg from '../../assets/faces-4.jpg';
import signatureImg from '../../assets/signature.png';
import heroImg from '../../assets/about-2.png';
import { Link } from 'react-router-dom';
import sectionElement from '../../assets/section-element.png';
import Element1 from '../../assets/element-1.png';
import Element2 from '../../assets/element-2.png';
import Element3 from '../../assets/element-3.png';
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
import { VolumeX, Volume2 } from "lucide-react"; // icons
import vid1 from '../../assets/video1.mp4'
import vid2 from '../../assets/video2.mp4'
import { Search } from "lucide-react"; // make sure lucide-react is installed
import React, { useState, useRef, useEffect } from 'react'


function Services() {

    
        const videoRef = useRef(null);
        const [isMuted, setIsMuted] = useState(true);
    
        const toggleMute = () => {
            const video = videoRef.current;
            if (video) {
                video.muted = !video.muted;
                setIsMuted(video.muted);
            }
        };
    return (
        <>
            {/* Home/Services */}
            <div className="section-banner mt-5 pt-6 relative flex items-center justify-center">
                <img src={sectionElement} className='w-full h-full section-banner-element-1 absolute' alt="" />
                <img src={sectionElement} className='w-full h-full section-banner-element-2 absolute' alt="" />
                <img src={Element1} className='w-full h-full section-banner-element-3 absolute' alt="" />
                <img src={Element2} className='w-full h-full section-banner-element-4 absolute' alt="" />
                <img src={Element3} className='w-full h-full section-banner-element-5 absolute' alt="" />
                <div className="section-banner-content flex items-center flex-col text-center z-auto">
                    <h1 className='text-7xl font-semibold'>Our Services</h1>
                    <div className="mt-10 bg-[#d5f1f1] w-[250px] p-2 text-xl rounded">
                        <Link to='/' >Home </Link> &nbsp; / &nbsp;
                        <span className='text-gray-500'>Services</span>
                    </div>
                </div>
            </div>

            {/* services */}
            <div className="service w-full lg:px-[12%] px-[8%] py-[150px] flex flex-col items-center justify-center gap-20">
                <div className="section-title text-center w-full space-y-4">
                    <span className='bg-[#d5f1f1] rounded-full px-5 py-2 font-bricolage tracking-wider text-sm uppercase '>Service</span>
                    <h1 className='text-5xl fontsemibold'>Discover the touch of nature</h1>
                </div>
                {/* <div className='service-wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-10 w-full '>
                    <div className="service-item relative rounded-lg overflow-hidden">
                        <img src={service1} alt="service-image" className='w-full h-[250px] object-cover rounded-lg' />
                        <span className='absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white text-center rounded-full py-1 text-sm font-medium text-[#204f5e] tracking-widset uppercase w-[90%] max-w-[250px]'>Surfing</span>
                    </div>

                    <div className="service-item relative rounded-lg overflow-hidden">
                        <img src={service2} alt="service-image" className='w-full h-[250px] object-cover rounded-lg' />
                        <span className='absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white text-center rounded-full py-1 text-sm font-medium text-[#204f5e] tracking-widset uppercase w-[90%] max-w-[250px]'>Beach vacation</span>
                    </div>

                    <div className="service-item relative rounded-lg overflow-hidden">
                        <img src={service3} alt="service-image" className='w-full h-[250px] object-cover rounded-lg' />
                        <span className='absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white text-center rounded-full py-1 text-sm font-medium text-[#204f5e] tracking-widset uppercase w-[90%] max-w-[250px]'>Beach Restaurant</span>
                    </div>

                    <div className="service-item relative rounded-lg overflow-hidden">
                        <img src={service4} alt="service-image" className='w-full h-[250px] object-cover rounded-lg' />
                        <span className='absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white text-center rounded-full py-1 text-sm font-medium text-[#204f5e] tracking-widset uppercase w-[90%] max-w-[250px]'>Swimming Pools</span>
                    </div>
                </div> */}
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
                        <span className='absolute top-2 left-1/2 transform -translate-x-1/2 bg-white text-center rounded-full py-1 text-sm font-medium text-black tracking-widset uppercase w-[90%] max-w-[250px]'>Visit</span>
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
            <div className="features bg-[#f3fdfd]  w-full lg:px-[12%] px-[8%] py-[150px] flex flex-col items-center justify-center gap-20  relative overflow-hidden">
                <div className="section-title text-center w-full space-y-4">
                    <span className='bg-[#d5f1f1] rounded-full px-5 py-2 font-bricolage tracking-wider text-sm uppercase '>Features</span>
                    <h1 className='text-5xl fontsemibold'>Features that will make your vacation <br /> unforgettable</h1>

                </div>

                <div className="feature-wrapper grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 z-[9] ">
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

            {/* Booking */}
            <div className="bg-[#f3fdfd] w-full px-[8%] lg:px-[12%] py-[100px] overflow-hidden pb-0">
                <div className="max-w-7xl max-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="flex justify-center lg:justify-start relative">
                        <img src={heroImg} className='w-full max-w-md object-contain ' alt="" />
                    </div>
                    <div className="text-[#1D2B3A] text-center lg:text-left">
                        <span className='bg-[#D5F1F1] text-xs px-4 py-1 rounded-full uppercase tracking-widest text-gray-600 inline-block'>
                            About Us
                        </span>
                        <h2 className='text-3xl sm:text-4xl font-semibold mb-6'>
                            Discover the <br /><span className="text-[#1D2B3A]">Touch of nature</span>
                        </h2>
                        <p className="text-gray-600 text-[15px] mb-4 ">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est Obcaecati fuga possimus fugiat, dolores distinctio odit.
                        </p>
                        <p className="text-gray-600 text-[15px] mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aliquam dolore voluptatibus, beatae iure iste explicabo officiis magnam nesciunt tempore, quasi sit pariatur nobis autem molestiae! Provident est odit corrupti.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                            <button className='bg-[#ecb934] hover:bg-[#d6a523] text-white font-semibold px-6 py-3 rounded -full transition flex items-center gap-2'>
                                <i className="ri-mail-line">READ MORE</i>
                            </button>
                            <a href="#" className='font-semibold text-[#1D2B3A] inline-flex items-center group'>BOOK NOW
                                <span className='ml-1 group-hover:translate-x-1 transition-transform'>➜</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Visitors */}
            <div className="bg-[#F9FEFE] py-[50px] w-full pt-0">
                <div className="w-full lg:w-[95%] mx-auto py-16 px-6 bg-white rounded-[20px] shadow-2xl relative z-[10]">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 text-center">
                        {/* Card 1 */}
                        <div>
                            <h3 className='text-3xl sm:text-4xl font-bold text-[#1D2B#A] mb-2'>
                                <CountUp end={1244} duration={2.5}><span className='text-[#ecb934]'>+</span></CountUp>
                            </h3>
                            <p className='uppercase text-sm tracking-widest text-gray-600'>Visitors Monthly</p>
                        </div>
                        {/* Card 2 */}
                        <div>
                            <h3 className='text-3xl sm:text-4xl font-bold text-[#1D2B#A] mb-2'>
                                <CountUp end={24} duration={2.5}><span className='text-[#ecb934]'>+</span></CountUp>
                            </h3>
                            <p className='uppercase text-sm tracking-widest text-gray-600'>Visitors Monthly</p>
                        </div>
                        {/* Card 3 */}
                        <div>
                            <h3 className='text-3xl sm:text-4xl font-bold text-[#1D2B#A] mb-2'>
                                <CountUp end={44} duration={2.5}><span className='text-[#ecb934]'>+</span></CountUp>
                            </h3>
                            <p className='uppercase text-sm tracking-widest text-gray-600'>Visitors Monthly</p>
                        </div>
                        {/* Card 4 */}
                        <div>
                            <h3 className='text-3xl sm:text-4xl font-bold text-[#1D2B#A] mb-2'>
                                <CountUp end={12} duration={2.5}><span className='text-[#ecb934]'>+</span></CountUp>
                            </h3>
                            <p className='uppercase text-sm tracking-widest text-gray-600'>Visitors Monthly</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Services;
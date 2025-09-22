
import React from 'react'
import CountUp from 'react-countup'
import authorImg from '../../assets/faces-4.jpg';
import signatureImg from '../../assets/signature.png';
import heroImg from '../../assets/about-2.png';
import { Link } from 'react-router-dom';
import sectionElement from '../../assets/section-element.png';
import Element1 from '../../assets/element-1.png';
import Element2 from '../../assets/element-2.png';
import Element3 from '../../assets/element-3.png';


function About() {
    return (
        <>
            { /* Home/About */}
            <div className="section-banner mt-5 pt-6 relative flex items-center justify-center">
                <img src={sectionElement} className='w-full h-full section-banner-element-1 absolute' alt="" />
                <img src={sectionElement} className='w-full h-full section-banner-element-2 absolute' alt="" />
                <img src={Element1} className='w-full h-full section-banner-element-3 absolute' alt="" />
                <img src={Element2} className='w-full h-full section-banner-element-4 absolute' alt="" />
                <img src={Element3} className='w-full h-full section-banner-element-5 absolute' alt="" />
                <div className="section-banner-content flex items-center flex-col text-center z-auto">
                    <h1 className='text-7xl font-semibold'>We are the largest <br /> central homestays</h1>
                    <div className="mt-10 bg-[#d5f1f1] w-[250px] p-2 text-xl rounded">
                        <Link to='/' >Home </Link> &nbsp; / &nbsp;
                        <span className='text-gray-500'>About</span>
                    </div>
                </div>
            </div>

            {/* Story */}
            <div className="bg-[#f9fefe] py-[80px] px-[5%] w-full pb-0">
                <div className="w-full p-[40px] lg:p-[100px] bg-white rounded-[20px] shadow-2xl relative z-[10]">
                    <div className="mx-auto">
                        <div className="mb-12">
                            <span className="bg-[#d5f1f1] text-xs px-4 py-1 rounded-full uppercase tracking-widest text-gray-600">About Us</span>
                            <h2 className='text-3xl sm:text-4xl font-semibold mt-4 text-[#1d2b3a] '>
                                Story About Us
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-[#1d2b3a] leading-relaxed text-[15px]">
                            <div>
                                <p className='mb-5 text-gray-700'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptas, minima harum hic deleniti natus excepturi omnis incidunt reiciendis odit perferendis esse fugit! Et, distinctio. Adipisci recusandae saepe illo corrupti tempore. Deleniti, nemo ad cupiditate perspiciatis.
                                </p>
                                <p className='mb-5 text-gray-700'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptas, minima harum hic deleniti natus excepturi omnis incidunt reiciendis odit perferendis esse fugit! Et, distinctio. Adipisci recusandae saepe illo corrupti tempore. Deleniti, nemo ad cupiditate perspiciatis.
                                </p>
                                <p className='mb-5 text-gray-700'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptas, minima harum hic deleniti natus excepturi omnis incidunt reiciendis odit perferendis esse fugit! Et, distinctio. Adipisci recusandae saepe illo corrupti tempore. Deleniti, nemo ad cupiditate perspiciatis.
                                </p>

                            </div>
                            <div>
                                <p className='mb-5 text-gray-700'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptas, minima harum hic deleniti natus excepturi omnis incidunt reiciendis odit perferendis esse fugit! Et, distinctio. Adipisci recusandae saepe illo corrupti tempore. Deleniti, nemo ad cupiditate perspiciatis.
                                </p>
                                <p className='mb-5 text-gray-700'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptas, minima harum hic deleniti natus excepturi omnis incidunt reiciendis odit perferendis esse fugit! Et, distinctio. Adipisci recusandae saepe illo corrupti tempore. Deleniti, nemo ad cupiditate perspiciatis.
                                </p>
                                <p className='mb-8 text-gray-700'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptas, minima harum hic deleniti natus excepturi omnis incidunt reiciendis odit perferendis esse fugit! Et, distinctio. Adipisci recusandae saepe illo corrupti tempore. Deleniti, nemo ad cupiditate perspiciatis.
                                </p>

                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-8">
                                    <div className="flex items-center gap-4">
                                        <img src={authorImg} alt="Emma Millar" className='w-12 h-12 rounded-full object-cover' />
                                        <div>
                                            <h4 className='font-semibold text-[#1d2b3a]'>
                                                Emma Miller
                                            </h4>
                                            <span className='text-sm text-gray-500'>Hotel Administor</span>
                                        </div>
                                    </div>

                                    <img src={signatureImg} alt="signatures" className='w-32 object-contain' />
                                </div>
                            </div>
                        </div>
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

export default About
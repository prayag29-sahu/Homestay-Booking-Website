import React from 'react'
import { Link } from 'react-router-dom'
import blog1 from '../../assets/blog-2.jpg';
import blog2 from '../../assets/blog-3.jpg';
import blog3 from '../../assets/blog-4.jpg';
import blog4 from '../../assets/blog-5.jpg';
import blog5 from '../../assets/blog-6.jpg';
import blog6 from '../../assets/blog-12.jpg';
import avatar from '../../assets/review-7.jpg'

import sectionElement from '../../assets/section-element.png';
import Element1 from '../../assets/element-1.png';
import Element2 from '../../assets/element-2.png';
import Element3 from '../../assets/element-3.png';

function Blogs() {
    return (
        <>
            {/* home/Blogs */}
            <div className="section-banner mt-5 pt-6 relative flex items-center justify-center">
                <img src={sectionElement} className='w-full h-full section-banner-element-1 absolute' alt="" />
                <img src={sectionElement} className='w-full h-full section-banner-element-2 absolute' alt="" />
                <img src={Element1} className='w-full h-full section-banner-element-3 absolute' alt="" />
                <img src={Element2} className='w-full h-full section-banner-element-4 absolute' alt="" />
                <img src={Element3} className='w-full h-full section-banner-element-5 absolute' alt="" />
                <div className="section-banner-content flex items-center flex-col text-center z-auto">
                    <h1 className='text-7xl font-semibold'>Our Blogs</h1>
                    <div className="mt-10 bg-[#d5f1f1] w-[250px] p-2 text-xl rounded">
                        <Link to='/' >Home </Link> &nbsp; / &nbsp;
                        <span className='text-gray-500'>Blogs</span>
                    </div>
                </div>
            </div>

            {/* section */}
            <section className='bg-[#f9fefe] py-[60px] w-full pb-0'>
                <div className="w-full lg:w-[95%] mx-auto py-16 px-8 md:px-14 bg-white rounded-[20px] shadow-xl relative z-[10]">
                    {/* Section heading */}
                    <div className="text-center mb-16">
                        <span className='bg-[#d5f1f1] text-xs px-4 py1 rounded-full uppercase tracking-widest text-gray-600'>Blog</span>
                        <h2 className='text-3xl sm:text-4xl font-semibold mt-4 text-[#1d2b3a]'>
                            Popular Publications
                        </h2>
                    </div>
                    {/* Blog grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
                        {[{
                            image: blog1,
                            date: '15.02.2025',
                            title: 'Exploring the Best of Ghotul: A Travelers Guide',
                        },
                        {
                            image: blog2,
                            date: '16.02.2025',
                            title: 'The Hidden Gems of Ghotul: A Local’s Perspective',
                        },

                        ].map((item, index) => (
                            <div
                                key={index}
                                className='bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group border border-gray-100'
                            >
                                <div className="overflow-hidden rounded-t-3xl">
                                    <img src={item.image} alt="Blog" className='w-full h-[320px] object-cover transform transition-transform duration-500 group-hover:scale-105' />
                                </div>
                                <div className="p-6 bg-[#f4fcfc] rounded-b-3xl">
                                    <div className="flex items-center text-sm text-gray-500 gap-2 mb-4">
                                        <img src={avatar} alt="Author" className='w-7 h-7 rounded-full object-cover ' />
                                        <span className='font-medium text-gray-700'>Paul T.</span>
                                        <span className='w-1 h-1 bg-gray-400 rounded-full' />
                                        <span className='flex items-center gap-1'>
                                            <i className="ri-calender-line text-base"></i> {item.date}
                                        </span>
                                    </div>
                                    <h3 className='font-semibold text-[20px] text-[#1d2b3a] mb3 leading-snug'>
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-[15px] mb-6">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta in odit magni consequuntur quis rem reprehenderit similique. Explicabo, sint vitae!
                                    </p>
                                    <a href="#" className='text-sm font-semibold text-[#1d2b3a] inline-flex items-center group'>
                                        <span className='border-b border-[#1d2b3a] '>READ MORE</span>
                                        <span className='ml-1 transition-transform duration-300 group-hover:translate-x-1'><i class='fa-solid fa-arrow-right'></i></span>
                                    </a>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                    {/* Desc */}
                    <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                        <p className="text-[#2a4b5e] text-sm md:text-base max-w-3xl">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, dolorum. Illum quia ratione perspiciatis officia voluptates. In.
                        </p>
                        <button className='bg-[#ecb934] hover:bg-[#d6a523] text-white font-semibold px-8 py-4 rounded-full transition duration-300 whitespace-nowrap'>
                            VIEW ALL
                        </button>
                    </div>
                </div>
            </section>


            {/* cards section */}
            <div className="w-full lg:px-[12%] px-[8%] py-[100px] flex flex-col items-center justify-center gap-10 relative overflow-hidden bg-transparent ">
                {/* Section Heading  */}
                <span className='bg-[#d5f1f1] text-xs px-4 py-1 rounded-full uppercase tracking-widest text-gray-600'>
                    Our Blog
                </span>
                <h2 className='text-3xl sm:text-4xl font-semibold text-[#1d2b3a] text-center'>
                    Latest Blog Publications
                </h2>
                {/* Blog Grid  */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full text-left">
                    {/* Card 1  */}
                    <div className="bg-white rounded-[20px] shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden">
                        <div className="overflow-hidden">
                            <img src={blog3} className='w-full h-56 object-cover transform transition-transform duration-300 group hover:scale-105' alt="" />
                        </div>
                        <div className="p-4 bg-[#f2fbfb]">
                            <div className="flex items-center text-sm text-gray-500 gap-2 mb-3">
                                <img src={blog3} className='w-6 h-6 rounded-full object-cover' alt="" />
                                <span >Sarah W.</span>
                                <span className='w-1 h-1 bg-gray-400 rounded-full'/>
                                <span>18.10.2025</span>
                            </div>
                            <h3 className="font-semibold text-lg text-[#1d2b3a] mb-2 leading-snug ">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore architecto dicta.
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, iste quibusdam eius placeat hic incidunt excepturi voluptates? Fugiat, quae nemo?
                            </p>
                            <a href="#" className='text-sm font-semibold text-[#1d2b3a] inline-flex items-center group blog-card-link'>
                                READ MORE
                                <span className="ml-1 group hover:translate-x-1 transition-transform"><i class='fa-solid fa-arrow-right'></i></span>
                            </a>
                        </div>
                    </div>
                    {/* Card 2  */}
                    <div className="bg-white rounded-[20px] shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden">
                        <div className="overflow-hidden">
                            <img src={blog4} className='w-full h-56 object-cover transform transition-transform duration-300 group hover:scale-105' alt="" />
                        </div>
                        <div className="p-4 bg-[#f2fbfb]">
                            <div className="flex items-center text-sm text-gray-500 gap-2 mb-3">
                                <img src={blog4} className='w-6 h-6 rounded-full object-cover' alt="" />
                                <span >Sarah W.</span>
                                <span className='w-1 h-1 bg-gray-400 rounded-full'/>
                                <span>18.10.2025</span>
                            </div>
                            <h3 className="font-semibold text-lg text-[#1d2b3a] mb-2 leading-snug ">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore architecto dicta.
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, iste quibusdam eius placeat hic incidunt excepturi voluptates? Fugiat, quae nemo?
                            </p>
                            <a href="#" className='text-sm font-semibold text-[#1d2b3a] inline-flex items-center group blog-card-link'>
                                READ MORE
                                <span className="ml-1 group hover:translate-x-1 transition-transform"><i class='fa-solid fa-arrow-right'></i></span>
                            </a>
                        </div>
                    </div>
                    {/* Card 3  */}
                    <div className="bg-white rounded-[20px] shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden">
                        <div className="overflow-hidden">
                            <img src={blog5} className='w-full h-56 object-cover transform transition-transform duration-300 group hover:scale-105' alt="" />
                        </div>
                        <div className="p-4 bg-[#f2fbfb]">
                            <div className="flex items-center text-sm text-gray-500 gap-2 mb-3">
                                <img src={blog5} className='w-6 h-6 rounded-full object-cover' alt="" />
                                <span >Sarah W.</span>
                                <span className='w-1 h-1 bg-gray-400 rounded-full'/>
                                <span>18.10.2025</span>
                            </div>
                            <h3 className="font-semibold text-lg text-[#1d2b3a] mb-2 leading-snug ">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore architecto dicta.
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, iste quibusdam eius placeat hic incidunt excepturi voluptates? Fugiat, quae nemo?
                            </p>
                            <a href="#" className='text-sm font-semibold text-[#1d2b3a] inline-flex items-center group blog-card-link'>
                                READ MORE
                                <span className="ml-1 group hover:translate-x-1 transition-transform"><i class='fa-solid fa-arrow-right'></i></span>
                            </a>
                        </div>
                    </div>
                    {/* Card 4  */}
                    <div className="bg-white rounded-[20px] shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden">
                        <div className="overflow-hidden">
                            <img src={blog1} className='w-full h-56 object-cover transform transition-transform duration-300 group hover:scale-105' alt="" />
                        </div>
                        <div className="p-4 bg-[#f2fbfb]">
                            <div className="flex items-center text-sm text-gray-500 gap-2 mb-3">
                                <img src={blog1} className='w-6 h-6 rounded-full object-cover' alt="" />
                                <span >Sarah W.</span>
                                <span className='w-1 h-1 bg-gray-400 rounded-full'/>
                                <span>18.10.2025</span>
                            </div>
                            <h3 className="font-semibold text-lg text-[#1d2b3a] mb-2 leading-snug ">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore architecto dicta.
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, iste quibusdam eius placeat hic incidunt excepturi voluptates? Fugiat, quae nemo?
                            </p>
                            <a href="#" className='text-sm font-semibold text-[#1d2b3a] inline-flex items-center group blog-card-link'>
                                READ MORE
                                <span className="ml-1 group hover:translate-x-1 transition-transform"><i class='fa-solid fa-arrow-right'></i></span>
                            </a>
                        </div>
                    </div>
                    {/* Card 5  */}
                    <div className="bg-white rounded-[20px] shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden">
                        <div className="overflow-hidden">
                            <img src={blog2} className='w-full h-56 object-cover transform transition-transform duration-300 group hover:scale-105' alt="" />
                        </div>
                        <div className="p-4 bg-[#f2fbfb]">
                            <div className="flex items-center text-sm text-gray-500 gap-2 mb-3">
                                <img src={blog2} className='w-6 h-6 rounded-full object-cover' alt="" />
                                <span >Sarah W.</span>
                                <span className='w-1 h-1 bg-gray-400 rounded-full'/>
                                <span>18.10.2025</span>
                            </div>
                            <h3 className="font-semibold text-lg text-[#1d2b3a] mb-2 leading-snug ">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore architecto dicta.
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, iste quibusdam eius placeat hic incidunt excepturi voluptates? Fugiat, quae nemo?
                            </p>
                            <a href="#" className='text-sm font-semibold text-[#1d2b3a] inline-flex items-center group blog-card-link'>
                                READ MORE
                                <span className="ml-1 group hover:translate-x-1 transition-transform"><i class='fa-solid fa-arrow-right'></i></span>
                            </a>
                        </div>
                    </div>
                    {/* Card 6  */}
                    <div className="bg-white rounded-[20px] shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden">
                        <div className="overflow-hidden">
                            <img src={blog6} className='w-full h-56 object-cover transform transition-transform duration-300 group hover:scale-105' alt="" />
                        </div>
                        <div className="p-4 bg-[#f2fbfb]">
                            <div className="flex items-center text-sm text-gray-500 gap-2 mb-3">
                                <img src={blog6} className='w-6 h-6 rounded-full object-cover' alt="" />
                                <span >Sarah W.</span>
                                <span className='w-1 h-1 bg-gray-400 rounded-full'/>
                                <span>18.10.2025</span>
                            </div>
                            <h3 className="font-semibold text-lg text-[#1d2b3a] mb-2 leading-snug ">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore architecto dicta.
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, iste quibusdam eius placeat hic incidunt excepturi voluptates? Fugiat, quae nemo?
                            </p>
                            <a href="#" className='text-sm font-semibold text-[#1d2b3a] inline-flex items-center group blog-card-link'>
                                READ MORE
                                <span className="ml-1 group hover:translate-x-1 transition-transform"><i class='fa-solid fa-arrow-right'></i></span>
                            </a>
                        </div>
                    </div>
                </div>



                {/* bootom Paragraph  */}
                <div className="mt-12 text-center text-sm text-[#2a4b5e] max-w-3xl">
                    Lorem ipsum dolor sit amet consectetur, libero numquam laudantium accusamus odit nemo corrupti? <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, nemo!
                </div>
            </div>


            {/* subscribe section */}
            <section className='bg-[#f9fefe] py-[150px] w-full'>
                <div className="w-full lg:w-[95%] mx-auto px-8 md:px-14 bg-white rounded-[20px] shadow-xl relative z-[10] text-center py-20">
                    <span className='bg-[#d5f1f1] text-xs px-4 py-1 rounded-full uppercase tracking-widest text-gray-600 inline-block mb-6'>
                        Newsletter
                    </span>
                    <h2 className='text-3xl sm:text-6xl font-semibold text-[#1d2b3a] ' >
                        Subscibe Our Newsletter
                    </h2>

                    <form className='max-w-xl mx-auto flex items-center justify-between bg-[#ecfafb] rounded-full overflow-hidden p-2 mt-5' >
                        <input type="email" name='EMAIL' placeholder='Enter Your E-mail' className='flex-grow px-6 py-4 bg-transparent text-[#1d2b3a] outline-none placeholder:text-[#1d2b3a]/70' required />
                        <button type='submit' className='bg-[#f2c94c] text-white transition-transform hover:scale-105 h-[50px] w-[50px] rounded-full flex items-center justify-center text-2xl'>
                            <i className="ri-arrow-right-line"></i>
                        </button>
                    </form>
                </div>
            </section>


        </>

    )
}

export default Blogs;
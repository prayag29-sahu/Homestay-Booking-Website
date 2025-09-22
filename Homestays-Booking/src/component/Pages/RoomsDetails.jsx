
// import React, { useState } from 'react';
// import CountUp from 'react-countup'
// import heroImg from '../../assets/about-2.png';
// import { Link, useParams } from 'react-router-dom';
// import sectionElement from '../../assets/section-element.png';
// import Element1 from '../../assets/element-1.png';
// import Element2 from '../../assets/element-2.png';
// import Element3 from '../../assets/element-3.png';
// import RoomsData from '../../Rooms.json';
// import feature1 from '../../assets/feature-icon-1.svg'
// import feature2 from '../../assets/feature-icon-2.svg'
// import feature3 from '../../assets/feature-icon-3.svg'
// import feature4 from '../../assets/feature-icon-4.svg'
// import feature5 from '../../assets/feature-icon-5.svg'
// import feature6 from '../../assets/feature-icon-6.svg'
// import amenit1 from '../../assets/room-amenit-1.svg'
// import amenit2 from '../../assets/room-amenit-2.svg'
// import amenit3 from '../../assets/room-amenit-3.svg'
// import amenit4 from '../../assets/room-amenit-4.svg'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Navigation } from 'swiper/modules';
// import 'swiper/css'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination';



// const RoomsDetails = () => {

//     const { id } = useParams();
//     const room = RoomsData.find((room) => room.id === id);

//     if (!room) {
//         return <div className='text-center py-20 text-3xl text-red-500 '>Room Not Found ?</div>;
//     }

//     const [checkIn, setCheckIn] = useState('');
//     const [checkOut, setCheckOut] = useState('');

//     const isFormValid = checkIn && checkOut; // Only true if both dates are filled


//     return (
//         <>
//             {/* Home/RoomsDetails */}
//             <div className="section-banner mt-5 pt-6 relative flex items-center justify-center">
//                 <img src={sectionElement} className='w-full h-full section-banner-element-1 absolute' alt="" />
//                 <img src={sectionElement} className='w-full h-full section-banner-element-2 absolute' alt="" />
//                 <img src={Element1} className='w-full h-full section-banner-element-3 absolute' alt="" />
//                 <img src={Element2} className='w-full h-full section-banner-element-4 absolute' alt="" />
//                 <img src={Element3} className='w-full h-full section-banner-element-5 absolute' alt="" />
//                 <div className="section-banner-content flex items-center flex-col text-center z-auto">
//                     <h1 className='text-7xl font-semibold'>Get Your <br />Comfort Room</h1>
//                     <div className="mt-10 bg-[#d5f1f1] w-[250px] p-2 text-xl rounded">
//                         <Link to='/' >Home </Link> &nbsp; / &nbsp;
//                         <span className='text-gray-500'>RoomsDetails</span>
//                     </div>
//                 </div>
//             </div>

//             {/* Show Rooms Details */}
//             <div className="w-full py-[100px] px-[8%] lg:px[12%] bg-[#f3fdfd]">
//                 <h2 className='text-6xl font-bricolage font-bold mb-4 '>{room.title}</h2>
//                 <div className="flex flex-col lg:flex-row gap-10 items-start ">
//                     {/* Swiper section */}
//                     <div className=" rooms-details lg:w-2/3 p-3 rounded-2xl ">
//                         <Swiper
//                             spaceBetween={30}
//                             speed={1000}
//                             modules={[Pagination]}
//                             pagination={{ clickable: true }}
//                             className='w-[80%] h-[400px] bg-white shadow-lg rounded-xl overflow-hidden '
//                             style={{ padding: '10px' }}
//                         >
//                             {room.photos.map((photo, index) => (
//                                 <SwiperSlide key={index}>
//                                     <img src={photo} alt={`${room.title} ${index + 1}`}
//                                         className='w-full h-full object-cover rounded-xl '
//                                     />
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>
//                         <div className="py-[50px] pb-">
//                             <h2 className='text-3xl font-bold my-[20px]'>Key Features</h2>
//                             <div className="rooms-features grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
//                                 <div className="flex items-center gap-3 bg-white rounded-xl shadow-md p-4">
//                                     <img src={feature1} className='w-[50px] h-[50px] p-3 bg-[#d6f6ff] rounded-md' alt="" />
//                                     <p className='font-medium text-gray-600 text-xl'>Air-Condition</p>
//                                 </div>
//                                 <div className="flex items-center gap-3 bg-white rounded-xl shadow-md p-4">
//                                     <img src={feature2} className='w-[50px] h-[50px] p-3 bg-[#d6f6ff] rounded-md' alt="" />
//                                     <p className='font-medium text-gray-600 text-xl'>Free Wi-fi</p>
//                                 </div>
//                                 <div className="flex items-center gap-3 bg-white rounded-xl shadow-md p-4">
//                                     <img src={feature3} className='w-[50px] h-[50px] p-3 bg-[#d6f6ff] rounded-md' alt="" />
//                                     <p className='font-medium text-gray-600 text-xl'>Smart TV</p>
//                                 </div>
//                                 <div className="flex items-center gap-3 bg-white rounded-xl shadow-md p-4">
//                                     <img src={feature4} className='w-[50px] h-[50px] p-3 bg-[#d6f6ff] rounded-md' alt="" />
//                                     <p className='font-medium text-gray-600 text-xl'>Pet Friendly</p>
//                                 </div>
//                                 <div className="flex items-center gap-3 bg-white rounded-xl shadow-md p-4">
//                                     <img src={feature5} className='w-[50px] h-[50px] p-3 bg-[#d6f6ff] rounded-md' alt="" />
//                                     <p className='font-medium text-gray-600 text-xl'>Lunches</p>
//                                 </div>
//                                 <div className="flex items-center gap-3 bg-white rounded-xl shadow-md p-4">
//                                     <img src={feature6} className='w-[50px] h-[50px] p-3 bg-[#d6f6ff] rounded-md' alt="" />
//                                     <p className='font-medium text-gray-600 text-xl'>Game-Room</p>
//                                 </div>
//                             </div>
//                             <h2 className='text-3xl font-bold my-[20px] pt-[20px]'>Description</h2>
//                             <p className='py-3' style={{ fontWeight: '300' }}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, quidem Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, quae? </p>
//                             <p className='py-3' style={{ fontWeight: '300' }}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, quidem Lorem ipsum dolor sit amet. </p>
//                             <p className='py-3' style={{ fontWeight: '300' }}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, quidem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, voluptatem impedit rem similique soluta voluptatum nobis suscipit quasi dolore distinctio quod, facere pariatur velit nostrum, fugiat illum deserunt ex qui! </p>

//                             <h2 className='text-3xl font-bold my-[20px] pt-[20px]'>Amenitites</h2>
//                             <div>
//                                 <div className=" flex flex-col lg:flex-row gap-8 items-start mb-5">
//                                     <div className="w-full lg:w-2/3 ">
//                                         <div className="bg-white p-[40px] flex flex-col rounded-2xl shadow-lg">
//                                             <img src={amenit1} className='w-[60px] h-[60px] mb-7 p-3 bg-[#d6f6f6] rounded-md' alt="" />
//                                             <h2 className='text-3xl amenit-text font-semibold'>Air-conditioned</h2>
//                                             <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio veniam omnis debitis.</p>
//                                         </div>
//                                     </div>
//                                     <div className="w-full lg:w-2/3 ">
//                                         <div className="bg-white p-[40px] flex flex-col rounded-2xl shadow-lg">
//                                             <img src={amenit2} className='w-[60px] h-[60px] mb-7 p-3 bg-[#d6f6f6] rounded-md' alt="" />
//                                             <h2 className='text-3xl amenit-text font-semibold'>Free Wi-fi</h2>
//                                             <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio veniam omnis debitis.</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className=" flex flex-col lg:flex-row gap-8 items-start mb-5">
//                                     <div className="w-full lg:w-2/3 ">
//                                         <div className="bg-white p-[40px] flex flex-col rounded-2xl shadow-lg">
//                                             <img src={amenit3} className='w-[60px] h-[60px] mb-7 p-3 bg-[#d6f6f6] rounded-md' alt="" />
//                                             <h2 className='text-3xl amenit-text font-semibold'>Smart TV</h2>
//                                             <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio veniam omnis debitis.</p>
//                                         </div>
//                                     </div>
//                                     <div className="w-full lg:w-2/3 ">
//                                         <div className="bg-white p-[40px] flex flex-col rounded-2xl shadow-lg">
//                                             <img src={amenit4} className='w-[60px] h-[60px] mb-7 p-3 bg-[#d6f6f6] rounded-md' alt="" />
//                                             <h2 className='text-3xl amenit-text font-semibold'>Free Transfer</h2>
//                                             <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio veniam omnis debitis.</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <h2 className='text-3xl font-bold my-[20px] pt-[50px]'>Location</h2>
//                             <div className="w-full rounded-xl overflow-hidden shadow-md">
//                                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48873138.04954164!2d58.9629245!3d20.593684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff96b86b91b%3A0xb0bdbfbcbb8cba4!2sIndia!5e0!3m2!1sen!2sin!4v1723950000000!5m2!1sen!2sin" width='100%' height='450' style={{ border: 0 }} allowFullScreen='' loading='lazy' referrerPolicy='no-referrer-when-downgrade' frameborder="0" />
//                             </div>
//                         </div>
//                     </div>

//                     <div className="w-full lg:w-1/3 self-start sticky top-[125px] bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-6  ">
//                         <div className="border-2 border-yellow-400  rounded-2xl px-6 py-4 text-center flex justify-center items-end ">
//                             <h2 className='text-4xl font-bold text-[#000] flex items-start'>
//                                 <span className='text-sm'>$</span> {room.price}
//                             </h2>
//                             <p className="text-gray-500 text-sm font-normal ms-4">/per night</p>
//                         </div>

//                         <div className="flex justify-around bg-[#e8faff] py-3 rounded-xl text-[#1d5c63] font-medium text-sm">
//                             <div className="flex items-center gap-2">
//                                 <i className='ri-user-line text-lg'></i> Adults: {room.adults}
//                             </div>
//                             <div className="flex items-center gap-2">
//                                 <i className='ri-aspect-ratio-line text-lg'></i> Size: {room.size}
//                             </div>
//                         </div>

//                         <form>
//                             <div>
//                                 <label className='block text-sm text-gray-600 mb-1'>CHECK-IN</label>
//                                 <input
//                                     type="date"
//                                     className='w-full p-3 bg-[#e8faff] rounded-md outline-none'
//                                     value={checkIn}
//                                     min={new Date().toISOString().split("T")[0]} // restrict past dates
//                                     onChange={(e) => setCheckIn(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div>
//                                 <label className='block text-sm text-gray-600 mb-1'>CHECK-OUT</label>
//                                 <input
//                                     type="date"
//                                     className='w-full p-3 bg-[#e8faff] rounded-md outline-none'
//                                     value={checkOut}
//                                     min={checkIn || new Date().toISOString().split("T")[0]} // checkout must be after checkin
//                                     onChange={(e) => setCheckOut(e.target.value)}
//                                     required
//                                 />
//                             </div>

//                             {checkIn && checkOut && new Date(checkOut) > new Date(checkIn) ? (
//                                 <Link
//                                     to={`/checkout/${room.id}`}
//                                     state={{ checkIn, checkOut }}
//                                 >
//                                     <button
//                                         type='button'
//                                         className='w-full py-3 bg-[#23bcec] hover:bg-[#00aee2] transition text-white text-lg rounded-full flex items-center justify-center gap-2 mt-4'
//                                     >
//                                         <i className="ri-bookmark-line"></i> BOOK NOW
//                                     </button>
//                                 </Link>
//                             ) : (
//                                 <button
//                                     type='button'
//                                     disabled
//                                     className='w-full py-3 bg-gray-400 cursor-not-allowed text-white text-lg rounded-full flex items-center justify-center gap-2 mt-4'
//                                 >
//                                     <i className="ri-bookmark-line"></i> BOOK NOW
//                                 </button>
//                             )}
//                         </form>

//                     </div>
//                 </div>
//             </div>

//             {/* CTA */}
//             <div className="cta p-[50px] bg-[#f3fdfd]">
//                 <div className="py-[100px] rounded-xl bg-white shadow flex items-center justify-center ">
//                     <div className="section-title text-center space-y-4 ">
//                         <span className='bg-[#D5F1F1] rounded-full px-5 py-2 font-bricolage tracking-wider uppercase'> CALL TO ACTION</span>
//                         <h1 className='text-6xl font-semibold text-center'>Do you have any Questions? <br />We are available 24/7</h1>
//                         <div className="flex items-center justify-center pt-[30px] gap-2">
//                             <button className='w-[170px] h-[50px] bg-[#ecb934] transition hover:bg-[#ffca44] rounded-full text-white  '>
//                                 <i className="bi bi-envelope pe-2"></i> Get In Touch
//                             </button>
//                             <Link to={`/checkout/${room.id}`} >
//                                 <button className='w-[150px] h-[50px] '>BOOK NOW <i className="ri-arrow-right-line ps-2"></i> </button>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Recommend */}
//             <div className="w-full py-[100px] px-[8%] lg:px-[12%] bg-[#f3fdfd] ">
//                 <div className="section-title text-start space-y-4">
//                     <span className="bg-[#D5F1F1] rounded-full px-5 py-2 font-bricolage text ">WELCOME FRIEND</span>
//                     <h1 className='text-5xl font-semibold'>We Recommend</h1>
//                 </div>
//                 <div className="mt-5 pt-5">
//                     <Swiper
//                         slidesPerView={3.5}
//                         spaceBetween={30}
//                         loop={true}
//                         breakpoints={{
//                             1399: { slidePreView: 3.5 },
//                             1199: { slidePreView: 2.5 },
//                             991: { slidePreView: 1 },
//                             0: { slidePreView: 1 },
//                         }}
//                         style={{ padding: "20px 0" }}
//                     >
//                         {RoomsData.map((room) => (
//                             <SwiperSlide
//                                 key={room.id}
//                             >
//                                 <div className="bg-white rounded-2xl shadow-md overflow-hidden show-rooms ">
//                                     <div className="relative">
//                                         <Swiper modules={[Pagination]}
//                                             pagination={{ clickable: true }}
//                                             className='w-full h-[280px] custom-swiper'
//                                         >
//                                             {room.photos.map((photo, index) => (
//                                                 <SwiperSlide key={index}>
//                                                     <img
//                                                         src={photo}
//                                                         alt={`${room.title} ${index + 1}`}
//                                                         className="w-full h-[280px] object-cover"
//                                                     />
//                                                 </SwiperSlide>
//                                             ))}
//                                         </Swiper>
//                                     </div>
//                                     <div className="bg-[#e8faff] flex gap-4 px-4 py-3 text-sm">
//                                         <span className='flex items-center gap-1'>
//                                             <i className="bg-white shadow rounded py-1 px-3 ri-user-line"></i>
//                                             Adults : {room.adults}
//                                         </span>
//                                         <span className='flex items-center gap-1'>
//                                             <i className="bg-white shadow rounded py-1 px-3 ri-aspect-ratio-line"></i>
//                                             Size : {room.size}
//                                         </span>
//                                     </div>
//                                     <Link to={`/room/${room.id}`} >
//                                         <div className="px-6 pt-4 pb-4">
//                                             <div className="py-4">
//                                                 <h3 className='text-2xl font-semibold mb-1 '>
//                                                     {room.title}
//                                                 </h3>
//                                                 <p className='text-md text-gray-500'>{room.description} </p>
//                                             </div>
//                                             <div className="border-t mt-4 pt-4 flex justify-between items-center">
//                                                 <p className='text-lg font-bold text-[#000]'>
//                                                     ${room.price}
//                                                 </p>
//                                                 <button className='w-12 h-12 bg-[#23bcec] rounded-full flex items-center justify-center text-white text-xl'>
//                                                     <i className="ri-bookmark-line"></i>
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </Link>
//                                 </div>
//                             </SwiperSlide>
//                         ))}

//                     </Swiper>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default RoomsDetails;



import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import RoomsData from '../../Rooms.json';
import heroImg from '../../assets/about-2.png';
import sectionElement from '../../assets/section-element.png';
import Element1 from '../../assets/element-1.png';
import Element2 from '../../assets/element-2.png';
import Element3 from '../../assets/element-3.png';
import feature1 from '../../assets/feature-icon-1.svg';
import feature2 from '../../assets/feature-icon-2.svg';
import feature3 from '../../assets/feature-icon-3.svg';
import feature4 from '../../assets/feature-icon-4.svg';
import feature5 from '../../assets/feature-icon-5.svg';
import feature6 from '../../assets/feature-icon-6.svg';
import amenit1 from '../../assets/room-amenit-1.svg';
import amenit2 from '../../assets/room-amenit-2.svg';
import amenit3 from '../../assets/room-amenit-3.svg';
import amenit4 from '../../assets/room-amenit-4.svg';

const RoomsDetails = () => {
    const { id } = useParams();
    const room = RoomsData.find((room) => room.id === id);

    if (!room) {
        return <div className='text-center py-20 text-3xl text-red-500'>Room Not Found ?</div>;
    }

    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');

    return (
        <>
            {/* Banner */}
            <div className="section-banner mt-5 pt-6 relative flex items-center justify-center">
                <img src={sectionElement} className='w-full h-full section-banner-element-1 absolute' alt="" />
                <img src={sectionElement} className='w-full h-full section-banner-element-2 absolute' alt="" />
                <img src={Element1} className='w-full h-full section-banner-element-3 absolute' alt="" />
                <img src={Element2} className='w-full h-full section-banner-element-4 absolute' alt="" />
                <img src={Element3} className='w-full h-full section-banner-element-5 absolute' alt="" />
                <div className="section-banner-content flex items-center flex-col text-center z-auto">
                    <h1 className='text-7xl font-semibold'>Get of<br /> your Comfort</h1>
                    <div className="mt-10 bg-[#d5f1f1] w-[250px] p-2 text-xl rounded">
                        <Link to='/' >Home </Link> &nbsp; / &nbsp;
                        <span className='text-gray-500'>Room Details</span>
                    </div>
                </div>
            </div>


            {/* Room Details */}
            <div className="w-full py-16 px-4 sm:px-8 lg:px-12 bg-[#f3fdfd]">
                <h2 className='text-3xl sm:text-4xl lg:text-6xl font-bricolage font-bold mb-6'>{room.title}</h2>
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">

                    {/* Swiper Section */}
                    <div className="lg:w-2/3 w-full p-3 rounded-2xl">
                        <Swiper
                            spaceBetween={20}
                            speed={800}
                            modules={[Pagination]}
                            pagination={{ clickable: true }}
                            className='w-full h-[300px] sm:h-[350px] lg:h-[400px] bg-white shadow-lg rounded-xl overflow-hidden'
                        >
                            {room.photos.map((photo, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        src={photo}
                                        alt={`${room.title} ${index + 1}`}
                                        className='w-full h-full object-cover rounded-xl'
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Key Features */}
                        <div className="py-8">
                            <h2 className='text-2xl sm:text-3xl font-bold mb-4'>Key Features</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
                                {[feature1, feature2, feature3, feature4, feature5, feature6].map((f, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-white rounded-xl shadow-md p-3 sm:p-4">
                                        <img src={f} className='w-12 h-12 sm:w-14 sm:h-14 p-2 bg-[#d6f6ff] rounded-md' alt="" />
                                        <p className='font-medium text-gray-600 text-sm sm:text-lg'>
                                            {['Air-Condition', 'Free Wi-fi', 'Smart TV', 'Pet Friendly', 'Lunches', 'Game-Room'][i]}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Description */}
                            <h2 className='text-2xl sm:text-3xl font-bold mt-6'>Description</h2>
                            {Array(3).fill(
                                <p className='py-2 sm:py-3 font-light text-sm sm:text-base'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quidem Lorem ipsum dolor sit amet.
                                </p>
                            )}

                            {/* Amenities */}
                            <h2 className='text-2xl sm:text-3xl font-bold mt-6'>Amenities</h2>
                            <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                                {[amenit1, amenit2, amenit3, amenit4].map((amenit, i) => (
                                    <div key={i} className="w-full lg:w-1/2 bg-white p-6 sm:p-10 rounded-2xl shadow-lg flex flex-col gap-3">
                                        <img src={amenit} className='w-12 sm:w-16 h-12 sm:h-16 p-2 bg-[#d6f6f6] rounded-md' alt="" />
                                        <h3 className='text-xl sm:text-3xl font-semibold'>
                                            {['Air-conditioned', 'Free Wi-fi', 'Smart TV', 'Free Transfer'][i]}
                                        </h3>
                                        <p className='text-sm sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                ))}
                            </div>

                            {/* Location */}
                            <h2 className='text-2xl sm:text-3xl font-bold mt-6'>Location</h2>
                            <div className="w-full rounded-xl overflow-hidden shadow-md mt-2">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48873138.04954164!2d58.9629245!3d20.593684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff96b86b91b%3A0xb0bdbfbcbb8cba4!2sIndia!5e0!3m2!1sen!2sin!4v1723950000000!5m2!1sen!2sin"
                                    width='100%'
                                    height='300'
                                    className="sm:h-[450px]"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading='lazy'
                                    referrerPolicy='no-referrer-when-downgrade'
                                />
                            </div>
                        </div>
                    </div>

                    {/* Booking Form */}
                    <div className="lg:w-1/3 w-full sticky top-24 bg-white p-4 sm:p-8 rounded-2xl shadow-lg flex flex-col gap-4">
                        <div className="border-2 border-yellow-400 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-center flex justify-center items-end">
                            <h2 className='text-2xl sm:text-4xl font-bold flex items-start'>
                                <span className='text-sm sm:text-base'>$</span> {room.price}
                            </h2>
                            <p className="text-gray-500 text-xs sm:text-sm font-normal ml-2">/per night</p>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-around bg-[#e8faff] py-2 sm:py-3 rounded-xl text-[#1d5c63] font-medium text-xs sm:text-sm gap-2 sm:gap-4">
                            <div className="flex items-center gap-1 sm:gap-2">
                                <i className='ri-user-line text-sm sm:text-lg'></i> Adults: {room.adults}
                            </div>
                            <div className="flex items-center gap-1 sm:gap-2">
                                <i className='ri-aspect-ratio-line text-sm sm:text-lg'></i> Size: {room.size}
                            </div>
                        </div>

                        <form className="flex flex-col gap-3">
                            <div>
                                <label className='block text-xs sm:text-sm text-gray-600 mb-1'>CHECK-IN</label>
                                <input
                                    type="date"
                                    className='w-full p-2 sm:p-3 bg-[#e8faff] rounded-md outline-none text-xs sm:text-sm'
                                    value={checkIn}
                                    min={new Date().toISOString().split("T")[0]}
                                    onChange={(e) => setCheckIn(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label className='block text-xs sm:text-sm text-gray-600 mb-1'>CHECK-OUT</label>
                                <input
                                    type="date"
                                    className='w-full p-2 sm:p-3 bg-[#e8faff] rounded-md outline-none text-xs sm:text-sm'
                                    value={checkOut}
                                    min={checkIn || new Date().toISOString().split("T")[0]}
                                    onChange={(e) => setCheckOut(e.target.value)}
                                    required
                                />
                            </div>

                            {checkIn && checkOut && new Date(checkOut) > new Date(checkIn) ? (
                                <Link to={`/checkout/${room.id}`} state={{ checkIn, checkOut }}>
                                    <button type='button' className='w-full py-2 sm:py-3 bg-[#23bcec] hover:bg-[#00aee2] text-white text-sm sm:text-lg rounded-full flex items-center justify-center gap-2 mt-2'>
                                        <i className="ri-bookmark-line"></i> BOOK NOW
                                    </button>
                                </Link>
                            ) : (
                                <button type='button' disabled className='w-full py-2 sm:py-3 bg-gray-400 cursor-not-allowed text-white text-sm sm:text-lg rounded-full flex items-center justify-center gap-2 mt-2'>
                                    <i className="ri-bookmark-line"></i> BOOK NOW
                                </button>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RoomsDetails;



import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import socialIcon1 from '../../assets/social-icon-1.svg'
import socialIcon2 from '../../assets/social-icon-2.svg'
import socialIcon3 from '../../assets/social-icon-3.svg'
import socialIcon4 from '../../assets/social-icon-4.svg'

function MainFooter({ setShowLoginModal }) {
    const [showScroll, setShowScroll] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <>
            <div className="px-[5%] ">
                <footer className='bg-white px-[7%] py-[100px]'>

                    {/* Top Section */}
                    <div className="flex border-b border-gray-400 pb-[50px] flex-col lg:flex-row lg:justify-between gap-10">
                        <div className="lg:w-7/12">
                            <Link to='/' className='text-4xl font-bold font-bricolage text-black'>
                                Ghotul <span className='text-blue-600'>HomeStay</span>
                            </Link>
                            <p className='mt-5 font-light tracking-wide text-gray-700'>Subscribe our newsletter:</p>
                            <div className="mt-5 flex items-center bg-blue-50 px-5 py-2 w-full max-w-md rounded-full">
                                <input type="email" name='email' placeholder='Enter Your E-mail' className='bg-transparent flex-1 outline-none placeholder:text-gray-600 text-sm' />
                                <i onClick={() => setShowLoginModal(true)} className="ri-arrow-right-line text-xl bg-yellow-300 w-[40px] h-[40px] flex items-center justify-center rounded-full cursor-pointer"></i>
                            </div>
                        </div>

                        <div className="lg:w-6/12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <div className="flex flex-col gap-3">
                                        <Link to='/' className='text-4xl font-semibold font-bricolage text-[#204f5e] hover:text-[#ecb934] transition'
                                        >Home</Link>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <Link onClick={() => setShowLoginModal(true)} className='text-4xl font-semibold font-bricolage text-[#204f5e] hover:text-[#ecb934] transition'
                                        >About Hotel</Link>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <Link onClick={() => setShowLoginModal(true)} className='text-4xl font-semibold font-bricolage text-[#204f5e] hover:text-[#ecb934] transition'
                                        >Rooms</Link>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <Link onClick={() => setShowLoginModal(true)} className='text-4xl font-semibold font-bricolage text-[#204f5e] hover:text-[#ecb934] transition'
                                        >Blog</Link>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <Link onClick={() => setShowLoginModal(true)} className='text-4xl font-semibold font-bricolage text-[#204f5e] hover:text-[#ecb934] transition'
                                        >Contact</Link>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex flex-col gap-2 '>
                                        <Link to='/' className='font-normal font-bricolage text-[#204f5e] hover:text-[#ecb934] transition'>
                                            Privacy Policy
                                        </Link>
                                        <Link to='/' className='font-normal font-bricolage text-[#204f5e] hover:text-[#ecb934] transition'>
                                            Terms and Conditions
                                        </Link>
                                        <Link to='/' className='font-normal font-bricolage text-[#204f5e] hover:text-[#ecb934] transition'>
                                            Cookie Policy
                                        </Link>
                                        <Link to='/' className='font-normal font-bricolage text-[#204f5e] hover:text-[#ecb934] transition'>
                                            Careers
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ✅ FAQ Section Added Here */}
                    <div className="mt-[80px] border-b border-gray-300 pb-[50px]">
                        <h2 className="text-3xl font-bold text-[#204f5e] mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-5">
                            <div>
                                <p className="font-semibold">Q: Where is Ghotul Homestay | 5Min From Apollo Hospital located?</p>
                                <p className="text-gray-700">Ghotul Homestay | 5Min From Apollo Hospital is situated at 6A, Japorigog, offering convenient access to 753 in Lokpriya Gopinath Bordoloi International Airport, 751 in Guwahati Railway Station, 751 in Kamakhya Railway Station, 746 in Changsari Railway Station, 746 in ISBT Bus Terminus and other key locations.</p>
                            </div>
                            <div>
                                <p className="font-semibold">Q: How far is it from the city center?</p>
                                <p className="text-gray-700">A: The homestay is just 7.8 km away from the city center.</p>
                            </div>
                            <div>
                                <p className="font-semibold">Q:  What are the customer ratings for Ghotul Homestay | 5Min From Apollo Hospital ?</p>
                                <p className="text-gray-700">A:
                                    The overall rating for Ghotul Homestay | 5Min From Apollo Hospital stands at 4.5 out of 5, as reviewed by some guests on our website . You can explore in-depth guest reviews and browse through photos shared by visitors directly on the MakeMyTrip platform.</p>
                            </div>
                            <div>
                                <p className="font-semibold">Q: What are the check-in and check-out times?</p>
                                <p className="text-gray-700">A: Check-In: 12 PM | Check-Out: 10 AM (Early check-in/late check-out subject to availability).</p>
                            </div>
                            <div>
                                <p className="font-semibold">Q: How many types of rooms are available?</p>
                                <p className="text-gray-700">A: At Ghotul Homestay | 5Min From Apollo Hospital , we offer 4 room types tailored to meet the needs of every traveler. Check detailed room features, images, and the latest availability. Each room is designed to make your stay unforgettable.</p>
                            </div>
                            <div>
                                <p className="font-semibold">Q: What are the tourist attractions around Ghotul Homestay | 5Min From Apollo Hospital ?</p>
                                <p className="text-gray-700">A: Popular attractions near Ghotul Homestay | 5Min From Apollo Hospital include : 753 in Lokpriya Gopinath Bordoloi International Airport, 751 in Guwahati Railway Station, 751 in Kamakhya Railway Station, 746 in Changsari Railway Station, 746 in ISBT Bus Terminus and more.</p>
                            </div>
                            <div>
                                <p className="font-semibold">Q:  What are the popular areas to visit nearby Ghotul Homestay | 5Min From Apollo Hospital ?</p>
                                <p className="text-gray-700">A: Ghotul Homestay | 5Min From Apollo Hospital is situated in Japorigog, Guwahati, offering easy access to several well-known attractions and neighbourhoods. Nearby, you can explore popular spots such as 6 in Japorigog, and more. <a href="https://www.makemytrip.com" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">MakeMyTrip</a>.</p>
                            </div>
                            <div>
                                <p className="font-semibold">Q:  Any options for booking on partner website?</p>
                                <p className="text-gray-700">A: You can explore Ghotul Homestay | 5Min From Apollo Hospital on our partner website www.makemytrip.com <a href="https://www.makemytrip.com" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">MakeMyTrip</a>.</p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="flex lg:pt-[150px] pt-[80px] flex-col lg:flex-row lg:justify-between gap-10">
                        <div className="lg:w-7/12 ">
                            <div className="flex items-center gap-3">
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
                            <p className='mt-5 font-light tracking-wide text-gray-700'>
                                &copy; 2025. All Right Reserved <span className='text-blue-800'>K2infocom</span>
                            </p>
                        </div>
                        <div className="lg:w-6/12 ">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="w-2/3">
                                    <div className="flex flex-col gap-4">
                                        <h5 className='font-semibold text-2xl'>Guwahati</h5>
                                        <p>Address Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, eum!</p>
                                    </div>
                                </div>
                                <div className="w-2/3">
                                    <div className="flex flex-col gap-4">
                                        <h5 className='font-semibold text-2xl'>Maharashtra</h5>
                                        <p>Address Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, eum!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ✅ Scroll to Top Arrow */}
                        {showScroll && (
                            <button
                                onClick={scrollToTop}
                                className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-300 z-50"
                                aria-label="Scroll to top"
                            >
                                <i className="ri-arrow-up-line text-2xl"></i>
                            </button>
                        )}
                    </div>
                </footer>
            </div>
        </>
    )
}

export default MainFooter

import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import sectionElement from '../../assets/section-element.png';
import Element1 from '../../assets/element-1.png';
import Element2 from '../../assets/element-2.png';
import Element3 from '../../assets/element-3.png';
import emailjs from '@emailjs/browser';

function Contact() {

    const form = useRef();
    const [status, setStatus] = useState({ text: "", type: "" });

    const sendEmail = async (e) => {
        e.preventDefault();
        setStatus({ text: "", type: "" });

        try {
            await emailjs.sendForm(
                'service_c1lcmym',
                'template_3d23n3n',
                form.current,
                { publicKey: 'iDnsyeNW2wHQtj5-7' }
            );
            setStatus({ text: "Message sent successfully ✅", type: "success" });
            form.current.reset();
        } catch (error) {
            setStatus({ text: "Failed to send message ❌", type: "error" });
        }
    };

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
                    <h1 className='text-7xl font-semibold'>Get In Touch!</h1>
                    <div className="mt-10 bg-[#d5f1f1] w-[250px] p-2 text-xl rounded">
                        <Link to='/' >Home </Link> &nbsp; / &nbsp;
                        <span className='text-gray-500'>Contact Us</span>
                    </div>
                </div>
            </div>

            {/* contact Form */}
            <section className='bg-[#f9fefe] py-[100px] w-full px-[5%] md:px-[100px]'>
                <div className="w-full px-[5%] bg-white rounded-[20px] border border-gray-300 shadow-xlcrelative z-[10] py-20">
                    <form ref={form} onSubmit={sendEmail} className='space-y-6'>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2 ">
                                <label className='text-sm font-semibold uppercase text-[#1d2b3a] '>First Name</label>
                                <div className=" flex items-center bg-[#f0fbfd] border border-[#d0e7ea] rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-[#10b4d1] transition-all duration-200">
                                    <input type="text" name='name' placeholder='Enter Your First Name' className='w-full bg-transparent outline-none text-[#1d2b3a] placeholder:text-[#1d2b3a]/60' required />
                                    <i className="ri-user-line text-[#10b4d1] text-xl ml-2 animate-pulse"></i>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 ">
                                <label className='text-sm font-semibold uppercase text-[#1d2b3a] '>Last Name</label>
                                <div className=" flex items-center bg-[#f0fbfd] border border-[#d0e7ea] rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-[#10b4d1] transition-all duration-200">
                                    <input type="text" name='lastName' placeholder='Enter Your Last Name' className='w-full bg-transparent outline-none text-[#1d2b3a] placeholder:text-[#1d2b3a]/60' required />
                                    <i className="ri-user-smile-line text-[#10b4d1] text-xl ml-2 animate-pulse"></i>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2 ">
                                <label className='text-sm font-semibold uppercase text-[#1d2b3a] '>E-mail</label>
                                <div className=" flex items-center bg-[#f0fbfd] border border-[#d0e7ea] rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-[#10b4d1] transition-all duration-200">
                                    <input type="email" name='email' placeholder='Enter Your E-mail' className='w-full bg-transparent outline-none text-[#1d2b3a] placeholder:text-[#1d2b3a]/60' required />
                                    <i className="ri-mail-line text-[#10b4d1] text-xl ml-2 animate-pulse"></i>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 ">
                                <label className='text-sm font-semibold uppercase text-[#1d2b3a] '>Phone</label>
                                <div className=" flex items-center bg-[#f0fbfd] border border-[#d0e7ea] rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-[#10b4d1] transition-all duration-200">
                                    <input type="tel" name='contact' placeholder='Enter Your Phone Number' className='w-full bg-transparent outline-none text-[#1d2b3a] placeholder:text-[#1d2b3a]/60' required />
                                    <i className="ri-phone-line text-[#10b4d1] text-xl ml-2 animate-pulse"></i>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className='text-sm font-semibold uppercase text-[#1d2b3a] '>Message</label>
                            <textarea name='message' rows="6" placeholder='Your Message...' className='w-full bg-[#f0fbfb] border border-[#d0e7ea] rounded-lg px-4 py-4 resize-none outline-none text-[#1d2b3a] placeholder:text-[#1d2b3a]/60 focus:ring-2 focus:ring-[#10b4d1] transition-all duration-200 ' required></textarea>
                        </div>

                        <div className="flex flex-col md:flex-row justify-between items-center mt-4 ">
                            <p className="text-sm text-[#1d2b3a]/80 italic mb-4 md:mb-0">
                                *We promise not to disclose your personal information to third parties.
                            </p>
                            <button type='submit' className='bg-[#f2c94c] hover:bg-[#e6b326] text-white px-10 py-3 rounded-full font-semibold tracking-widest hover:scale-105 transition-transform duration-300'>
                                SEND
                            </button>
                        </div>
                        {status.text && (
                            <p className={`mt-6 text-center font-semibold ${status.type === "success" ? "text-green-600" : "text-red-600"}`}>
                                {status.text}
                            </p>
                        )}
                    </form>
                </div>
            </section>






            {/* location */}
            <section className='w-full bg-gradient-to-br from-[#e0f7fa] via-[#f3fcfd] to-[#e0f7fa] px-[8%] lg:px-[12%] py-[100px]'>
                <div className="mx-auto flex flex-col gap-16 ">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="backdrop-blur-md bg-white/700 shadow-xl rounded-[20px] p-8 flex flex-col items-start gap-4 transition-all">
                            <div className="bg-[#e8fafc] text-[#10b4d1] h-[60px] w-[60px] rounded-full flex items-center justify-center text-3xl">
                                <i className="ri-phone-line"></i>
                            </div>
                            <h4 className='text-[#1d2b3a] font-bold text-xl'>+91 (842) 38x 28 04</h4>
                            <p className="text-base text-[#1d2b3a]/70">Call us anytime. we are available 24/7</p>
                        </div>
                        <div className="backdrop-blur-md bg-white/700 shadow-xl rounded-[20px] p-8 flex flex-col items-start gap-4 transition-all">
                            <div className="bg-[#e8fafc] text-[#10b4d1] h-[60px] w-[60px] rounded-full flex items-center justify-center text-3xl">
                                <i className="ri-mail-line"></i>
                            </div>
                            <h4 className='text-[#1d2b3a] font-bold text-xl'>Example@info.com</h4>
                            <p className="text-base text-[#1d2b3a]/70">Write to us. we respond quickly</p>
                        </div>
                        <div className="backdrop-blur-md bg-white/700 shadow-xl rounded-[20px] p-8 flex flex-col items-start gap-4 transition-all">
                            <div className="bg-[#e8fafc] text-[#10b4d1] h-[60px] w-[60px] rounded-full flex items-center justify-center text-3xl">
                                <i className="ri-map-pin-line"></i>
                            </div>
                            <h4 className='text-[#1d2b3a] font-bold text-xl'>Wharf St. 7584, Some City</h4>
                            <p className="text-base text-[#1d2b3a]/70">We invite you to visit us</p>
                        </div>
                    </div>
                    {/* Map */}
                    <div className="rounded-[20px] overflow-hidden shadow-xl ">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48873138.04954164!2d58.9629245!3d20.593684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff96b86b91b%3A0xb0bdbfbcbb8cba4!2sIndia!5e0!3m2!1sen!2sin!4v1723950000000!5m2!1sen!2sin" width='100%' height='600' style={{ border: 0 }} allowFullScreen='' loading='lazy' referrerPolicy='no-referrer-when-downgrade' frameborder="0" />
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contact
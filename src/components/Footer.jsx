import React from 'react'
import Logo from '../svg/Logo'
import EmailIcon from '../svg/EmailIcon'
import PhoneIcon from '../svg/PhoneIcon'

const Footer = () => {
    return (
        // <div className='pt-[1.68rem] md:pt-[2.5rem]  '>

        <div className='bg-app-brand2 px-[1.25rem] md:px-[5rem] pt-[2.1875rem] md:pt-[3rem] pb-[0.875rem] flex flex-col gap-[1.25rem] md:gap-[2rem]'>
            <div className=' flex flex-col md:flex-row gap-[0.625rem] md:gap-[0px] justify-between '>
                <div className='flex-col md:flex-row  flex  gap-[0.625rem] md:gap-[7.8rem] '>
                    <div >
                        <div className='flex  gap-[0.875rem] items-center pb-[0.625rem]'>
                            <Logo />
                            <p className='text-32-scale md:text-32-scale-lg text-app-brand '>SwasthBharath</p>
                        </div>
                        <p className='text-[#EBEAEA] text-14-scale text-14-scale-lg md:w-[22.125rem] '>
                            A GOI initiative to ensure holistic, lifelong well-being through digital tools, expert knowledge, and continuous support.
                        </p>
                    </div>
                    <div className='flex gap-[4.188rem]'>
                        <div className='flex md:flex-col gap-[0.625rem] items-center  md:items-start pt-[0.625rem] md:pt-[0px]'>
                            <p className='text-white text-10-scale md:text-16-scale-lg font-[700] leading-[1rem] md:pb-[0.625rem]'>Quick as</p>
                            {["About", "Knowledge Center", "Community", "Help"].map((val, index) => <div key={index} className='flex items-center'>{index !== 0 && (<div className='flex md:hidden w-[0.188rem] h-[0.188rem] rounded-full bg-[#EBEAEA] mr-[0.25rem]'></div>)}
                                <a href="/" className='text-[#EBEAEA] text-10-scale md:text-14-scale-lg leading-[1rem]'>{val}</a></div>)
                            }
                        </div>
                        <div className='flex md:flex-col gap-[0.625rem] items-center md:items-start'>
                            <p className='text-white text-10-scale md:text-16-scale-lg font-[700] leading-[1rem] md:pb-[0.625rem]'>Resources</p>
                            {["Life Stages", "Nutrition Tips", "Exercise Plans"].map((val, index) => <div key={index} className='flex items-center'>{index !== 0 && (<div className='flex md:hidden w-[0.188rem] h-[0.188rem] rounded-full bg-[#EBEAEA] mr-[0.25rem]'></div>)}
                                <a href="/" className='text-[#EBEAEA] text-10-scale md:text-14-scale-lg leading-[1.25rem] md:leading-[1rem]'>{val}</a></div>)
                            }
                        </div>
                        <div className='flex flex-col gap-[0.625rem] pt-[1.5rem] md:pt-[0px]'>

                            <p className='text-white text-10-scale md:text-16-scale-lg font-[700] leading-[1rem] md:pb-[0.625rem]'>Contact With Us</p>
                            <div className='flex md:flex-col gap-[1.875rem] items-center md:items-start '>
                                <div className='flex gap-[0.625rem] items-center '>
                                    <div className='md:hidden flex'><EmailIcon width="13" height="13" /></div>
                                    <div className='hidden md:flex'><EmailIcon /></div>
                                    <p className='text-[#EBEAEA] text-10-scale md:text-14-scale-lg'>contact@healthhub.in</p>
                                </div>
                                <div className='flex gap-[0.625rem] items-center'>
                                    <div className='md:hidden flex'><PhoneIcon width="12" height="12" /></div>
                                    <div className='hidden md:flex'><PhoneIcon /></div>
                                    <p className='text-[#EBEAEA] text-10-scale md:text-14-scale-lg'>+91 9999999999
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div>
                <p className='text-12-scale md:text-16-scale-lg text-[#EBEAEA]  pb-[0.875rem]'>© 2025 HealthHub. All Rights Reserved.</p>
            </div>
        </div>
        // </div>
    )
}

export default Footer




// import { usePathname } from 'next/navigation'
import { useLocation } from 'react-router-dom';
import React, { Suspense, useState } from 'react'
// import Button from './Button'
import Hamburger from '../svg/Hamurger';
import CrossIcon from '../svg/CrossIcon';
import Logo from '../svg/Logo';
import Button from './Button';

const Navbar = () => {
  return (

    <NavBarComponent />)


}
export default Navbar
const NavBarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);

  };
  const pathname = useLocation()
  // fixed top-0 left-0 right-0 z-50 bg-ta-white shadow-lg border-b border-ta-beige
  return (
    <>
      <div className='fixed top-0 left-0 right-0 z-50 bg-app-brand2 shadow-lg w-full flex h-[4rem] hidden md:flex items-center justify-between px-[3.875rem]'>
        <a href="/" className='flex gap-[0.875rem] items-center'>
          <Logo />
          <p className='text-32-scale-lg text-app-brand font-[500] leading-[1.5rem]'>SwasthBharath</p>
        </a>
       
        <div className='flex gap-[2rem] items-center text-ta-dark-brown'>
          <a href="/" className={`${pathname === "/" ? "border-b-[0.125rem] border-app-brand text-app-brand font-[700]" : "text-white hover:text-app-brand"} py-[0.188rem] text-18-scale-lg leading-[100%]`}>
            Home
          </a>
          <a href="/about" className={`${pathname === "/about" ? "border-b-[0.125rem] border-app-brand text-app-brand font-[700]" : "text-white hover:text-app-brand"} py-[0.188rem] text-18-scale-lg leading-[100%]`}>
            About
          </a>
          <a href="/" className={`${pathname === "stages" ? "border-b-[0.125rem] border-app-brand text-app-brand font-[700]" : "text-white hover:text-app-brand"} py-[0.188rem] text-18-scale-lg leading-[100%]`}>
            Life Stages
          </a>
          <a href="/" className={`${pathname === "/knowledge" ? "border-b-[0.125rem] border-app-brand text-app-brand font-[700]" : "text-white hover:text-app-brand"} py-[0.188rem] text-18-scale-lg leading-[100%]`}>
            Knowledge Center
          </a>
          <a href="/" className={`${pathname === "/data" ? "border-b-[0.125rem] border-app-brand text-app-brand font-[700]" : "text-white hover:text-app-brand"} py-[0.188rem] text-18-scale-lg leading-[100%]`}>
            Data
          </a>
          <a href="/" className={`${pathname === "/help" ? "border-b-[0.125rem] border-app-brand text-app-brand font-[700]" : "text-white hover:text-app-brand"} py-[0.188rem] text-18-scale-lg leading-[100%]`}>
            Help
          </a>
        </div>

        <div className='gap-[0.8125rem] flex'>
          <Button label="Login" className="text-white bg-app-brand2 px-[1.5rem] h-[2.5rem] !font-[400]" />
          <Button label="Register" className="text-white bg-app-brand2 w-[7.125rem] !h-[2.5rem] !font-[400] rounded-[1.44rem] flex items-center justify-center" />
        </div>
      </div>
      <div className='flex px-16-scale items-center h-[4.88rem] justify-between bg-nav-bg md:hidden '>
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-[999]"
            onClick={toggleDrawer}
          ></div>
        )}
        {/* Drawer */}
        <div
          className={`fixed top-0 h-full z-[999] left-0 w-[90%]  md:w-[21rem] rounded-tr-[1rem] rounded-br-[1rem] transition-transform duration-300 ${isOpen ? "translate-x-0 " : "-translate-x-full "
            }`}
        >
          {/* Close Button */}
          <nav className="h-full bg-white py-[1.25rem] px-[1.5rem]">
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="border-b-[0.0635rem] pb-[1.25rem] flex justify-between">
                  <a href="/" className='flex gap-[0.625rem]   !items-center'>
                    <Logo width="25px" height="25px" />
                    <p className='text-20-scale text-app-brand font-[700] leading-[1.5rem]'>HealthHub</p>
                  </a>
                  <button onClick={toggleDrawer}>
                    <CrossIcon color="black" width="14" height="14" />
                  </button>
                </div>
                <div className=' h-[500px] flex flex-col justify-between'>
                  <ul className="text-18-scale md:18-scale-lg font-[500] pt-[0.5rem]">



                    <li>
                      <a href="/" className={`block py-2 px-4 ${pathname === "/"?"text-app-brand":"text-black"}`} onClick={toggleDrawer}>
                        Home
                      </a>
                    </li>
                    {/* <li>
                  <a href="/science" className="block py-2 px-4" onClick={toggleDrawer}>
                    The Science
                  </a>
                </li> */}
                    <li>
                      <a href="/about" className={`block py-2 px-4 ${pathname === "/about"?"text-app-brand":"text-black"}`} onClick={toggleDrawer}>
                        About
                      </a>
                    </li>
                    <li>
                      <a href="/" className={`block py-2 px-4 ${pathname==="stages"?"text-app-brand":"text-black"}`} onClick={toggleDrawer}>
                        Life Stages
                      </a>
                    </li>
                    <li>
                      <a href="/" className="block py-2 px-4" onClick={toggleDrawer}>
                        Knowledge Center
                      </a>
                    </li>
                    <li>
                      <a href="/" className="block py-2 px-4" onClick={toggleDrawer}>
                        Data
                      </a>
                    </li>
                    <li>
                      <a href="/" className="block py-2 px-4" onClick={toggleDrawer}>
                        Help
                      </a>
                    </li>

                  </ul>
                  <div className='flex  flex-col justify-between items-center gap-[20px]'>
                    <button label="Login" className=" text-app-brand !w-full h-[40px]  font-[600]  " />
                    <button label="Register" className=" text-white bg-app-brand !w-full !h-[40px] font-[500] rounded-[20.188rem] flex items-center justify-center  " />

                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* Hamburger Menu Button */}
        <div className=" w-full h-[78px] bg-nav-bg flex items-center  justify-between z-[900] md:hidden">

          <a href="/" className='flex gap-[10px]   !items-center'>
            <Logo />
            <p className='text-32-scale text-app-brand font-[700] leading-[75%]'>HealthHub</p>
          </a>
          <button type="button" onClick={toggleDrawer}>
            <Hamburger />
          </button>


        </div>
      </div>

    </>
  )
}



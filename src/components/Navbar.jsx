import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedinIn, FaTwitter} from 'react-icons/fa' 
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill, BsTwitter} from 'react-icons/bs'
import Logo from '../assets/logo.jpeg'
function Navbar() {

    const [nav, setNav] = useState(false)
    const handleClick = ()=>setNav(!nav)
  return (
    //   navbar
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#121212] text-gray-300'>
        <div>
          <img src={Logo} alt="Logo Image" style={{width:"70px"}}/>
        </div>
        {/* menu */}
        
            <ul className=' hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul> 


        {/* hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
            {!nav ? <FaBars/>:<FaTimes/>}
        </div>
        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}> 
                <li className='py-6 text-4xl'> Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Projects</li>
                <li className='py-6 text-4xl'>Contact</li>
        </ul>
        {/* social media icons */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-400'>
                <a className='flex justify-between items-center w-full text-gray-300' href="/">Twitter
                <FaTwitter size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                <a className='flex justify-between items-center w-full text-gray-300' href="/">LinkedIn
                <FaLinkedinIn size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                <a className='flex justify-between items-center w-full text-gray-300' href="/">Github  
                <FaGithub size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-600'>
                <a className='flex justify-between items-center w-full text-gray-300' href="/">Email
                <HiOutlineMail size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                <a className='flex justify-between items-center w-full text-gray-300' href="/">Resume
                <BsFillPersonLinesFill size={30}/>
                </a>
            </li>
        </ul>

        </div>

    </div>
  )
}

export default Navbar
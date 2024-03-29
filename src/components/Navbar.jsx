import React, {useState, useContext} from 'react'
import {Link} from 'react-scroll'
import {FaBars, FaTimes, FaGithub, FaLinkedinIn, FaTwitter} from 'react-icons/fa' 
import { HiOutlineMail } from 'react-icons/hi'
import Logo from '../assets/logo.jpeg'
import { ThemeContext } from "../Theme";
function Navbar() {

    const { theme, toggleTheme } = useContext(ThemeContext);
    const [nav, setNav] = useState(false)
    const handleClick = ()=>setNav(!nav)
  return (
    //   navbar
    <div className=' w-full h-[80px] flex justify-between items-center px-4 bg-[#121212] text-gray-300 '>
        <div>
            <a href="/">
            <img src={Logo} alt="Logo Image" style={{width:"80px", paddingTop:'50px'}}/>
            </a>
          
        </div>
        {/* menu */}
        
            <ul className=' mx-20  hidden md:flex'>
                <li className=' hover:text-[#8BDB81] p-5 cursor-pointer'>
                    <Link to='projects' smooth={true} duration={500}>
                    Projects
                    </Link></li>
                <li className='p-5 hover:text-[#8BDB81] cursor-pointer'><Link to='contact' smooth={true} duration={500}>
                    Contact
                    </Link></li>
            </ul> 
            
            


        {/* hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
            {!nav ? <FaBars className='rotate- translate-y-3 opacity-50 group-hover:opacity-100 cursor-pointer' size={35}/>:<FaTimes className='opacity-50 group-hover:opacity-100 cursor-pointer' size={35}/>}
        </div>
        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#121212] flex flex-col justify-center items-center'}> 
                <li  className='py-6 text-4xl cursor-pointer'>
                    <Link onClick={handleClick} to='hero' smooth={true} duration={500}>Home</Link>
                     </li>
                <li className='py-6 text-4xl cursor-pointer'><Link  onClick={handleClick} to='about' smooth={true} duration={500}>About</Link></li>
                
                <li className='py-6 text-4xl cursor-pointer'><Link onClick={handleClick} to='projects' smooth={true} duration={500}>
                    Projects
                    </Link></li>
                <li className='py-6 text-4xl cursor-pointer'><Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                    Contact
                    </Link>
                    </li>
                    <div className="text-white text-2xl p-6">
                        <p>gkayode75@gmail.com</p>
                    </div>
                    {/* social icons */}
          <div className="flex items-center p-6 lg:hidden text-white" id='socials'>
            <div className="p-5">
              <a href="https://github.com/kayodegeorge"><FaGithub size={25}/></a>
            
            </div>
            <div className="p-5">
              <a href="https://www.linkedin.com/in/kayode-george-43a7a519a/"><FaLinkedinIn size={25}/></a>
            
            </div>
            <div className="p-5">
              <a href="https://twitter.com/thekayodeg"><FaTwitter size={25}/></a>
            
            </div>
          </div>
        </ul>
        {/* social media icons */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-400'>
                <a className='flex justify-between items-center w-full text-gray-300' href="https://twitter.com/thekayodeg">Twitter
                <FaTwitter size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/kayode-george-43a7a519a/">LinkedIn
                <FaLinkedinIn size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/kayodegeorge">Github  
                <FaGithub size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-600'>
                <a className='flex justify-between items-center w-full text-gray-300' href="/">Email
                <HiOutlineMail size={30}/>
                </a>
            </li>
            {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                <a className='flex justify-between items-center w-full text-gray-300' href="/">Resume
                <BsFillPersonLinesFill size={30}/>
                </a>
            </li> */}
        </ul>

        </div>

    </div>
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-scroll'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import Typed from 'react-typed'
import { AnimationOnScroll } from 'react-animation-on-scroll'
function Hero() {
  return (
    <div name='hero' className='bg-[#121212] w-full h-screen'>
        
        {/* hero container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
          
          
          <h1 className='text 4xl sm:text-7xl font-bold ' style={{color:"#F7F7F7"}}>Kayode George</h1>
          
          <Typed
           className='text-3xl sm:text-5xl font-bold'
           style={{color:"#F7F7F7"}}
           strings={['Software Developer', 'Building Beautiful Web Experiences.']} typeSpeed={120} backSpeed={140} loop

          />
          {/* <p className='text-3xl sm:text-5xl font-bold ' style={{color:"#F7F7F7"}}>Building Beautiful Web Experiences</p> */}
          <div className="">
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#8BDB81] hover:border-[#8BDB81]'><Link to='projects' smooth={true} duration={500}>
                   View Projects
                    </Link>
            <span className='group-hover:rotate-90 duration-300 '>
            <HiArrowNarrowRight className='ml-3'/>
            </span>
             </button>
          </div>
          {/* social icons */}
          <div className="flex items-center p-8 lg:hidden text-white" id='socials'>
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
        </div>
    </div>
  )
}

export default Hero
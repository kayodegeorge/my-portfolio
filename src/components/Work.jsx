import React from 'react'
import GymImg from '../assets/GymImg.PNG'
import Exec from '../assets/Exec.jpeg'

function Work() {
  return (
    <div>
       <div name="work" className="w-full md:h-screen text-gray-300 bg-[#121212]">
           <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
               <div className="pb-8">
                   <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                   <p className='py-6'>Some of my selected projects</p>
               </div>
               <div
               style={{backgroundImage:`url(${GymImg})`}}
               className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                   <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                       <div className="opacity-0 group-hover:opacity-100">
                           <span className='text-2xl font-old text-white tracking-wider'>
                         The PowerRoom - A Gym Website 
                           </span>
                           <div className="">
                               <a href="/">
                                   <button></button>
                               </a>
                               <a href="/">
                                   <button></button>
                               </a>

                           </div>
                       </div>
                   </div>
               </div>
           </div>
           </div> 
    </div>
  )
}

export default Work
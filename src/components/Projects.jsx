import React from 'react'
import GymImg from '../assets/GymImg.PNG'
import AstraPayImg from '../assets/AstraPayImg.PNG'
import MealRecImg from '../assets/MealRecImg.PNG'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {FaCodeBranch} from 'react-icons/fa'
import { AnimationOnScroll } from 'react-animation-on-scroll'

function Projects() {
  return (
    <div>
       <div name="projects" className="w-full md:h-screen text-gray-300 bg-[#121212]">
           <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full"> 
               <div className="pb-8">
                   <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-gray-300'>Projects</p>
                   <p className='py-6'>Some of my selected projects</p>
               </div>
               {/* <div
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
               </div> */}

               
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                   
                   <AnimationOnScroll initiallyVisible={true} animateIn="animate__fadeInRight">
                   <div className="">
                              
                              <div class="max-w-sm bg-[#121212] rounded-lg border border-gray-300 shadow-md dark:bg-gray-800 dark:border-gray-700">
                               <a href="#">
                                   <img class="rounded-t-lg" src={GymImg} alt=""/>
                               </a>
                               <div class="p-5">
                                   <a href="#">
                                       <h5 class="mb-2 text-2xl tracking-tight text-gray-100 dark:text-white">The Power-room</h5>
                                   </a>
                                   <p class="mb-3 font-normal text-gray-100 dark:text-gray-400">A fitness and training center platform</p>
                                   <p className='mb-3 font-normal text-gray-100 dark:text-gray-400'>HTML, CSS, Tailwind,  JS</p>
                                   <a href="#" class="inline-flex items-center hover:text-[#8BDB81] p-2">
                                       <FaCodeBranch size={20}/> <p className=''>Code</p>
                                   </a>
                               </div>
                           </div>     
                                              </div>
</AnimationOnScroll>

                   
                   <AnimationOnScroll initiallyVisible={true} animateIn="animate__fadeInLeft">
                   <div className="">
                              
                              <div class="max-w-sm bg-[#121212] rounded-lg border border-gray-300 shadow-md dark:bg-gray-800 dark:border-gray-700">
                               <a href="#">
                                   <img class="rounded-t-lg" src={AstraPayImg} alt=""/>
                               </a>
                               <div class="p-5">
                                   <a href="#">
                                       <h5 class="mb-2 text-2xl tracking-tight text-gray-100 dark:text-white">AstrapayNG Landing</h5>
                                   </a>
                                   <p class="mb-3 font-normal text-gray-100 dark:text-gray-400">Banking App platform</p>
                                   <p className=''>HTML, CSS, MaterializeCSS, Javascript</p>
                                   <a href="#" class="inline-flex items-center hover:text-[#8BDB81] p-3">
                                       <FaCodeBranch size={20}/> <p className=''>Code</p>
                                   </a>
                               </div>
                           </div>
                           
                                              </div>
</AnimationOnScroll>

             <AnimationOnScroll initiallyVisible={true} animateIn="animate__fadeInRight">
             <div className="">
                              
                              <div class="max-w-sm bg-[#121212] rounded-lg border border-gray-300 shadow-md dark:bg-gray-800 dark:border-gray-700">
                               <a href="#">
                                   <img class="rounded-t-lg" src={MealRecImg} alt=""/>
                               </a>
                               <div class="p-5">
                                   <a href="#">
                                       <h5 class="mb-2 text-2xl tracking-tight text-gray-100 dark:text-white">Meal Delivery</h5>
                                   </a>
                                   <p class="mb-3 font-normal text-gray-100 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                   <a href="#" class="inline-flex items-center hover:text-[#8BDB81] p-3">
                                       <FaCodeBranch size={20}/> <p className=''>Code</p></a>
                               </div>
                           </div>
                                              </div>
             </AnimationOnScroll >

              <AnimationOnScroll initiallyVisible={true} animateIn="animate__fadeInLeft">
              <div className="">
                              
                              <div class="max-w-sm bg-[#121212] rounded-lg border border-gray-300 shadow-md dark:bg-gray-800 dark:border-gray-700">
                               <a href="#">
                                   <img class="rounded-t-lg" src={AstraPayImg} alt=""/>
                               </a>
                               <div class="p-5">
                                   <a href="#">
                                       <h5 class="mb-2 text-2xl tracking-tight text-gray-100 dark:text-white">Marvel Search Engine</h5>
                                   </a>
                                   <p class="mb-3 font-normal text-gray-100 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                   <a href="#" class="inline-flex items-center hover:text-[#8BDB81] p-3">
                                       <FaCodeBranch size={20}/> <p className=''>Code</p></a>
                               </div>
                           </div>     
                                              </div>
                           
              </AnimationOnScroll>
                   <AnimationOnScroll initiallyVisible={true} animateIn="animate__fadeInRight">
                   <div className="">
                              
                              <div class="max-w-sm bg-[#121212] rounded-lg border border-gray-300 shadow-md dark:bg-gray-800 dark:border-gray-700">
                               <a href="#">
                                   <img class="rounded-t-lg" src={AstraPayImg} alt=""/>
                               </a>
                               <div class="p-5">
                                   <a href="#">
                                       <h5 class="mb-2 text-2xl tracking-tight text-gray-100 dark:text-white">Goal Setter App</h5>
                                   </a>
                                   <p class="mb-3 font-normal text-gray-100 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                   <a href="#" class="inline-flex items-center hover:text-[#8BDB81] p-3">
                                       <FaCodeBranch size={20}/> <p className=''>Code</p></a>
                               </div>
                           </div>        
                                              </div> 
                   </AnimationOnScroll>
                    
                    <AnimationOnScroll initiallyVisible={true} animateIn="animate__fadeInLeft">
                    <div className="">
                              
                              <div class="max-w-sm bg-[#121212] rounded-lg border border-gray-300 shadow-md dark:bg-gray-800 dark:border-gray-700">
                               <a href="#">
                                   <img class="rounded-t-lg" src={AstraPayImg} alt=""/>
                               </a>
                               <div class="p-5">
                                   <a href="#">
                                       <h5 class="mb-2 text-2xl tracking-tight text-gray-100 dark:text-white">Marvel Search Engine</h5>
                                   </a>
                                   <p class="mb-3 font-normal text-gray-100 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                   {/* <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-gray-100 rounded-lg border-gray-300 border hover:bg-[#371B58]  ">
                                       Code
                                       <AiOutlineArrowRight/>
                                   </a> */}
                                    <a href="#" class="inline-flex items-center hover:text-[#8BDB81] p-3">
                                       <FaCodeBranch size={20}/> <p className=''>Code</p></a>
                               </div>
                           </div>
                           
                           
                                             
                                              </div>
                    </AnimationOnScroll>
                           
                
               </div>
           </div>
           </div> 
    </div>
  )
}

export default Projects
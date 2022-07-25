import React from 'react'
import "animate.css/animate.min.css"; 
import { AnimationOnScroll } from 'react-animation-on-scroll';

function About() {
  return (
    <div name='about' className="w-full h-screen bg-[#121212] text-gray-100">
<div className="flex flex-col justify-center items-center w-full h-full">
    <div className=" max-w-[1000px] w-full grid grid-cols-2 gap-8">
        <div className="sm:text-right pb-8 pl-4">
          <p className ='text-4xl font-bold inline border-b-4 border-bg-[#764AF1]'>About</p>
        </div>
        <div className="">

        </div>
        </div>
        
    
    <div className=" max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
    <AnimationOnScroll animateIn="animate__fadeInLeft">
            <div className="sm:text-right text-4xl font-bold">
                <p>Software Developer building things for the web </p>
            </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInRight">
            <div className="">
                <p>Focused on building software products with great user experience building interfaces that are thoughful, intuitive and generally accessible.
 . I have with experience in working with both front-end and back-end JavaScript frameworks and libraries for personal projects, client-facing products, and teams with fast development cycles.</p>
            </div>
            </AnimationOnScroll>
            
    </div>


</div>
    </div>
  )
}

export default About
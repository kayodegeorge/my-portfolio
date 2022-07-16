import React from 'react'

function About() {
  return (
    <div name='about' className="w-full h-screen bg-[#121212] text-gray-100">
<div className="flex flex-col justify-center items-center w-full h-full">
    <div className=" max-w-[1000px] w-full grid grid-cols-2 gap-8">
        <div className="sm:text-right pb-8 pl-4">
          <p className='text-4xl font-bold inline border-b-4 border-gray-300'>About</p>
        </div>
        <div className="">

        </div>
        </div>
        <div className=" max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
                <p>Hi, I'm Kayode George and I'm a Front-End Web Developer. </p>
            </div>
            <div className="">
                <p>Building products for the web, interfaces that are thoughful, intuitive and generally accessible.
scalable frontend products with great user experiences.</p>
            </div>
    </div>
</div>
    </div>
  )
}

export default About
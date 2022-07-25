import React from 'react'

function Contact() {
  return (
    <div name='contact' className='w-full h-screen bg-[#121212] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/02f3b025-3635-4842-8952-bfc28422fcd0" className='flex flex-col max-w-[600px] w-full'>
            <div className="pb-8   ">
                <p className='text-4xl font-bold inline border-b-4 border-gr text-gray-100'>Contact</p>
                <p className='text-gray-300 py-4'>Have an idea or a project?</p>
            </div>
            <input  className='bg-gray-300 p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-gray-300' type="email" placeholder='Email' name='email' />
            <textarea className='bg-gray-300 p-2' placeholder='Message' name="message" rows="10"></textarea>
            <button className='text-white border-2 hover:bg-[#8BDB81] hover:border-[#8BDB81] px-4 py-3 my-8 m-auto flex items-center'>Let's collaborate!</button>
        </form>
    </div>
  )
}

export default Contact
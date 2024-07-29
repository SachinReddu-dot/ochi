import { motion } from 'framer-motion'
import React from 'react'

function Landingpage() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textsturcture mt-48 px-20'>
        <div className='masker font-["Century_Gothic"] '>
          <h1 className='uppercase text-[6vw] leading-[6vw] font-bold'>WE CREATE</h1>
        </div>
        <div className='masker font-["Century_Gothic"] w-fit items-center flex mt-2 mb-2'>
          <motion.div 
          initial={{width:0}} 
          animate={{width: "9vw"}} 
          transition={{ease: [0.68, -0.6, 0.32, 1.6], duration: 1}} 
          className='w-[9vw] h-[6vw] rounded-lg'><img className='bg-center bg-cover' src="src\Components\luffy2.jpeg" alt="" /></motion.div>
          <h1 className='uppercase  text-[6vw] leading-[6vw] font-semibold ml-2'>eye opening</h1>
        </div>
        <div className='masker font-["Century_Gothic"] '>
          <h1 className='uppercase text-[6vw] leading-[6vw] font-bold'>animations</h1>
        </div>
      </div>
      <div className='border-t-[2px] capitalize border-zinc-700 mt-20 flex justify-between items-center py-5 px-20'>
        {["For public and private companies", "from the firt pitch to IPO"].map((item, index) => (
          <p className='text-md font-light tracking-tight leading-none'>{item}</p>
          ))}
        <div className='start capitalize flex items-center gap-5 cursor-pointer'>
          <div className='px-5 py-2 border-[2px] uppercase border-zinc-700 rounded-full font-light text-sm tracking-tight'>start the project</div>
          <div className='w-10 h-10 border-[2px] border-zinc-700 rounded-full flex items-center justify-center'>
            <span className='rotate-[45deg]'>
              ?
            </span>
          </div>
        </div>    
      </div>
    </div>
  )
}

export default Landingpage
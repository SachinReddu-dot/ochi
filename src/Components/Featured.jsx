import { easeIn, motion,useAnimation } from 'framer-motion'
import React, { useState } from 'react'
import { Power4 } from 'gsap';

function Featured() {

    const cards = [useAnimation(), useAnimation()];
    
    const handlehover = (index) => {
        cards[index].start({y: "0"})
    }

    const handlehoverend = (index) => {
        cards[index].start({y: "100%"})
    }

    return (
    <div className='w-full py-20 '>
        <div className='w-full px-20 border-b-[2px] pb-20 border-zinc-700'>
            <h1 className='font-["Century_Gothic"] font-semibold text-4xl'>Featured Projects</h1>
        </div>
        <div className='h-10 w-full ml-10 flex gap-3 items-center mt-10'>
                <div className='rounded-full h-3 w-3 bg-zinc-100 ml-10'></div>
                <div className='font-semibold'>FYDE</div>
                <div className='rounded-full h-3 w-3  bg-zinc-100 ml-[520px]'></div>
                <div className='font-semibold'>VISCE</div>
        </div>
        <div className='px-20'>
            <div className='cards w-full flex gap-10'>
                <motion.div 
                onHoverStart={()=>handlehover(0)} 
                onHoverEnd={()=>handlehoverend(0)}
                className='cardconatiner relative w-1/2 h-[75vh]'>
                    <h1 className='z-10 text-7xl flex overflow-hidden font-semibold text-[#CDEA68] absolute leading-none right-0 translate-x-1/2 top-1/2 -translate-y-1/2'>
                        {"FYDE".split('').map((item, index)=>(
                        <motion.span 
                        initial={{y: "100%"}}
                        animate={cards[0]}
                        transition={{ease:[0.22, 1, 0.36, 1], delay: index*0.01}}
                        className='inline-block'>{item}</motion.span>
                        ))}
                    </h1>
                    <div className='card w-full rounded-xl h-full overflow-hidden'>
                        <img className='h-full w-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    </div>
                </motion.div>
                <motion.div onHoverStart={()=>handlehover(1)} onHoverEnd={()=>handlehoverend(1)} className='cardconatiner  w-1/2 h-[75vh] relative'>
                    <h1 className='font-semibold text-7xl flex overflow-hidden text-[#CDEA68]  absolute leading-none -left-8 -translate-x-1/2 top-1/2 -translate-y-1/2'>
                        {"VISE".split('').map((item, index)=>(
                        <motion.span 
                        initial={{y: "100%"}}
                        animate={cards[1]}
                        transition={{ease:[0.22, 1, 0.36, 1], delay: index*0.01}}
                        className='inline-block'>{item}</motion.span>
                        ))}
                    </h1>
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                        <img className='h-full w-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                    </div>
                </motion.div>
            </div>
        </div>

    </div>
  )
}

export default Featured
import React, { useEffect, useState } from 'react'

function Eyes() {

  const [rotate, setRotate] = useState(0);  
  
  useEffect(()=>{
    window.addEventListener("mousemove", (e)=>{
        let mousex = e.clientX;
        let mousey = e.clientY;

        let deltax = mousex - window.innerWidth/2;
        let deltay = mousey - window.innerHeight/2;

        var angle = Math.atan2(deltay, deltax) * (180/Math.PI);
        setRotate(angle-180);

    })
  })
  
  
    return (
    <div className='eyes w-full h-screen overflow-hidden '>
        <div data-scroll data-scroll-speed="-.7" className='relative w-full h-full bg-cover px-10 bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
            <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10'>
                <div className='w-48 h-48 rounded-full bg-zinc-100 flex justify-center items-center'>
                    <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line top-1/2 left-1/2 absolute -translate-x-[50%] -translate-y-[50%] w-full h-10 '>
                            <div className='w-5 h-5 rounded-full bg-zinc-100'></div>
                        </div>
                    </div>
                </div>
                <div className='w-48 h-48 rounded-full bg-zinc-100 flex justify-center items-center'>
                     <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line top-1/2 left-1/2 absolute -translate-x-[50%] -translate-y-[50%] w-full h-10 '>
                            <div className='w-5 h-5 rounded-full bg-zinc-100'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eyes
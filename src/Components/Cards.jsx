import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen flex items-center gap-5 px-16 bg-zinc-900'>
        <div className='cardconatiner relative w-1/2 h-[50vh]'>
            <div className=' w-full h-full bg-[#004D43] rounded-xl font-["Century_Gothic"] text-[#CDEA68] flex justify-center items-center font-bold text-6xl'>ochi
            </div>
            <button className='absolute left-7 bottom-7 py-1 px-4 border-[#6c7a36] border-[1px] rounded-full  text-[#6c7a36]'>&copy; 2022-2026</button>
        </div>
        <div className='cardconatiner w-1/2 flex gap-5 h-[50vh]'>
            <div className='relative w-1/2 h-full bg-green-950 rounded-xl'>
                <div className=' w-full h-full  text-[#CDEA68] flex justify-center items-center font-bold text-6xl'>
                    <img className='size-24' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                </div>
                <button className='absolute left-7 bottom-7 py-1 px-4 border-[#6c7a36] border-[1px] rounded-full  text-[#6c7a36]'>&copy; 2022-2026</button>   
            </div>
            <div className='relative w-1/2 h-full bg-green-950 rounded-xl'>
                <div className='flex justify-center items-center w-full h-full rounded-xl '>
                <img  src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                </div>
                <button className='absolute left-7 bottom-7 py-1 px-4 border-[#6c7a36] border-[1px] rounded-full  text-[#6c7a36]'>&copy; 2022-2026</button>
            </div>
        </div>
    </div>
  )
}

export default Cards
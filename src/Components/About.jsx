import React from 'react'

function About() {
  return (
    <>
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl'>
        <h1 className='font-["Century_Gothic"] text-black text-[40px] leading-10 '>
            Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people
        </h1>
        <div className='mt-20 w-full flex gap-5 border-zinc-400  border-t-[1px] border-b-[1px] p-0'>
          <div className='w-1/2'>
          <h1 className='text-black font-bold text-4xl mt-6'>Our Approach:</h1>
              <button className='uppercase flex font-semibold mt-5 items-center gap-10 px-10 py-3 rounded-full bg-black '>
                  read more
                  <div className='w-2 h-2 rounded-full bg-zinc-100 '></div>
              </button>
          </div>
          <div className='mt-20 mb-20 w-1/2 h-[100vh] bg-[url("src/Components/zoro.jpeg")] bg-center bg-cover rounded-2xl'>
          </div>
        </div>
    </div>
    </>
  )
}

export default About
import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='absolute w-screen aspect-video text-white bg-gradient-to-r from-black md:mt-0'>
      <h1 className='md:mx-16 mx-8 md:w-full md:mt-72 mt-[170px] font-bold md:text-4xl text-2xl'>{title}</h1>
      <p className='hidden md:inline-block md:my-4 md:mx-16 mx-8 md:w-1/3 font-semibold'>{overview}</p>
      
      <div className='flex md:mx-16 mx-8'>
        <button className='md:mr-2 md:p-4 md:px-6 p-2 font-bold text-black bg-white border border-black rounded-lg hover:opacity-80'>▶ Play</button>
        <button className='md:p-4 md:px-6 p-2 font-bold text-white bg-gray-400 border border-black rounded-lg hover:opacity-80'>ℹ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className=' absolute w-screen aspect-video text-white bg-gradient-to-r from-black'>
      <h1 className='my-4 mx-16 mt-72 font-bold text-4xl'>{title}</h1>
      <p className='my-4 mx-16 w-1/3 font-semibold'>{overview}</p>
      
      <div className='flex my-4 mx-16'>
        <button className='mr-2 p-4 px-6 font-bold text-black bg-white border border-black rounded-lg hover:opacity-80'>▶ Play</button>
        <button className='p-4 px-6 font-bold text-white bg-gray-400 border border-black rounded-lg hover:opacity-80'>ℹ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
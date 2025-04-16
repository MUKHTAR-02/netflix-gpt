import React from 'react'
import useTrailerVideo from '../hooks/useTrailerVideo';
import { useSelector } from 'react-redux';

const VideoBackground = ({movieId}) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useTrailerVideo(movieId);
  
  return (
    <div className='w-screen'>
      <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/"+trailerVideo?.key+'?autoplay=1&mute=1'} title="YouTube video player" allow="autoplay" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackground
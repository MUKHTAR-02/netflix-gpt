import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({posterPath, movieTitle}) => {
  if(!posterPath) return null;
  return (
    <div className='w-32 md:w-40 pr-4'>
      <img alt={movieTitle} 
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  )
}

export default MovieCard;
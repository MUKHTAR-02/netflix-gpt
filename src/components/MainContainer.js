import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.topRatedMovies);
    if(!movies) return <h1>No movies :/</h1>;
    const mainMovie = movies[0];
    // console.log("Main movie = " +mainMovie);
    
    const {original_title, overview, id} = mainMovie;
  return (
    <div className='bg-black'>
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer;
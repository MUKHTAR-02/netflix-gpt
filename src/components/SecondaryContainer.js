import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className='bg-black'>
      <div className='-mt-44 pl-12 relative z-20'>
        {/* 
        MovieList- Now Playing, Popular, Trending, Horror
          MovieCard * n
      */}

        <MovieList Category={"Upcoming Movies"} movies={movies.upcomingMovies} />
        <MovieList Category={"Popular Movies"} movies={movies.popularMovies} />
        <MovieList Category={"Top Rated Movies"} movies={movies.topRatedMovies} />
        <MovieList Category={"Top Tv Shows"} movies={movies.tvShows} />

      </div>
    </div>
  )
}

export default SecondaryContainer;
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

        <MovieList category={"Upcoming Movies"} movies={movies.upcomingMovies} />
        <MovieList category={"Popular Movies"} movies={movies.popularMovies} />
        <MovieList category={"Top Rated Movies"} movies={movies.topRatedMovies} />
        <MovieList category={"Top Tv Shows"} movies={movies.tvShows} />

      </div>
    </div>
  )
}

export default SecondaryContainer;
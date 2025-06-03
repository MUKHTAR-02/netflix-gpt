import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className='bg-black'> 
      <div className='mt-0 md:-mt-44 md:pl-12 pl-2 relative z-20'>
        {/* 
        MovieList- Now Playing, Popular, Trending, Horror
          MovieCard * n
      */}

        {movies && <MovieList category={"Upcoming Movies"} movies={movies.upcomingMovies} />}
        {movies && <MovieList category={"Popular Movies"} movies={movies.popularMovies} />}
        {movies && <MovieList category={"Top Rated Movies"} movies={movies.topRatedMovies} />}
        {movies && <MovieList category={"Top Tv Shows"} movies={movies.tvShows} />}

      </div>
    </div>
  )
}

export default SecondaryContainer;
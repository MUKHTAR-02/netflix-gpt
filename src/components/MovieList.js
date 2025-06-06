import MovieCard from './MovieCard';

const MovieList = ({ category, movies }) => {
  return (
    <div className='px-6'>
      <h1 className='text-xl md:text-2xl text-white font-bold py-3'> {category} </h1>
      <div className='flex overflow-x-scroll no-scrollbar decoration-black'>
        <div className='flex'>
          {movies && Array.isArray(movies) && movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                posterPath={movie?.poster_path}
                movieTitle={movie?.title}
              />
            ))
          ) : (
            <h1 className="text-white">No movies 😕</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

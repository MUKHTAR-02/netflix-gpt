import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GPTMovieSuggestions = () => {
  const {movieName, movieData} = useSelector((store) => store.gpt);
  if(!movieName) return null;

  return (
    <div className='m-12 bg-black text-white opacity-75'>
      {movieName.map((movie, index) => <MovieList key={index} category={movie} movies={movieData[index]} />)}
      
    </div>
  )
}

export default GPTMovieSuggestions;
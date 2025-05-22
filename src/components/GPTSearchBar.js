import { useDispatch, useSelector } from 'react-redux';
import lang from '../utils/languageConstants';
import { useRef } from 'react';
import { getMovieRecommendations } from '../utils/cohere';
import { API_OPTIONS } from '../utils/constants';
import { addGPTMovieRecommendation } from '../utils/gptSlice';

const GPTSearchBar = () => {
    const searchText = useRef(null);
    const langKey = useSelector((store) => store.config.lang);
    const dispatch = useDispatch();

    // Search movie in TMDB
    const searchMovieTMDB = async (movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        return json.results;
    }

    const handleGptSearchClick = async () => {
        const query = searchText.current.value;
        if (!query) return;

        try {
            const response = await getMovieRecommendations(query);
            const splitedMovies = response.split(",");
            console.log(splitedMovies);
            const promiseArray = splitedMovies.map((movie) => searchMovieTMDB(movie));
            const data = await Promise.all(promiseArray);
            console.log(data);
            dispatch(addGPTMovieRecommendation({ movieName: splitedMovies, movieData: data }));
            
        } catch (error) {
            console.error("Error fetching from Cohere:", error);
        }
    };

    return (
        <div className='pt-[10%] flex flex-col items-center'>
            <form className='p-4 bg-black rounded-lg shadow-2xl shadow-red-700 grid grid-cols-12 w-full max-w-3xl'
                onSubmit={(e) => e.preventDefault()}>
                <input
                    type='text'
                    className='p-4 m-4 bg-white text-black col-span-9 rounded-lg'
                    placeholder={lang[langKey].gptSearchPlaceholder}
                    ref={searchText}
                />
                <button
                    className='bg-red-700 p-4 m-4 col-span-3 rounded-lg'
                    onClick={handleGptSearchClick}>
                    {lang[langKey].search}
                </button>
            </form>
        </div>
    );
};

export default GPTSearchBar;

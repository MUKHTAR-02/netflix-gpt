import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../utils/movieSlice';
import { useDispatch, useSelector } from 'react-redux';

const useTrailerVideo = ( movieId ) => {
    const dispatch = useDispatch();
    const trailerVideo = useSelector((store) => store.movies.trailerVideo);

    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS);

        const json = await data?.json();

        const filterVideos = json.results.filter((movie) => movie.name === "Official Trailer");
        const trailer = filterVideos.length ? filterVideos[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));

    }

    useEffect(() => {
        !trailerVideo && getMovieVideos();
    }, []);
}

export default useTrailerVideo
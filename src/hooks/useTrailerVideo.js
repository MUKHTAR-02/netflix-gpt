import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../utils/movieSlice';
import { useDispatch } from 'react-redux';

const useTrailerVideo = ( movieId ) => {
    const dispatch = useDispatch();

    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS);
        
        // if (!data.ok) {
        //     throw new Error('Failed to fetch trailer videos');
        // }

        const json = await data?.json();

        const filterVideos = json.results.filter((movie) => movie.name === "Official Trailer");
        const trailer = filterVideos.length ? filterVideos[0] : json.results[0];
        // console.log(trailer);
        dispatch(addTrailerVideo(trailer));

    }

    useEffect(() => {
        getMovieVideos();
    }, []);
}

export default useTrailerVideo
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../utils/constants';
import { addPopularMovies, addTopRatedMovies, addTvShows, addUpcomingMovies } from "../utils/movieSlice";

const useAllMoviesData = () => {

    const dispatch = useDispatch();
    const { upcomingMovies, popularMovies, topRatedMovies, tvShows } = useSelector((store) => store.movies);

    const fetchAllMoviesData = async () => {
        try {
            const urls = [
                { url: 'https://api.themoviedb.org/3/movie/upcoming?page=1', action: addUpcomingMovies },
                { url: 'https://api.themoviedb.org/3/movie/popular?page=1', action: addPopularMovies },
                { url: 'https://api.themoviedb.org/3/movie/top_rated?page=1', action: addTopRatedMovies },
                { url: 'https://api.themoviedb.org/3/trending/tv/day?language=en-US', action: addTvShows },
            ]

            const responses = await Promise.all(urls.map(({ url }) => fetch(url, API_OPTIONS)));
            const jsonData = await Promise.all(responses.map((res) => res.json()));

            jsonData.forEach((data, index) => {
                const { action } = urls[index];
                if (data?.results?.length) {
                    dispatch(action(data.results));
                }
            });
        } catch (error) {
            console.error('Failed to fetch the movie data:', error);
        }

    };

    useEffect(() => {
    if (
      !upcomingMovies?.length ||
      !popularMovies?.length ||
      !topRatedMovies?.length ||
      !tvShows?.length
    ) {
      fetchAllMoviesData();
    }
  }, [upcomingMovies, popularMovies, topRatedMovies, tvShows]);

};

export default useAllMoviesData;
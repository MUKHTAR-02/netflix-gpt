import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants";
import { addTvShows } from "../utils/movieSlice";

const useTvShows = () => {
    const dispatch = useDispatch();
    const tvShows = useSelector((store) => store.movies.tvShows);

    const getTvShows = async () => {
        const data = await fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', API_OPTIONS);
        const json = await data.json();
        // console.log("Tv shows = " ,json.results);
        dispatch(addTvShows(json.results));
    };

    useEffect(() => {
        !tvShows && getTvShows();
    }, []);
}

export default useTvShows;
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useTvShows from "../hooks/useTvShows";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";


const Browse = () => {
  useUpcomingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useTvShows();

  const gptSearchView = useSelector(store => store.gpt.gptSearchView);

  return (
    <div> 
      <Header />
      {gptSearchView ? <GPTSearch /> : <>
        <MainContainer />
        <SecondaryContainer />
      </>}


    </div>
  )
}

export default Browse;
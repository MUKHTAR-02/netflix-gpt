import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";
import useAllMoviesData from "../hooks/useAllMoviesData";


const Browse = () => {

  useAllMoviesData();

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
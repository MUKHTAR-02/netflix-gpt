import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <div className="">
        <Header />
        <MainContainer/>
        <SecondaryContainer/>
      </div>

      <div >
        <h1 className="font-bold">
          Browse page
        </h1>
      </div>
    </div>
  )
}

export default Browse;
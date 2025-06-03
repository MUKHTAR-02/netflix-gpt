import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { SUPPORTED_LANGUAGES, NETFLIX_LOGO } from "../utils/constants";
import { falseGptSearchView, toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {

  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();

  // subscribing to the store
  const user = useSelector(store => store.user);
 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is Signed In
        const { uid, email, displayName, fullName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, fullName: fullName, photoURL: photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      unsubscribe();
    }
  }, []);

  const handleGPTSearchClick = () => {
    dispatch(toggleGptSearchView());
  }

  const handleMainContainerClick = () => {
    dispatch(falseGptSearchView());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  const handleSignOutButton = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      setErrorMsg(error);
    });
  }

  const viewGptButton = useSelector((store) => store.gpt.gptSearchView);

  return (
    <div className="w-full px-8 py-2 bg-black z-10 flex flex-col justify-between md:bg-transparent md:flex-row md:absolute">
      <button onClick={handleMainContainerClick}>
        <img src={NETFLIX_LOGO}
          alt="Netflix logo" className="w-48 bg-opacity-100 mx-auto"
      />
      </button>

      {user &&
        <div className="flex justify-between mt-4 text-lg md:text-base">
          {viewGptButton && <select onChange={handleLanguageChange} className="border border-black rounded-lg md:mr-2 md:px-2 h-12 md:font-bold font-light md:text-base text-xs bg-gray-700 text-white ">
            {SUPPORTED_LANGUAGES.map((lang) => <option  key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          </select>}

          {!viewGptButton && 
            <button className="border border-black rounded-lg text-white px-2 h-12 bg-purple-700 font-bold" onClick={handleGPTSearchClick}>GPT Search</button>
          }

          <img alt="userIcon" className="w-10 h-10 mr-4 ml-4" src={user?.photoURL} />

          <h3 className="font-bold text-red-700">
            {errorMsg}
          </h3>

          <button onClick={handleSignOutButton} className="border border-black rounded-lg text-white px-2 h-12 bg-red-700 font-bold">
            Sign Out
          </button>
        </div>}

    </div>
  )
}

export default Header;
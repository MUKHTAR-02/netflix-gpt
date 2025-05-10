import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO } from "../utils/constants";

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


  const handleSignOutButton = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      setErrorMsg(error);
    });
  }

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img src={NETFLIX_LOGO}
        alt="Netflix logo" className="w-48 bg-opacity-100"
      />

      {user &&
        <div className="flex justify-between mt-4">
          <img alt="userIcon" className="w-10 h-10 mr-4" src={user?.photoURL} />

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
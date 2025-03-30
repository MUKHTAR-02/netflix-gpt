import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {

  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState(null);

  // subscribing to the store
  const user = useSelector(store => store.user);

  const handleSignOutButton = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      setErrorMsg(error);
    });
  }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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
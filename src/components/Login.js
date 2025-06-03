import { useState, useRef } from "react";
import Header from "./Header";
import { validateDataSignIn, validateDataSignUp } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { NETFLIX_BG, USER_AVATAR } from "../utils/constants";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);
    const dispatch = useDispatch();

    const handleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const fullName = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleSignInButton = () => {
        const errorMsg = isSignInForm ? validateDataSignIn(email.current.value, password.current.value) : validateDataSignUp(fullName.current.value, email.current.value, password.current.value)
        setErrorMsg(errorMsg);

        // Authentication logic
        if (errorMsg !== null) return;
        if (!isSignInForm) {
            // Sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    // console.log("user = " +user);

                    updateProfile(user, {
                        displayName: fullName.current.value, photoURL: USER_AVATAR
                    }).then(() => {
                        const { uid, email, displayName, fullName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, fullName: fullName, photoURL: photoURL }));
                    }).catch((error) => {
                        setErrorMsg(error.message);
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode + " - " + errorMessage);
                });
        } else {
            // Sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {})
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode + " - " + errorMessage);
                });

        }
    }

    return (
        <div>
            <Header />
            <div>  {/* fragement */}
                <img src={NETFLIX_BG}
                    alt="Netflix bg img" className="absolute w-full md:h-full h-full object-cover" />
            </div>

            <>
                <form onSubmit={(e) => e.preventDefault()} className="absolute md:w-1/3 w-2/3 rounded-lg mx-auto right-0 left-0 my-40 p-12 bg-black bg-opacity-70 items-center">
                    <div className="flex flex-col text-white">
                        <h1 className="my-3 font-bold text-2xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

                        {!isSignInForm &&
                            <input ref={fullName} type="text" placeholder="Enter Full Name" className="p-4 my-2 border border-white rounded-sm bg-gray-400 bg-opacity-10" />}

                        <input ref={email} type="email" placeholder="Enter Email" className="p-4 my-2 border border-white rounded-sm bg-gray-400 bg-opacity-10" />

                        <input ref={password} type="password" placeholder="Enter Password" className="p-4 my-2 border border-white rounded-sm bg-gray-400 bg-opacity-10" />

                        <p className="text-red-700 font-bold p-2">
                            {errorMsg}
                        </p>

                        <button onClick={handleSignInButton} className="p-4 my-4 rounded-sm bg-red-700">{isSignInForm ? "Sign In" : "Sign Up"}
                        </button>

                        <p>
                            <span className="pl-2">{isSignInForm ? "New to Netflix?" : "Already registered?"}</span> <span className="font-bold cursor-pointer hover:underline" onClick={handleSignInForm}> {isSignInForm ? "Sign Up" : "Sign In"}</span>
                        </p>
                    </div>
                </form>
            </>

        </div>
    )
}

export default Login;
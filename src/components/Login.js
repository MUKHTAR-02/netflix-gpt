import { useState, useRef } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const handleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const email = useRef(null);
    const password = useRef(null);

    const handleSignInButton = () => {
        const msg = validateData(email.current.value, password.current.value);
        console.log(msg);
    }

    return (
        <div>
            <Header />
            <>  {/* fragement */}
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web/IN-en-20250324-TRIFECTA-perspective_d7c906ec-0531-47de-8ece-470d5061c88a_small.jpg"
                    alt="Netflix bg img" className="absolute" />
            </>

            <>
                <form onSubmit={(e) => e.preventDefault()} className="absolute w-1/3 rounded-lg mx-auto right-0 left-0 my-40 p-12 bg-black bg-opacity-70 items-center">
                    <div className="flex flex-col text-white">
                        <h1 className="my-3 font-bold text-2xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

                        {!isSignInForm && 
                            <input type="text" placeholder="Enter Full Name" className="p-4 my-2 border border-white rounded-sm bg-gray-400 bg-opacity-10"/>}

                        <input ref={email} type="email" placeholder="Enter Email" className="p-4 my-2 border border-white rounded-sm bg-gray-400 bg-opacity-10"/>

                        <input ref={password} type="password" placeholder="Enter Password" className="p-4 my-2 border border-white rounded-sm bg-gray-400 bg-opacity-10"/>

                        <button onClick={handleSignInButton} className="p-4 my-4 rounded-sm bg-red-700">{isSignInForm ? "Sign In" : "Sign Up"}</button>

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
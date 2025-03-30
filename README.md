# Netflix GPT

- Create react app
- Configured tailwindCSS
- Header
- Routing of app
- Login form
- Sign up form
- Form validation (via following the Regex for email and password)
- UseRef hook
- Firebase Setup (Deployment)
    - Install firebase CLI - `npm install -g firebase-tools`
    - Firebase login - `firebase login`
    - Initialize firebase - `firebase init`, then select hosting 
    - Deploy command - `firebase deploy`
- Authenticate user account (Login / SignUp)
- Created Redux store with userSlice 
- Implemented Sign Out 
- Update Profile 
- Fetch Movies from TMDB  

# Notes
- Use library `formik` if making big form in React 

# Features 

- Login / Signup page
    - Sign in / Sign up form
    - Redirect to Browse page

- Browse page (After Authentication)
    - Header
    - Main movie 
        - Trailer in BG
        - Title and Description 
        - Movie Suggestions
            - Movie list * N

- Netflix GPT
    - Search Bar
    - Movie Suggestions

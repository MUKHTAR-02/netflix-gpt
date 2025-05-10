# Netflix GPT

- Create react app
- Configured tailwindCSS
- Header
- Routing of app
- Login form
- Sign up form
- Form validation (via following the Regex for email and password)
- UseRef hook
- Firebase Setup (Deployment):
    - Install firebase CLI - `npm install -g firebase-tools`
    - Firebase login - `firebase login`
    - Initialize firebase - `firebase init`, then select hosting 
    - Deploy command - `firebase deploy`
- Authenticate user account (Login / SignUp)
- Created Redux store with userSlice 
- Implemented Sign Out 
- Update Profile 
- BugFix: Only authenticated user can access browse page
- Unsubscribe to onAuthStateChanged callback 
- Added hard coded files into the constants
- TMDB (The Movie Database) Setup:
    - Login 
    - Register the app and details of it
    - Goto TMDB Docs (API Reference)
    - Selecet the API
    - Get the JS code 
- Created a custom hook for Now playing movies
- Created movieSlice 
- Update store with movie data 
- Planning for main and secondary container
- Fetch data for trailer video
- Update the store with trailer video data
- Embedded the Youtube video and make it autoplay by mute   
- Build secondary component
- Build movie list
- Build movie card 
- TMDB image CDN 
- Created custom hook (usePopularMovies, useTvShows) and fetched the following data from TMDB APIs
- 

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
import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        upcomingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        tvShows: null,
        trailerVideo: null,
    },
    reducers: {
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addTvShows: (state, action) => {
            state.tvShows = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        }
    }
})

export const {addUpcomingMovies, addPopularMovies, addTopRatedMovies, addTvShows, addTrailerVideo} = movieSlice.actions;
export default movieSlice.reducer;
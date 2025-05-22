import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        gptSearchView: false,
        movieName: null,
        movieData: null,
    },
    reducers: {
        falseGptSearchView: (state) => {
            state.gptSearchView = false;
        },
        toggleGptSearchView: (state) => {
            state.gptSearchView = !state.gptSearchView;
        },
        addGPTMovieRecommendation: (state, action) => {
            const {movieName, movieData} = action.payload;
            state.movieName = movieName;
            state.movieData = movieData;
        }
    }
});

export const {toggleGptSearchView, falseGptSearchView, addGPTMovieRecommendation} = gptSlice.actions;
export default gptSlice.reducer;

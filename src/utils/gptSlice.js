import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        gptSearchView: false,
    },
    reducers: {
        falseGptSearchView: (state) => {
            state.gptSearchView = false;
        },
        toggleGptSearchView: (state) => {
            state.gptSearchView = !state.gptSearchView;
        }
    }
});

export const {toggleGptSearchView, falseGptSearchView} = gptSlice.actions;
export default gptSlice.reducer;

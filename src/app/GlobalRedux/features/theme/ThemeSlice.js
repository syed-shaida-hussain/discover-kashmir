import { createSlice } from "@reduxjs/toolkit";
const isServer = typeof window === "undefined";

const initialState = {
    theme : !isServer && (localStorage.getItem("theme") ?? "light")
}
if(!isServer) {
}

const themeSlice = createSlice({
    name : "theme",
    initialState,
    reducers : {
        toggleTheme : (state) => {
            state.theme = state.theme === "light" ? "dark" : "light"
           !isServer && (localStorage.setItem("theme", state.theme))
        }
    }
});

export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;
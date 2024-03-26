import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isUserLoggedIn : localStorage.getItem("token") ? true : false
}

const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        loginUser : (state) => {
            state.isUserLoggedIn = true
        },
        logoutUser : (state) => {
            state.isUserLoggedIn = false
        }
    }
});

export const {loginUser , logoutUser} = userSlice.actions;
export default userSlice.reducer;
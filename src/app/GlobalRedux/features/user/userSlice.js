import { createSlice } from "@reduxjs/toolkit";
import { getCookie } from "cookies-next";

const initialState = {
    isUserLoggedIn : getCookie("token") ? true : false
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
"use client";

import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/theme/ThemeSlice";
import userReducer from "./features/user/userSlice";

export const store = configureStore({
    reducer : {
        theme : themeReducer,
        user : userReducer
    }
})
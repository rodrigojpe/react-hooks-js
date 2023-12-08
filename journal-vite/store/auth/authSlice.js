


import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
       status:'checking', //'checking', 'authenticated', 'not-authenticated'
       uid: null,
       email: null,
       displayName: null,
       photoURL: null,
       errorMessage: null,
    },
    reducers: {
        login: (state, {payload}) => {
            state.status ='authenticate';
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
            state.errorMessage = null;
        },
        logout: (state, {payload} ) => {
            state.status ='not-authenticate';
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = null;
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
        }
    }
})

export const { login,logout, checkingCredentials } = authSlice.actions;
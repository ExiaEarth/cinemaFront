import { createReducer } from '@reduxjs/toolkit';
import { loginUser, registerUser, logoutUser } from '../action/identificationAction';


const initialState = {
    isConnected: false,
    // token: null,
    errorMsg: null,
    pseudo:null,
    userId:null
};

const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(registerUser.fulfilled, (state, action) => {
            state.isConnected = true;
            // state.token = action.payload;       // payload -> response.data.token
            state.errorMsg = null;
            state.pseudo=action.payload.pseudo;
            state.userId=action.payload._id;
            
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.isConnected = true;
            // state.token = action.payload;
            state.errorMsg = null;
            state.pseudo=action.payload.pseudo;
            state.userId=action.payload._id;
            
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.errorMsg = 'Veuillez remplir toutes les casses';
            // console.log(action);
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.errorMsg = 'Données invalides !';
            // console.log(action);
        })
        .addCase(logoutUser, (state, action) => {
            state.isConnected = false;
            // state.token = null;
            state.errorMsg = null;
            state.pseudo=null;
            state.userId=null;
        });
});

export default authReducer;
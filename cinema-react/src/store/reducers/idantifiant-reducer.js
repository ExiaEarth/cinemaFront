import { createReducer } from '@reduxjs/toolkit';
import { loginUser, registerUser, logoutUser } from '../action/identificationAction';


const initialState = {
    isConnected: false,
    // token: null,
    errorMsg: null,
    pseudo:null,
    prenom:null,
    nom:null,
    password:null,
    email:null,
    userId:null,
    avatar:null,
    role:null
};

const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(registerUser.fulfilled, (state, action) => {
            state.isConnected = true;
            // state.token = action.payload;       // payload -> response.data.token
            state.errorMsg = null;
            state.pseudo=action.payload.pseudo;
            state.userId=action.payload._id;
            state.prenom=action.payload.prenom;
            state.nom=action.payload.nom;
            state.password=action.payload.password;
            state.email=action.payload.email;
            state.avatar=action.payload.avatar;
            state.role=action.payload.role;

            
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.isConnected = true;
            // state.token = action.payload;
            state.errorMsg = null;
            state.pseudo=action.payload.pseudo;
            state.userId=action.payload._id;
            state.prenom=action.payload.prenom;
            state.nom=action.payload.nom;
            state.password=action.payload.password;
            state.avatar=action.payload.avatar;
            state.email=action.payload.email;
            state.role=action.payload.role;


            
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
            state.prenom=null;
            state.nom=null;
            state.password=null;
            state.email=null;
            state.avatar=null;
            state.role=null;
        });
});

export default authReducer;
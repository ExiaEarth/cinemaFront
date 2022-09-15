import axios from "axios"
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

export const userRegister = createAsyncThunk('user/register',
    async (data, thunkAPI) => {

        // Requete AJAX vers le serveur Backend
        const response = await axios.post('http://localhost:8100/api/auth/register', data);
        return response.data;
    }
);

export const userLogin = createAsyncThunk('user/login',
    async (data, thunkAPI) => {
        const response = await axios.post('http://localhost:8100/api/auth/login', data);
        return response.data;
    }
);


export const logoutUser = createAction('user/logout');


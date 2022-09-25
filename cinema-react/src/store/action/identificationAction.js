import axios from "axios";
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

export const registerUser = createAsyncThunk('user/register',
    async (data, thunkAPI) => {

        // Requete AJAX vers le serveur Backend
        const response = await axios.post('http://localhost:8100/api/auth/register', data);
        return response.data;
    }
);

export const loginUser = createAsyncThunk('user/login',
    async (data, thunkAPI) => {
        const response = await axios.post('http://localhost:8100/api/auth/login', data);
        return response.data;
    }
);

export const Update = createAsyncThunk('user/update',
    async (data, thunkAPI) => {

        // Requete AJAX vers le serveur Backend
        const response = await axios.put('http://localhost:8100/api/auth/user/updated', data);
        return response.data;
    }
);



export const logoutUser = createAction('user/logout');


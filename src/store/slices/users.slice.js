import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';



export const UsersSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
         setUser: (state, action) => {
            return action.payload;
         },

    }
});

export const getUsersThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/users')
        .then((resp) => {
            console.log(resp?.data);
            dispatch(setUser(resp?.data));
        })
        .catch((error) => {
            console.log(error);
        }).finally(() => {
            dispatch(setIsLoading(false));
        })
    };

export const addUserThunk = (data) => (dispatch) => {
    dispatch(setIsLoading(true));
    axios.post('https://e-commerce-api-v2.academlo.tech/api/v1/users', data)
        .then(() => {
            dispatch(getUsersThunk());
        })
        .catch((error) => {
            console.log(error);
        }).finally(() => {
            dispatch(setIsLoading(false));
        })
    };

export const deleteUserThunk = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    axios.delete(`https://e-commerce-api-v2.academlo.tech/api/v1/users/${id}`)
        .then(() => {
            dispatch(getUsersThunk());
        })
        .catch((error) => {
            console.log(error);
        }).finally(() => {
            dispatch(setIsLoading(false));
        })
    };

export const updateUserThunk = (id, data) => (dispatch) => {
    dispatch(setIsLoading(true));
    axios.put(`https://e-commerce-api-v2.academlo.tech/api/v1/users/${id}`, data)
        .then(() => {
            dispatch(getUsersThunk());
        })
        .catch((error) => {
            console.log(error);
        }).finally(() => {
            dispatch(setIsLoading(false));
        })
    };

export const { setUser } = UsersSlice.actions;

export default UsersSlice.reducer;


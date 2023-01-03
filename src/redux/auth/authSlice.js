import { createSlice } from '@reduxjs/toolkit';
import {
  userLogIn,
  userLogOut,
  userSignIn,
  userGetCurrent,
} from './authOperations';
import Notiflix from 'notiflix';

const state = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isAuth: false,
  isLoading: false,
  isFormLoad: false,
};

export const auth = createSlice({
  name: 'auth',
  initialState: state,
  extraReducers: {
    [userSignIn.pending](state) {
      state.isFormLoad = true;
    },
    [userSignIn.fulfilled](state, action) {
      state.user.name = action.payload.user.name;
      state.user.email = action.payload.user.email;
      state.token = action.payload.token;
      state.isAuth = true;
      state.isFormLoad = false;
      Notiflix.Notify.success('This is your personal account');
    },
    [userSignIn.rejected](state) {
      Notiflix.Notify.failure('Error... You can not use this email');
      state.isFormLoad = false;
    },
    [userLogIn.pending](state) {
      state.isFormLoad = true;
    },
    [userLogIn.fulfilled](state, action) {
      state.user.name = action.payload.user.name;
      state.user.email = action.payload.user.email;
      state.token = action.payload.token;
      state.isAuth = true;
      state.isFormLoad = false;
      Notiflix.Notify.success('This is your personal account');
    },
    [userLogIn.rejected](state) {
      Notiflix.Notify.failure('Error... Wrong data...');
      state.isFormLoad = false;
    },
    [userLogOut.fulfilled](state) {
      state.user.name = null;
      state.user.email = null;
      state.token = null;
      state.isAuth = false;
      state.isFormLoad = false;
      Notiflix.Notify.success('Your logout is success');
    },
    [userGetCurrent.pending](state) {
      state.isLoading = true;
    },
    [userGetCurrent.fulfilled](state, action) {
      state.user = { ...action.payload };
      state.isLoading = false;
      state.isAuth = true;
    },
    [userGetCurrent.rejected](state) {
      state.isLoading = false;
    },
  },
});

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const userSignIn = createAsyncThunk(
  'user/signIn',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('users/signup', user);
      token.set(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const userLogIn = createAsyncThunk(
  'user/logIn',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('users/login', user);
      token.set(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const userLogOut = createAsyncThunk(
  'user/logOut',
  async (_, thunkAPI) => {
    try {
      await axios.post('users/logout');
      token.unset();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const userGetCurrent = createAsyncThunk(
  'user/getCurrent',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const userToken = state.auth.token;

    if (!userToken) {
      return thunkAPI.rejectWithValue();
    }

    token.set(userToken);

    try {
      const respose = await axios.get('/users/current');

      return respose.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

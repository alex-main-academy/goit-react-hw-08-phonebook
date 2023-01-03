import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const state = {
  contacts: {
    item: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

export const phoneBook = createSlice({
  name: 'addContact',
  initialState: state,
  reducers: {
    filterArray(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [addContact.pending]: handlePending,
    [fetchContacts.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.item.push(action.payload);
    },
    [fetchContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.item = action.payload;
    },
    [deleteContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      const index = state.contacts.item.findIndex(
        task => task.id === action.payload.id
      );
      state.contacts.item.splice(index, 1);
    },
    [addContact.rejected]: handleRejected,
    [fetchContacts.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
  },
});

export const { filterArray } = phoneBook.actions;

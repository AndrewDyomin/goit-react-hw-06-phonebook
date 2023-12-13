import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    addContact(state, action) {
      state.contacts = action.payload;
    },
  },
});

export const contactReducer = slice.reducer;
export const { addContact } = slice.actions;
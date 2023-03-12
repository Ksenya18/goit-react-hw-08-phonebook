import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContacts, getContacts } from './operation';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder

      .addCase(getContacts.pending, pendingHandler)
      .addCase(getContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(getContacts.rejected, rejectHandler)

      .addCase(addContact.pending, pendingHandler)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = [...state.items, action.payload];
      })
      .addCase(addContact.rejected, rejectHandler)

      .addCase(deleteContacts.pending, pendingHandler)
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(item => item.id !== action.payload.id);
        console.log(action.payload);
      })
      .addCase(deleteContacts.rejected, rejectHandler);
  },
});

export function pendingHandler(state) {
  state.isLoading = true;
  state.error = null;
}
export function rejectHandler(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}

export const contactsReducer = contactsSlice.reducer;

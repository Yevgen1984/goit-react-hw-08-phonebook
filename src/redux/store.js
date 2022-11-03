import { configureStore } from '@reduxjs/toolkit';
import {contactsReducer} from './contacts/contactsSlice';
import { filterReducer } from './contacts/contactsFilterSlice';


export const store = configureStore({
  reducer: {
  filter: filterReducer,
  contacts: contactsReducer,
  },
});

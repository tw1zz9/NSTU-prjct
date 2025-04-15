import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import sidePanelReducer from './slices/sidePanelSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    sidePanel: sidePanelReducer,
  },
});

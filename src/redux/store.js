import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import sidePanelReducer from './slices/sidePanelSlice';
import coursesReducer from './slices/coursesSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    sidePanel: sidePanelReducer,
    courses: coursesReducer,
  },
});

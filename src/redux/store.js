import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import sidePanelReducer from './slices/sidePanelSlice';
import coursesReducer from './slices/coursesSlice';
import applicationsReducer from './slices/applicationsSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    sidePanel: sidePanelReducer,
    courses: coursesReducer,
    applications: applicationsReducer,
  },
});

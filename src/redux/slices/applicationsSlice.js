import { createSlice } from '@reduxjs/toolkit';

const applicationsSlice = createSlice({
  name: 'applications',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    acceptApplication: (state, action) => {
      const application = state.items.find((app) => app.id === action.payload);
      if (application) {
        application.status = 'accepted';
      }
    },
    rejectApplication: (state, action) => {
      const application = state.items.find((app) => app.id === action.payload);
      if (application) {
        application.status = 'rejected';
      }
    },
    addApplication: (state, action) => {
      state.items.push({
        ...action.payload,
        status: 'pending',
        createdAt: new Date().toISOString(),
      });
    },
  },
});

export const { acceptApplication, rejectApplication, addApplication } = applicationsSlice.actions;

export default applicationsSlice.reducer;

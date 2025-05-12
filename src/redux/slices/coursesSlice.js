import { createSlice } from '@reduxjs/toolkit';

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    activeCourses: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addCourse: (state, action) => {
      state.activeCourses.push(action.payload);
    },
    removeCourse: (state, action) => {
      state.activeCourses = state.activeCourses.filter((course) => course.id !== action.payload);
    },
    updateCourse: (state, action) => {
      const index = state.activeCourses.findIndex((course) => course.id === action.payload.id);
      if (index !== -1) {
        state.activeCourses[index] = action.payload;
      }
    },
    setCourses: (state, action) => {
      state.activeCourses = action.payload;
    },
  },
});

export const { addCourse, removeCourse, updateCourse, setCourses } = coursesSlice.actions;
export default coursesSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  role: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginTeacher: (state) => {
      state.role = 'teacher';
      state.isAuthenticated = true;
    },
    loginStudent: (state) => {
      state.role = 'student';
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.role = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginTeacher, loginStudent, logout } = userSlice.actions;
export default userSlice.reducer;

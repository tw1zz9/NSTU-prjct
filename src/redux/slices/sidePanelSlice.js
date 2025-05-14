import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: true,
};

const sidePanelSlice = createSlice({
  name: 'sidePanel',
  initialState,
  reducers: {
    toggleSidePanel: (state) => {
      state.isOpen = !state.isOpen;
    },
    setSidePanel: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { toggleSidePanel, setSidePanel } = sidePanelSlice.actions;
export default sidePanelSlice.reducer;

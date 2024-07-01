import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songModalInfo: undefined,
  songModalOpen: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSongModalInfo: (state, actions) => {
      state.songModalInfo = actions.payload;
    },
    openSongModal: (state) => {
      state.songModalOpen = true;
    },
    closeSongModal: (state) => {
      state.songModalOpen = false;
    },
  },
});

export const { setSongModalInfo, openSongModal, closeSongModal } =
  appSlice.actions;

export default appSlice.reducer;

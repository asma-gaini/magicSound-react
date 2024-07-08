import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songModalInfo: undefined,
  showModalSong: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSongModalInfo: (state, actions) => {
      state.songModalInfo = actions.payload;
    },
    openModalSong: (state) => {
      state.showModalSong = true;
    },
    closeModalSong: (state) => {
      state.showModalSong = false;
    },
  },
});

export const {
  setSongModalInfo,
  openModalSong,
  closeModalSong,
} = appSlice.actions;

export default appSlice.reducer;

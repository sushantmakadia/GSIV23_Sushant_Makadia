import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  search: '',
  id:''
};
const movieInfoSlice = createSlice({
  name: "searchedMovie",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setMovieId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { setSearch, setMovieId } = movieInfoSlice.actions;
export default movieInfoSlice.reducer;
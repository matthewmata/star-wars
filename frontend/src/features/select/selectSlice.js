import { createSlice } from "@reduxjs/toolkit";
import { compare } from "../../utils/compare";

const initialState = {
  films: [],
  people: [],
  sameFilms: ''
};

const selectSlice = createSlice({
  name: "select",
  initialState,
  reducers: {
    filmsAdded(state, action) {
      const films = action.payload;
      state.films.push(...films);
    },
    peopleAdded(state, action) {
      const people = action.payload;
      state.people.push(...people);
    },
    charactersCompared(state, action) {
      const { character1 , character2 } = action.payload;
      const sameFilms = compare(state.people[character1], state.people[character2], state.films);
      state.sameFilms = sameFilms;
    }
  },
});

export const { filmsAdded, peopleAdded, charactersCompared } = selectSlice.actions;

export default selectSlice.reducer;

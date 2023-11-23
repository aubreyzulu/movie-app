import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Movie {
  id: string;
  poster_path: string;
}

export type State = Array<Movie>;

const likedMoviesSlice = createSlice({
  name: 'liked',
  initialState: [] as State,
  reducers: {
    addToLiked: (state, action: PayloadAction<Movie>) => {
      state.push(action.payload);
    },
    removeFromLiked: (state, action) => {
      return state.filter((movie) => movie.id !== action.payload.id);
    },
  },
});

export const { addToLiked, removeFromLiked } = likedMoviesSlice.actions;
export default likedMoviesSlice;

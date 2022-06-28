import { SELECT_MOVIE } from "./constants";

const movieListState = {
  movieList: [
    { title: 'Blade runner', year: '1982' },
    { title: 'Dune', year: '2021' },
    { title: 'Interstellar', year: '2014' },
  ],
}

const selectedInitialState = {
  selectedMovie: {
    title: '',
    year: ''
  }
}


export function movieList(state = movieListState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export function selectMovie(state = selectedInitialState, action) {
  console.log('reducer action', action)
  switch (action.type) {
    case SELECT_MOVIE:
      return state.selectedMovie = action.payload
    default:
      return state;
  }
}



import { SELECT_MOVIE } from "./constants";

const movieListInitialState = {
  movieList: [
    { title: 'Blade runner', year: '1982' },
    { title: 'Dune', year: '2021' },
    { title: 'Interstellar', year: '2014' },
  ],
  selectedMovie: {
    title: '',
    year: ''
  }
}

function movieListReducer(state = movieListInitialState, action) {
  switch (action.type) {
    case SELECT_MOVIE:
      return { ...state, selectedMovie: action.payload }
    default:
      return state;
  }
}

export default movieListReducer

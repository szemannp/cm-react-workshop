import { ADD_MOVIE_TO_LIST } from "../Search/constants";
import { SELECT_MOVIE } from "./constants";

const movieListInitialState = {
  movieList: [
    { Title: 'Blade runner', Year: '1982' },
    { Title: 'Dune', Year: '2021' },
    { Title: 'Interstellar', Year: '2014' },
  ],
  selectedMovie: {
    Title: '',
    Year: ''
  }
}

function movieListReducer(state = movieListInitialState, action) {
  switch (action.type) {
    case SELECT_MOVIE:
      return { ...state, selectedMovie: action.payload }
    case ADD_MOVIE_TO_LIST:
      console.log("ADD", action)
      return { ...state, movieList: [...state.movieList, action.payload] }
    default:
      return state;
  }
}

export default movieListReducer

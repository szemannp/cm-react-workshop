import {
  SEARCH_SUCCESS,
  SEARCH_ERROR,
  ADD_MOVIE_TO_LIST
} from "./constants"

export const searchSuccess = movie => {
  return {
    type: SEARCH_SUCCESS,
    searchedMovie: movie
  }
}

export const searchError = error => {
  return {
    type: SEARCH_ERROR,
    searchError: error
  }
}

export const addMovieToList = movie => {
  return {
    type: ADD_MOVIE_TO_LIST,
    payload: movie
  }
}

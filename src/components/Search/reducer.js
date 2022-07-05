import { SEARCH_ERROR, SEARCH_SUCCESS } from "./constants"

const initialState = {
  Title: '',
  Rated: '',
  Released: '',
  Genre: '',
  Runtime: '',
  searchError: {}
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {

    case SEARCH_SUCCESS:
      return { ...state, ...action.searchedMovie }
    case SEARCH_ERROR:
      return { ...state, ...action.error }
    default:
      return state
  }
}

export default searchReducer

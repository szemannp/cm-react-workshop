import axios from 'axios';
import { API_KEY } from '../../config';
import { searchSuccess, searchError } from './actions';


export function searchMovie(title) {
  // Invert control!
  // Return a function that accepts `dispatch` so we can dispatch later.
  // Thunk middleware knows how to turn thunk async actions into actions.

  return function (dispatch) {
    const url = `http://www.omdbapi.com/?apikey=${API_KEY}&t=${title}`
    return axios.get(url)
      .then(
        response => dispatch(searchSuccess(response.data)),
        error => dispatch(searchError(error))
      );
  };
}

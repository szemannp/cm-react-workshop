import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { combineReducers } from "redux";

import logger from 'redux-logger';

import { movieList, selectMovie } from "./components/MovieList/reducer";


// initial APP state
const initialState = {
  movieList: [],
  selectedMovie: {
    title: '',
    year: '',
  }
};

const rootReducer = combineReducers({
  movieList,
  selectMovie,
})



const configureStore = () => {


  // const middleWares = [logger, thunkMiddleware]
  // const middlewareEnhancer = applyMiddleware(...middleWares)
  // const enhancers = [middlewareEnhancer]

  // const composedEnhancers = compose(...enhancers)
  // const store = createStore(rootReducer, initialState, composedEnhancers)
  const store = createStore(rootReducer)
  return store;
}

export default configureStore;

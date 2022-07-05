import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";

import { createLogger } from 'redux-logger';

import movieListReducer from "./components/MovieList/reducer";
import searchReducer from "./components/Search/reducer";



const configureStore = () => {

  const rootReducer = combineReducers({
    movies: movieListReducer,
    searchedMovie: searchReducer
  })

  const logger = createLogger()

  const middleWares = [logger, thunk]
  const middlewareEnhancer = applyMiddleware(...middleWares)
  const enhancers = [middlewareEnhancer]


  // redux devtools chrome extension
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const composedEnhancers = composeEnhancers(...enhancers)
  const store = createStore(rootReducer, {}, composedEnhancers)


  return store;
}

export default configureStore;

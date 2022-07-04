import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";

import { createLogger } from 'redux-logger';

import movieListReducer from "./components/MovieList/reducer";



const configureStore = () => {

  const rootReducer = combineReducers({
    movies: movieListReducer
  })

  const logger = createLogger()

  const middleWares = [logger, thunk]
  const middlewareEnhancer = applyMiddleware(...middleWares)
  const enhancers = [middlewareEnhancer]

  const composedEnhancers = compose(...enhancers)
  const store = createStore(rootReducer, {}, composedEnhancers)


  return store;
}

export default configureStore;

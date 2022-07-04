import { SELECT_MOVIE } from "./constants"

export const selectMovie = movie => {
  const actionObject = {
    type: SELECT_MOVIE,
    payload: movie
  }
  return actionObject
}

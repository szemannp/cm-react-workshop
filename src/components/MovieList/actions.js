import { SELECT_MOVIE } from "./constants"

export const selectMovie = movie => {
  console.log("ACTION item", movie)
  return {
    type: SELECT_MOVIE,
    payload: movie
  }
}

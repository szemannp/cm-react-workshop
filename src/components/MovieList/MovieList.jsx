import React from "react";
import { connect } from "react-redux";
import Movie from "../Movie/Movie";


const MovieList = state => {
  console.log("STATE", state)
  return (
    state.movieList && state.movieList.length > 0 ?
      (
        state.movieList.map(movie => <Movie movie={movie} key={movie.title} />)
      ) :
      (<p>Nothing to see here</p>)
  )

}


const mapStateToProps = state => {
  return {
    movieList: state.movies.movieList
  }
}

export default connect(mapStateToProps, null)(MovieList)

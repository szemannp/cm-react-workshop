import React from "react";
import { connect } from "react-redux";
import Movie from "../Movie/Movie";


const MovieList = (state) => {
  console.log("STATE", state)
  return (
    state.movieList.movieList && state.movieList.movieList.length > 0 ?
      (
        state.movieList.movieList.map(movie => <Movie movie={movie} key={movie.title} />)
      ) :
      (<p>Nothing to see here</p>)
  )

}


function mapStateToProps(state) {
  return {
    movieList: state.movieList
  }
}

export default connect(mapStateToProps, null)(MovieList)

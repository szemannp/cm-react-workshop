import React from "react";
import { connect } from "react-redux";
import Movie from "../Movie/Movie";


const SelectedMovie = (state) => {
  console.log("SELECTED", state)
  return (
    <div>
      {state.selectedMovie?.selectedMovie ?
        (
          <>
            <p>{state.selectedMovie.selectedMovie.title}</p>
            <p>{state.selectedMovie.selectedMovie.year}</p>
          </>
        ) :
        <p>nothing selected</p>
      }
    </div>
  );
}

function mapStateToProps(state) {
  return {
    selectedMovie: state.selectedMovie
  }
}

export default connect(mapStateToProps)(SelectedMovie)


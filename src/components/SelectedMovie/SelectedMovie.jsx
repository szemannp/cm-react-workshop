import React from "react";
import { connect } from "react-redux";


const SelectedMovie = state => {
  return (
    <div>
      {state.selectedMovie ?
        (
          <>
            <p>And the selected movie is: </p>
            <p>{state.selectedMovie.title}</p>
            <p>{state.selectedMovie.year}</p>
          </>
        ) :
        <p>nothing selected</p>
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    selectedMovie: state.movies.selectedMovie
  }
}

export default connect(mapStateToProps, null)(SelectedMovie)


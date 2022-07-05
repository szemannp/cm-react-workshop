import React from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../MovieList/actions';

const Movie = ({ movie, selectMovie }) => {

  const onMovieSelect = () => {
    selectMovie(movie)
  }

  return (
    <div onClick={onMovieSelect}>
      <p>{movie?.Title}</p>
      <p>{movie?.Year}</p>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    selectMovie: movie => {
      dispatch(selectMovie(movie))
    }
  }
}

export default connect(null, mapDispatchToProps)(Movie)


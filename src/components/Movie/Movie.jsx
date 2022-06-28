import React from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../MovieList/actions';

const Movie = ({ movie }) => {

  const onMovieSelect = () => {
    selectMovie(movie)
    console.log('MOVIE SELECTED', movie)
  }

  return (
    <div onClick={onMovieSelect}>
      <p>{movie?.title}</p>
      <p>{movie?.year}</p>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectMovie: movie => { dispatch(selectMovie(movie)) }
  }
}

export default connect(null, mapDispatchToProps)(Movie)


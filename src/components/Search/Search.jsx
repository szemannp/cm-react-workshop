import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { searchMovie } from './thunks';
import { addMovieToList } from './actions';

const Search = ({
  searchedMovie,
  addMovieToList,
  searchMovie
}) => {

  const [title, setTitle] = useState('')

  const onSearchValue = event => {
    setTitle(event.target.value)
  }

  const onSearchClick = () => {
    searchMovie(title)
  }

  const onAddToListClick = () => {
    addMovieToList(searchedMovie)
  }

  return (
    <div>
      <p>Search movies with axios</p>
      <input
        type="text"
        placeholder="search movie"
        style={{ width: '200px', height: '40px' }}
        onChange={onSearchValue}
      />
      <Row className="mx-6">
        <Col>
          <Button
            onClick={onSearchClick}
            variant="primary"
          >
            Search
          </Button>
        </Col>
        <Col>
          <Button
            onClick={onAddToListClick}
            variant="primary"
          >
            Add to List
          </Button>
        </Col>
      </Row>
      <p>{title}</p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <p>{`Title: ${searchedMovie.Title}`}</p>
        <p>{`Release date: ${searchedMovie.Released}`}</p>
        <p>{`Rated: ${searchedMovie.Rated}`}</p>
        <p>{`Runtime: ${searchedMovie.Runtime}`}</p>
        <p>{`Genre: ${searchedMovie.Genre}`}</p>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    searchedMovie: state.searchedMovie
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addMovieToList: movie => dispatch(addMovieToList(movie)),
    searchMovie: title => dispatch(searchMovie(title))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)

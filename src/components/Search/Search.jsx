import React, { useState } from 'react'
import axios from 'axios'

import { API_KEY } from '../../config'

const Search = () => {

  const [searchTitle, setSearchTitle] = useState('')
  const [result, setResult] = useState('')

  const onSearchValue = event => {
    setSearchTitle(event.target.value)
  }

  const onSearchClick = () => {
    const url = `http://www.omdbapi.com/?apikey=${API_KEY}&t=${searchTitle}`
    axios.get(url)
      .then(response => setResult(response.data))
      .catch(error => console.log("ERROR", error))
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
      <button onClick={onSearchClick}>Search</button>
      <p>{searchTitle}</p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <p>{`Title: ${result.Title}`}</p>
        <p>{`Release date: ${result.Released}`}</p>
        <p>{`Rated: ${result.Rated}`}</p>
        <p>{`Runtime: ${result.Runtime}`}</p>
        <p>{`Genre: ${result.Genre}`}</p>
      </div>
    </div>
  )
}

export default Search

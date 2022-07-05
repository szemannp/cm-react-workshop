import React from 'react'
import { Link } from 'react-router-dom'

export default function UserGreet(props) {
  return (
    <>
      <div>
        <p>Hello</p>
        <p>{props.userName}</p>
        <p>app</p>
        <p>for FUN</p>
      </div>
      <div>
        <Link to={'/movielist'}>Movie List</Link>
      </div>
    </>
  )
}

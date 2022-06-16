import React from 'react'

export default function User(user) {
  return (
    <li>
      <p>{user.user.name}</p>
      <p>{user.user.username}</p>
      <p>{user.user.website}</p>
    </li>
  )
}

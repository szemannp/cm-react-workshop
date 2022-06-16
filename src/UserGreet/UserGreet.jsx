import React from 'react'

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
        <p>for fragments</p>
      </div>
    </>
  )
}

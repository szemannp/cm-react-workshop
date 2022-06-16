import React, { Component } from 'react'
import User from './User/User'

export default class UserList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userList: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ userList: users }))
      .then(json => console.log(json))
  }

  render() {
    return (
      <div>
        UserList
        {!!this.state.userList &&
          <ul>
            {this.state.userList.map(user => <User user={user} />)}
          </ul>
        }
        <p>
          {console.log("expression call", this.state.userList)}
        </p>
      </div>
    )
  }
}

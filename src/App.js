import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();
    this.state = {
      courseExpress : [],
      username: '',
      password: ''
    }
  }

  componentDidMount() {
    console.log('component did mount')
    axios.get('http://localhost:5000/api/v1/todos', {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTU3NjMxODk5N30.-wx-7Eo8u4Rs_n_ft3Ep_CowvxssCrxCzoKUHQnGH6w'
      }
    })
    .then(res => {
      console.log('success')
      console.log(res);
    })
    .catch(err => {
      console.log('error')
    })
  }

  handleLogin = () => {
    axios.post('http://localhost:5000/api/v1/login', {
      email: this.state.username,
      password: this.state.password
    })
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div style={{display:'flex', flexDirection: 'column'}}>
        <h1>Login Course Express</h1>
        <input type="text" placeholder="email" value={this.state.username} onChange={(e) => {
          this.setState({
            username: e.target.value
          })
        }} />
        <input type="password" placeholder="password" value={this.state.password} onChange={(e) => {
          this.setState({
            password: e.target.value
          })
        }} />
        <button onClick={this.handleLogin}>Signin</button>
      </div>
    )
  }

}

export default App;
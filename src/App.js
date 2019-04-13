import React, { Component } from 'react'
import './App.css'

class App extends Component {
  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    fetch('https://randomuser.me/api/?results=50&nat=us')
      .then(response => response.json())
      .then(parsedJSON => console.log(parsedJSON.results))
      .catch(error => console.log('parsing failed', error))
  }
  render() {
    return (
      <div className="App">
        <h1>Choose my API</h1>
      </div>
    )
  }
}

export default App

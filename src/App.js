import React, { Component } from 'react'
import './App.css'

class App extends Component {
  
  render() {
    const { number, add, sub, button } = this.props
    return (
      <div className="App">
        <button onClick={ add }>Add</button>
        <div>{ number }</div>
        <button onClick={ sub }>Sub</button>

        <div>button click: { button }</div>
      </div>
    )
  }
}

export default App

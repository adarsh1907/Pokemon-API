import React, { Component } from 'react';
import './App.css';
import Form from './Form.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Delivery Form</h2>
        </div>
        <Form />
      </div>
    );
  }
}
export default App;
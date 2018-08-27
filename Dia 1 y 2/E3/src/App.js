import React, { Component } from 'react';
import Greeting from './Greeting/Greeting';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { name: 'Ceci' },
        { name: 'Sara' },
        { name: 'Alex'}
      ]
    }
  }
  render() {
    return (
      <div>
        <Greeting name={this.state.persons[0].name} />
        <Greeting name={this.state.persons[1].name} />
        <Greeting name={this.state.persons[2].name} />
      </div>
    );
  }
}

export default App;

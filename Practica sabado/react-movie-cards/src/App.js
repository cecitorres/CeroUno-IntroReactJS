import React, { Component } from 'react';
import Header from './components/Header';
import Movies from './containers/Movies';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        title: 'React Movie Cards'
      };
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} />
        <div className="mt-5">
          <Movies />
        </div>
      </div>
    );
  }
}

export default App;
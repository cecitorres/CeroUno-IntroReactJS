import React, { Component } from 'react';
import Header from './components/Header';
import Post from './components/Post';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [
        { title: 'Title 1', src:'img/100x100.png', text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias quaerat aut expedita vero pariatur sequi praesentium consectetur. Quisquam aliquam rerum a qui cupiditate magni maiores facilis in molestiae. Rerum, assumenda.'},
        { title: 'Title 2', src:'img/100x100.png', text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias quaerat aut expedita vero pariatur sequi praesentium consectetur. Quisquam aliquam rerum a qui cupiditate magni maiores facilis in molestiae. Rerum, assumenda.'},
        { title: 'Title 3', src:'img/100x100.png', text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias quaerat aut expedita vero pariatur sequi praesentium consectetur. Quisquam aliquam rerum a qui cupiditate magni maiores facilis in molestiae. Rerum, assumenda.'}
      ]
    }
  }

  render() {
    return (
      <div>
        <Header header="My Personal Blog" />
        <Post
          title={this.state.blogs[0].title}
          src={this.state.blogs[0].src}
          text={this.state.blogs[0].text}
        />
        <Post
          title={this.state.blogs[1].title}
          src={this.state.blogs[1].src}
          text={this.state.blogs[1].text}
        />
        <Post
          title={this.state.blogs[2].title}
          src={this.state.blogs[2].src}
          text={this.state.blogs[2].text}
        />
      </div>
    );
  }
}

export default App;

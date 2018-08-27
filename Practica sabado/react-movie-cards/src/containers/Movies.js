import React, { Component } from 'react';
import Search from '../components/Search';
import MovieList from '../components/Movie/MovieList';
import MovieService from '../services/MovieService';
import NoResults from '../components/NoResults';

export default class Movies extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      searchTerm: '',
      onLoaded: false
    };
    this.updateInputHandler = this.updateInputHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  // async componentDidMount() {
  //   const moviesData = await MovieService.getMovies('cat');
  //   this.setState({
  //     movies: moviesData,
  //     onLoaded: true
  //   });
  // }

  updateInputHandler(e) {
    this.setState({
      searchTerm: e.target.value
    });
  }

  async submitHandler(e) {
    e.preventDefault();
    const moviesData = await MovieService.getMovies(this.state.searchTerm);
    this.setState({
      movies: moviesData,
      onLoaded: true
    });
  }

  render() {
    const { onLoaded, movies } = this.state;
    const noResults = movies.length === 0 && onLoaded;
    return (
      <div className="container-fluid">
        <Search onUpdate={this.updateInputHandler} onSubmit={this.submitHandler}/>
        { onLoaded && 
          <MovieList movies={this.state.movies} />          
        }
        {
          noResults &&
          <NoResults />
        }
      </div>
    );
  }
}
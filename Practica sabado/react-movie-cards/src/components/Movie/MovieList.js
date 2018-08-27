import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

const MovieList = (props) => (
  <div className="d-flex flex-row">      
    <div className="col-sm-12">
      <div className="card-deck ml-5">
        {
          props.movies.map(movie => <MovieCard key={movie.imdbID} movie={movie} />)
        }
      </div>
    </div>
  </div>
);

MovieList.defaultProps = {
  movies: []
};

MovieList.propTypes = {
  movies: PropTypes.array
};

export default MovieList;
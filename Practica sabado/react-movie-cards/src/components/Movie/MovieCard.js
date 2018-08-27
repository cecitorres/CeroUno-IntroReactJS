import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = (props) => (
  <div className="movie-card col-3">
    <div>
      <img className="card-img-top" src={props.movie.Poster} alt="" />
    </div>
    <div className="card-body">
      <h4 className="card-title">{props.movie.Title}</h4>
      <h6 className="card-subtitle mb-2 text-muted">{props.movie.subtitle}</h6>
      <h4><span className="badge badge-primary">{props.movie.Type}</span></h4>
      <p className="text-justify">{props.movie.Year}</p>
    </div>
  </div>
);

MovieCard.defaultProps = {
    movie: {}
};

MovieCard.propTypes = {
    movie: PropTypes.object
};

export default MovieCard;
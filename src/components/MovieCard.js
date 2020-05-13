import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import '../App.css';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { imagePath, title, storyline, id } = movie;
    return (
      <div>
        <div data-testid="movie-card">
          <p>{title}</p>
          <img src={imagePath} alt={title} />
          <p>{storyline}</p>
          <Link
            to={{
              pathname: `/movies/${id}`,
            }}
          >
            VER DETALHES
          </Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;

// MovieCard.propTypes = {
//   imagePath: PropTypes.any.isRequerid,
// }

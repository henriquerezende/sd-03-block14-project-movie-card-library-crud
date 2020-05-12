import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const {
      title, storyline, imagePath, id,
    } = movie;
    return (
      <div data-testid="movie-card">
        <div style={{ backgroundImage: `url(${imagePath})`, width: '70vw', height: '60vh' }}>
          <h2>{title}</h2>
        </div>
        <p>{storyline}</p>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}
MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  movie: PropTypes.shape({
    title: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;

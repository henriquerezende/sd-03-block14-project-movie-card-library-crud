import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { movie: props };
  // }

  render() {
    const { movie } = this.props;
    const {
      imagePath,
      storyline,
      title,
      id,
    } = movie;
    return (
      <div data-testid="movie-card">
        <img alt={`${title} Cover`} src={imagePath} />
        <p>{storyline}</p>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.protoType = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.number,
  }),
};

export default MovieCard;

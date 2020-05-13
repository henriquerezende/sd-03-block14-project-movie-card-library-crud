import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import PropTypes from 'prop-types';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      movie: null,
    };
  }
  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id)
    .then((movie) => this.setState({ movie, loading: true }));
  }
  render() {
    // Change the condition to check the state
    const { loading, movie } = this.state;
    if (!loading) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.any.isRequired,
    genre: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    subtitle: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired
    }).isRequired,
  }).isRequired
};

export default MovieDetails;

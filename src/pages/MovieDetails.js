import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
      id: props.location.pathname.split('/movies/')[1],
    };
    console.log('props', props);
  }

  componentDidMount() {
    const { id } = this.state;
    movieAPI
      .getMovie(id)
      .then(this.setState({ loading: false }))
      .then((movie) => this.setState({ movie }));
  }

  render() {
    // Change the condition to check the state
    const { state } = this;
    if (state.loading === true) return <Loading />;
    const {
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
    } = state.movie;

    return (
      <div data-testid="movie-details">
        <h3>{title}</h3>
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movie/${state.id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;

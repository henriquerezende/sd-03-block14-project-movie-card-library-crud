import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      requesting: false,
    };
  }

  async componentDidMount() {
    await this.setState({ requesting: true });
    const movies = await movieAPI.getMovies();
    await this.setState({ movies });
    this.setState({ requesting: false });
  }

  render() {
    const { movies } = this.state;

    if (this.state.requesting) return <Loading />;

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>

    );
  }
}

export default MovieList;

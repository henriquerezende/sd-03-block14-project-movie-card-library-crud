import React, { Component } from 'react';

import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';
import { Redirect } from 'react-router-dom';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({
      status: 'OK',
      shouldRedirect: true,
    });
  }

  async componentDidMount() {
    const movie = await movieAPI.getMovie(this.props.match.params.id);
    this.changeState('Waiting', movie);
  }

  changeState(flag, obj) {
    this.setState((state) => ({
      ...state,
      status: flag,
      movie: obj,
    }));
  }

  render() {
    console.log(this.state.movie)
    const { status, shouldRedirect, movie } = this.state;

    if (shouldRedirect) {
      // Redirect
      return <Redirect to='/'/>
    }

    if (status === 'loading') {
      // render Loading
      return <Loading />
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;

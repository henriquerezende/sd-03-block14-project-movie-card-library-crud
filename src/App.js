import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';

function App() {
  return (

    <>
      <div>Movie Card Library Crud</div>

      <Router>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route exact path="/movies/:id" component={MovieDetails} />
          <Route path="/movies/:id/edit" component={EditMovie} />
        </Switch>

      </Router>
    </>
  );
}

export default App;

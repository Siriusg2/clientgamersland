/* eslint-disable react/react-in-jsx-scope */
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Navbar from './components/Navbar/Navbar';
import { getGames, getGenres } from './redux/actions';
import LandingPage from './components/LandingPage/LandingPage';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Cards from './components/Cards/Cards';
import About from './components/About/About';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGames());
    dispatch(getGenres());
  }, []);
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Cards} />
          <Route exact path="/detail/:id" component={Detail} />
          <Route exact path="/create" component={Form} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

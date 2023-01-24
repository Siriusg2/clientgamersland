/* eslint-disable react/react-in-jsx-scope */
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Cards from './components/Cards/Cards';

import Navbar from './components/Navbar/Navbar';
import { getGames, getGenres } from './redux/actions';
import LandingPage from './components/LandingPage/LandingPage';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';

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
        <Route />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={Cards} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/create" component={Form} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

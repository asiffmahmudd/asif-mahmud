import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import ScrollButton from './components/Shared/ScrolledButton/ScrolledButton';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/portfolio">
          <Portfolio></Portfolio>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
    <ScrollButton></ScrollButton>
    </Fragment>
  );
}

export default App;

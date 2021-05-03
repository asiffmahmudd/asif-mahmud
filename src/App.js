import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import ScrollButton from './components/Shared/ScrolledButton/ScrolledButton';
import { Fragment, useEffect } from 'react';
import About from './components/About/About';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() =>{
    Aos.init({});
  }, [])

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
        <Route path="/about">
          <About></About>
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

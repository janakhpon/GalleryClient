import React, { Component } from 'react';
import Menu from './Components/Menu';
import Header from './Components/Header';
import Container from './Components/Container';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="site-wrap">



        <Router>
          {/* Menu Section Here */}
          <Menu />

          {/* Header Section Here */}
          <Header />

          {/* Container Section Here */}
          <Route exact path="/" component={Container} />
        </Router>

      </div>
    );
  }
}


export default App;

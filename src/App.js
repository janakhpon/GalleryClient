import React, { Component } from 'react';
import Menu from './Components/Menu';
import Header from './Components/Header';
import Container from './Components/Container';
import Gallery from './Components/Gallery';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';
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
          <Route path="/Gallery" component={Gallery} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Services" component={Services} />
        </Router>

      </div>
    );
  }
}


export default App;

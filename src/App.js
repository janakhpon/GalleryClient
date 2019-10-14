import React, { Component } from 'react';
import Menu from './Components/Menu';
import Header from './Components/Header';
import Container from './Components/Container';
import Gallery from './Components/Gallery';
import Gallerytwo from './Components/Gallerytwo';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Uploadform from './Components/Uploadform';


import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import { getDataList } from './Fetch';
import './App.css';

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      galaries: [],
      galarie: {}
    }
  }


  async getData() {
    let data = await getDataList();
    this.setState({
      galaries: data
    })

    console.log("DATA" + data);


  }

  componentDidMount() {

    this.getData();
    console.log(this.state.galaries);

  }



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
            <Route path="/Gallerytwo" component={Gallerytwo} />
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Services" component={Services} />
            <Route path="/Uploadform" component={Uploadform} />


          </Router>

        </div>

    );
  }
}


export default App;

import React, { Component } from 'react';
import Menu from './Components/Menu';
import Header from './Components/Header';
import Container from './Components/Container';
import Detail from './Components/Detail';
import Gallery from './Components/Gallery';
import Gallerytwo from './Components/Gallerytwo';
import About from './Components/About';
import Admin from './Components/Admin';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Sorttype from './Components/Sorttype';
import Sorttag from './Components/Sorttag';
import Sortdate from './Components/Sortdate';
import Sortid from './Components/SortID';
import Uploadform from './Components/Uploadform';
import Typeform from './Components/Typeform';
import Tagform from './Components/Tagform';
import Deviceform from './Components/Deviceform';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Request from './Components/Request';
import history from './Components/History';


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



        <Router history={history}>
          {/* Menu Section Here */}
          <Menu />

          {/* Header Section Here */}
          <Header />

          {/* Container Section Here */}
          <Route exact path="/" component={Container} />
          <Route path="/Wallpapers" component={Gallery} />
          <Route path="/Gallerytwo" component={Gallerytwo} />
          <Route path="/About" component={About} />
          <Route path="/Auth-Admin" component={Admin} />
          <Route path="/Wallpaper" component={Detail} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Services" component={Services} />
          <Route path="/Sort-Type" component={Sorttype} />
          <Route path="/Sort-Tag" component={Sorttag} />
          <Route path="/Sort-ID" component={Sortid} />
          <Route path="/Sort-Date" component={Sortdate} />
          <Route path="/New-Type" component={Typeform} />
          <Route path="/New-Tag" component={Tagform} />
          <Route path="/New-Device" component={Deviceform} />
          <Route path="/New-Wallpaper" component={Uploadform} />
          <Route path="/Auth-Signup" component={Signup} />
          <Route path="/Auth-Signin" component={Signin} />
          <Route path="/Auth-Request" component={Request} />


        </Router>

      </div>

    );
  }
}


export default App;

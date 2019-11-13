import React, { Component } from 'react';
import Menu from './Components/Menu';
import Header from './Components/Header';
import Container from './Components/Container';
import Topic from './Components/Topic';
import Detail from './Components/Detail';
import Detailtype from './/Components/DetailType';
import Detailtag from './Components/Detailtag';
import Gallery from './Components/Gallery';
import Gallerytwo from './Components/Gallerytwo';
import About from './Components/About';
import Admin from './Components/Admin';
import Authtype from './Components/Auth-Type';
import Authtag from './Components/Auth-Tag';
import Authdevice from './Components/Auth-Device';
import Detaildevice from './Components/Detaildevice';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Sorttype from './Components/Sorttype';
import Sorttag from './Components/Sorttag';
import Sortdate from './Components/Sortdate';
import Sortid from './Components/SortID';
import Sortrate from './Components/Sortrate';
import Uploadform from './Components/Uploadform';
import Typeform from './Components/Typeform';
import Tagform from './Components/Tagform';
import Deviceform from './Components/Deviceform';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Request from './Components/Request';
import Typedash from './Components/TypeDashboard';
import Tagdash from './Components/TagDashboard';
import Datedash from './Components/DateDashboard';
import history from './Components/History';


import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';

class App extends Component {

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
          <Route path="/Topic" component={Topic} />
          <Route path="/Wallpapers" component={Gallery} />
          <Route path="/Gallerytwo" component={Gallerytwo} />
          <Route path="/About" component={About} />
          <Route path="/Auth-Admin" component={Admin} />
          <Route path="/Auth-Device" component={Authdevice} />
          <Route path="/Detail-Device" component={Detaildevice} />
          <Route path="/Wallpaper" component={Detail} />
          <Route path="/Detail-Type" component={Detailtype} />
          <Route path="/Detail-Tag" component={Detailtag} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Services" component={Services} />
          <Route path="/Sort-Type" component={Sorttype} />
          <Route path="/Sort-Tag" component={Sorttag} />
          <Route path="/Sort-ID" component={Sortid} />
          <Route path="/Sort-Date" component={Sortdate} />
          <Route path="/Sort-Rate" component={Sortrate} />
          <Route path="/New-Type" component={Typeform} />
          <Route path="/Dash-Type" component={Typedash} />
          <Route path="/New-Tag" component={Tagform} />
          <Route path="/Dash-Tag" component={Tagdash} />
          <Route path="/Dash-Date" component={Datedash} />
          <Route path="/New-Device" component={Deviceform} />
          <Route path="/New-Wallpaper" component={Uploadform} />
          <Route path="/Auth-Type" component={Authtype} />
          <Route path="/Auth-Tag" component={Authtag} />
          <Route path="/Auth-Signup" component={Signup} />
          <Route path="/Auth-Signin" component={Signin} />
          <Route path="/Auth-Request" component={Request} />


        </Router>

      </div>

    );
  }
}


export default App;

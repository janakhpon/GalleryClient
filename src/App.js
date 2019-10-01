import React from 'react';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Container from './Components/Container';
import Footer from './Components/Footer';
import {getList} from './Axios';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      
    }
  }


  render(){
    return(
      <React.Fragment>
      <Header/>
      <Navigation/>
      <Container/>
      <Footer/>
    </React.Fragment>
    );
  }
}

export default App;
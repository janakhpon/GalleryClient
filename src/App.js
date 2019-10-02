import React from 'react';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Container from './Components/Container';
import Footer from './Components/Footer';
import List from './Components/List';
import {getDataList} from './Axios';
import axios from 'axios';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      galaries : [],
      galarie: {}
    }
  }


  async getData(){
    let data = await getDataList();
    this.setState({
      galaries:data
    })

    console.log("DATA"+data);

   
  }

  componentDidMount(){

    this.getData();
    console.log(this.state.galaries);

  }


  render(){
    return(
      <React.Fragment>
      <List galaries={this.state.galaries} />
      <Header/>
      <Navigation/>
      <Container/>
      <Footer/>
    </React.Fragment>
    );
  }
}

export default App;
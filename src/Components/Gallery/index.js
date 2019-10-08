import React, { Component } from 'react';
import axios from 'axios';
import { getDataList } from '../../Fetch';
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import { getData } from '../../Actions';
import { connect } from 'react-redux';
import Datarow from '../Datarow';
import $ from 'jquery'
import 'lightgallery';
import "animate.css/animate.min.css";
import "lightgallery.js/dist/css/lightgallery.css";
const API_URL = 'http://localhost:5000/api';
class Gallery extends Component {

  constructor(props) {
    super(props);
    this.state = {
      galaries: [],
      galarie: {}
    }
  }




  componentDidMount() {
    const url = `${API_URL}/list`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({galaires: data })
      console.log(this.state.galaires);
     })
  }





  onLightGallery = node => {
    this.lightGallery = node;
    $(node).lightGallery();
  }

  componentWillUnmount() {
    $(this.lightGallery).data('lightGallery').destroy(true);
  }



  render() {

    return (
      <div className="site-section" data-aos="fade">
        <div className="container-fluid">

          <div className="row justify-content-center">

            <div className="col-md-7">
              <div className="row mb-5">
                <div className="col-12 ">
                  <div className="site-section-heading text-center">
                    <div className="input-group col-md-12">
                      <input type="text" className="form-control input-lg" placeholder="keywords ... " />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="row" id="lightgallery" ref={this.onLightGallery}>

          {this.state.galaries.map((galarie, key) => {
                return (

                  <div id="aniimated-thumbnials" className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade">
                    <LightgalleryItem group="any" src={`http://localhost:5000/${galarie.image}`}>
                      <img src={`http://localhost:5000/${galarie.image}`} alt={galarie.date} className="img-fluid" />
                    </LightgalleryItem>
                  </div>

                );
              })}
        

          </div>
        </div>
      </div>
    );
  }
}


export default Gallery;
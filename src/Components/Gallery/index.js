import React, { Component } from 'react';
import axios from 'axios';
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import 'lightgallery';
import "animate.css/animate.min.css";
import "lightgallery.js/dist/css/lightgallery.css";
const TYPE_API_URL = 'http://localhost:5000/typeapi';
const TAG_API_URL = 'http://localhost:5000/tagapi';
const GALARIE_API_URL = 'http://localhost:5000/galarieapi';
class Gallery extends Component {

  constructor(props) {
    super(props);
    this.state = {
      wallpapers: [],
      tags: [],
      types: []
    };
  }



  getGalarie = () => {
    let url = `${GALARIE_API_URL}/list`;
    axios.get(url).then(response => response.data).then((data) => {
      this.setState({
        wallpapers: data
      });
      console.log(this.state.wallpapers);
    })
  }


  getTag = () => {
    let url = `${TAG_API_URL}/list`;
    axios.get(url).then(response => response.data).then(data => {
      this.setState({
        tags: data
      })
    })
  }


  getType = () => {
    let url = `${TYPE_API_URL}/list`;
    axios.get(url).then(response => response.data).then(data => {
      this.setState({
        types: data
      })
    })
  }



  componentDidMount() {

    this.getGalarie();
  }







  render() {

    return (
      <div className="site-section" data-aos="fade">
        <div className="container-fluid">

          <div className="row justify-content-center">

            <div className="col-md-8">
              <div className="row mb-5">
                <div className="input-group border-0 rounded-pill p-1">
                  <div className="input-group-prepend border-0">
                    <button id="button-addon4" type="button" className="btn btn-link text-info"><FontAwesomeIcon icon={faSearch} /></button>
                  </div>
                  <input type="search" placeholder="What're you searching for ? ... ." aria-describedby="button-addon4" className="form-control bg-none border-0" />
                </div>
              </div>
            </div>

          </div>
          <div className="row">
            <LightgalleryProvider>

              {this.state.wallpapers.map((wallpaper, key) => {
                return (

                  <div id="aniimated-thumbnials" className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" key={key}>
                    <LightgalleryItem group="any" src={`http://localhost:5000/${wallpaper.image}`}
                      subHtml={`<h3>${wallpaper.title}</h3><p>${wallpaper.type}</p>`}>
                      <img src={`http://localhost:5000/${wallpaper.image}`} alt={wallpaper.date} className="img-fluid" />
                    </LightgalleryItem>
                  </div>

                );
              })}


            </LightgalleryProvider>



          </div>
        </div>
      </div>
    );
  }
}


export default Gallery;
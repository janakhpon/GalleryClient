import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import 'lightgallery';
import "animate.css/animate.min.css";
import "lightgallery.js/dist/css/lightgallery.css";
const TYPE_API_URL = 'http://localhost:5000/typeapi';
const TAG_API_URL = 'http://localhost:5000/tagapi';
const GALARIE_API_URL = 'http://localhost:5000/galarieapi';


const Mydiv = styled.div`
  &:hover{
    cursor: pointer;
  }
`;


class Sortrate extends Component {

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
          <div className="row">
            <LightgalleryProvider>

              {this.state.wallpapers.map((wallpaper, key) => {
                return (

                  <Mydiv id="aniimated-thumbnials" className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" key={key}>
                    <LightgalleryItem group="any" src={`http://localhost:5000/${wallpaper.image}`}
                     subHtml={`<h3>${wallpaper.title}</h3><p>${wallpaper.type}</p>`}>
                      <img src={`http://localhost:5000/${wallpaper.image}`} alt={wallpaper.date} className="img-fluid" />
                    </LightgalleryItem>
                  </Mydiv>

                );
              })}


            </LightgalleryProvider>



          </div>
        </div>
      </div>
    );
  }
}


export default Sortrate;
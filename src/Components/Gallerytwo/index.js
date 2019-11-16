import React, { Component } from 'react';
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import 'lightgallery';
import "animate.css/animate.min.css";
import "lightgallery.js/dist/css/lightgallery.css";
import axios from 'axios';
import { GALARIE_API_URL, URL } from '../Const';

class Gallerytwo extends Component {
 _isMounted = false;
 
  constructor(props) {
    super(props);
    this.state = {
      wallpapers: [],
    };
  }
  componentDidMount() {
    this._isMounted = true;
    let url = `${GALARIE_API_URL}/list`;
    axios
      .get(url)
      .then(result => {
        if (this._isMounted) {
          this.setState({
            wallpapers: result.data,
          });
        }
      });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div className="site-section" data-aos="fade">
        <div className="container-fluid">
          <div className="row">
            <LightgalleryProvider>
              {this.state.wallpapers.map((wallpaper, key) => {
                return (

                  <div id="aniimated-thumbnials" className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" key={key}>
                    <LightgalleryItem group="any" src={`${URL}/${wallpaper.image}`}
                      subHtml={`<h3>${wallpaper.title}</h3><p>${wallpaper.type}</p>`}>
                      <img src={`${URL}/${wallpaper.image}`} alt={wallpaper.date} className="img-fluid" />
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

export default Gallerytwo;
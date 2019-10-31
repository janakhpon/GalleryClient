import React, { Component } from 'react';
import axios from 'axios';
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import styled from 'styled-components';
import * as _ from "lodash";
import 'lightgallery';
import "animate.css/animate.min.css";
import "lightgallery.js/dist/css/lightgallery.css";
import { GALARIE_API_URL } from '../Const';

const Mydiv = styled.div`
  &:hover{
    cursor: pointer;
  }
`;

class Container extends Component {
  _isMounted = false;

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
      if (this._isMounted) {
        this.setState({
          wallpapers: data
        });
      }

    });
  };

  componentDidMount() {
    this._isMounted = true;

    this.getGalarie();
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
              {
                _.sortBy(this.state.wallpapers.slice(0, 49), 'choice').map((wallpaper, key) => {
                  return (

                    <Mydiv id="aniimated-thumbnials" className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" key={key}>
                      <LightgalleryItem group="any" src={`http://localhost:5000/${wallpaper.image}`}
                        subHtml={`<h3>${wallpaper.title}</h3><p>${wallpaper.type}</p>`}>
                        <img src={`http://localhost:5000/${wallpaper.image}`} alt={wallpaper.date} className="img-fluid" />
                      </LightgalleryItem>
                    </Mydiv>

                  );
                })
              }
            </LightgalleryProvider>
          </div>
        </div>
      </div>
    );
  }
}

export default Container;
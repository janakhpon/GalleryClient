import React, { Component } from 'react';
import { getDataList } from '../../Fetch';
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import 'lightgallery';
import "animate.css/animate.min.css";
import "lightgallery.js/dist/css/lightgallery.css";

class Gallerytwo extends Component {

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




  componentWillUnmount() {

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
          <div className="row">
            <LightgalleryProvider
              onAfterSlide={() => {
                console.log("onAfterSlide");
              }}
            >

              {this.state.galaries.map((galarie, key) => {
                return (

                  <div id="aniimated-thumbnials" className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade">
                    <LightgalleryItem group="any" src={`http://localhost:5000/${galarie.image}`}>
                      <img src={`http://localhost:5000/${galarie.image}`} alt={galarie.date} className="img-fluid" />
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
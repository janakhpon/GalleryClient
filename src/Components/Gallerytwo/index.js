import React, { Component } from 'react';
import { getDataList, getByType } from '../../Fetch';
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import Select from '../Select';
import 'lightgallery';
import "animate.css/animate.min.css";
import "lightgallery.js/dist/css/lightgallery.css";

class Gallerytwo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      galaries: [],
      galarie: {},
      type: '',
      value: 1,
    }
    this.options = [];
    for (let i = 1; i <= 10; i++)
      this.options.push(i);
    this.setValue = this.setValue.bind(this);
  }


  setValue(value) {
    this.setState({ value });
  }
  async getData() {
    let data = await getDataList();
    this.setState({
      galaries: data
    })

    console.log("DATA" + data);


  }

  onSelect(e) {
    e.preventDefault();

  }

  handleChange = (e) => {
    console.log(`INIT:${this.state.type}`);
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
    console.log(`AFTER:${this.state.type}`);
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
                <div className="col-6 ">
                  <div className="site-section-heading text-center">
                    <div className="input-group col-md-12">
                      <input type="text" className="form-control input-lg" placeholder="keywords ... " />
                    </div>
                  </div>
                </div>
                <div className="col-6 ">
                  <div className="text-center">
                    <div className="col-md-12">
                      <Select className="form-control" name="type" options={this.options} setValue={this.setValue} /> <br />
                      You select "{this.state.value}"
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
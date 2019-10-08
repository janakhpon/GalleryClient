import React, { Component } from 'react';
import { getDataList, getByTypeValue } from '../../Fetch';
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import 'lightgallery';
import "animate.css/animate.min.css";
import "lightgallery.js/dist/css/lightgallery.css";
import Select from 'react-select';
import axios from 'axios';
import isEqual from "lodash/isEqual";


const API_URL = 'http://localhost:5000/api';
const options = [
  { value: 'NATURAL', label: 'NATURAL' },
  { value: 'RAIN', label: 'RAIN' },
  { value: 'FOREST', label: 'FOREST' }
]

class Gallerytwo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      galaries: [],
      galarie: {},
      type: '',
      value: 1,
    }
  }


  handleChange = selectedOption => {
    this.setState({ selectedOption, type: selectedOption.value });
    this.setState({
      galaires: []
    })
    const url = `${API_URL}/type/${selectedOption.value}`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({galaires: data })
      //window.location.reload(false)
      console.log(this.state.galaires);
     })

  };


  setValue(value) {
    this.setState({ value });
  }

  async getUpdateData(){
    let data = await getByTypeValue(this.state.type);
    
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




  componentDidMount() {

    this.getData();
    console.log(this.state.galaries);
    


  }





  componentWillUnmount() {

  }





  render() {
    const { selectedOption } = this.state;
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
                      <Select className="form-group" value={selectedOption} onChange={this.handleChange} options={options} />
                      <p>{this.state.galaries.length}</p>
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
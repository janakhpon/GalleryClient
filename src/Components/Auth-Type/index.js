import React, {Component } from 'react';
import { Link } from 'react-router-dom';
import 'lightgallery';
import "animate.css/animate.min.css";
import "lightgallery.js/dist/css/lightgallery.css";
import Select from 'react-select';
import axios from 'axios';
const TYPE_API_URL = 'http://localhost:5000/typeapi';
const options = [
  { value: 'NATURAL', label: 'NATURAL' },
  { value: 'RAIN', label: 'RAIN' },
  { value: 'FOREST', label: 'FOREST' }
]

class Authtype extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      wallpapers:[],
      galaries: [],
      galarie: {},
      image:'',
      type: '',
      value: 1,
    }
  }


  handleChange = selectedOption => {
    this.setState({
      galaires: []
    })
    this.setState({ selectedOption, type: selectedOption.value });
    const url = `${TYPE_API_URL}/list`;
    axios.get(url).then(response => response.data)
      .then((data) => {
        this.setState({ galaires: data })
      })

  };


  setValue(value) {
    this.setState({ value });
  }



 

  onSelect(e) {
    e.preventDefault();

  }



  getGalarie = () => {
    let url = `${TYPE_API_URL}/list`;
    axios.get(url).then(response => response.data).then((data) => {
      this.setState({
        wallpapers: data
      });
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
                      <Select className="form-group" value={this.state.selectedOption} onChange={this.handleChange} options={options} />
                      <p>{this.state.galaries.length}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="row">


              {this.state.wallpapers.map((wallpaper, key) => {
                return (

                  
                  <div id="aniimated-thumbnials" className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" key={key}>
                  <Link to={{
                    pathname: `/Detail-Type/${wallpaper._id}`,
                    state: {
                      name:wallpaper.name,
                      description:wallpaper.description,
                      image:wallpaper.image,
                      mimetype:wallpaper.mimetype,
                      id:wallpaper._id
                    }
                  }}>

                      <img src={`http://localhost:5000/${wallpaper.image}`} alt={wallpaper._id} className="img-fluid" />
                      </Link>
                  </div>

                );
              })}



          </div>
        </div>
      </div>
    );
  }
}

export default Authtype;
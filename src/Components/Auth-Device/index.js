import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'lightgallery';
import "animate.css/animate.min.css";
import "lightgallery.js/dist/css/lightgallery.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { DEVICE_API_URL } from '../Const';

class AuthDevice extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
            wallpapers: [],
            galaries: [],
            galarie: {},
            image: '',
            type: '',
            value: 1,
        }
    }


    getDevice = () => {
        let url = `${DEVICE_API_URL}/list`;
        axios.get(url).then(response => response.data).then((data) => {
            this.setState({
                wallpapers: data
            });
        })
    }


    componentDidMount() {

        this.getDevice();

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


                        {this.state.wallpapers.map((wallpaper, key) => {
                            return (


                                <div id="aniimated-thumbnials" className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" key={key}>
                                    <Link to={{
                                        pathname: `/Detail-Device/${wallpaper._id}`,
                                        state: {
                                            name: wallpaper.name,
                                            screensize: wallpaper.screensize,
                                            image: wallpaper.image,
                                            mimetype: wallpaper.mimetype,
                                            id: wallpaper._id,
                                            date:wallpaper.date
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

export default AuthDevice;
import React, { Component } from 'react';
import axios from 'axios';
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import { Link } from 'react-router-dom';
import 'lightgallery';
import "animate.css/animate.min.css";
import "lightgallery.js/dist/css/lightgallery.css";
const TYPE_API_URL = 'http://localhost:5000/typeapi';
const TAG_API_URL = 'http://localhost:5000/tagapi';
const GALARIE_API_URL = 'http://localhost:5000/galarieapi';
class Typedash extends Component {

    constructor(props) {
        super(props);
        this.state = {
            wallpapers: [],
            tags: [],
            types: [],
            type: '',
            value: ''
        };
    }



    getGalarie = (val) => {
        let url = `${GALARIE_API_URL}/type/${val}`;
        console.log(url)

        axios.get(url).then(response => response.data).then((data) => {
            this.setState({
                wallpapers: data
            })
            console.log(data);
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


        if (this.props.location.state) {
            const { type } = this.props.location.state
            localStorage.setItem('type', type);

        } else {
            this.setState({
                type: localStorage.getItem('type')
            })
        }

        console.log(localStorage.getItem('type'));

        this.getGalarie(localStorage.getItem('type'));
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
                        <LightgalleryProvider>
                            {this.state.wallpapers.map((wallpaper, key) => {
                                return (

                                    <div id="aniimated-thumbnials" className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" key={key}>
                                        <LightgalleryItem group="any" src={`http://localhost:5000/${wallpaper.image}`}
                                            subHtml={`<h3>${wallpaper.title}</h3><p>${wallpaper.type}</p>`}>
                                            <Link to={{
                                                pathname: `/Wallpaper/${wallpaper._id}`,
                                                state: {
                                                    title: wallpaper.title,
                                                    description: wallpaper.description,
                                                    choice: wallpaper.choice,
                                                    rate: wallpaper.rate,
                                                    image: wallpaper.image,
                                                    devices: wallpaper.devices,
                                                    keyword: wallpaper.keyword,
                                                    type: wallpaper.type,
                                                    date: wallpaper.date,
                                                    mimetype: wallpaper.mimetype,
                                                    id: wallpaper._id
                                                }
                                            }}>
                                                <img src={`http://localhost:5000/${wallpaper.image}`} alt={wallpaper.date} className="img-fluid" />
                                            </Link>
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


export default Typedash;
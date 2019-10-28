import React, { Component } from 'react';
import axios from 'axios';
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'lightgallery';
import "animate.css/animate.min.css";
import "lightgallery.js/dist/css/lightgallery.css";
import {GALARIE_API_URL} from '../Const';
const indexnum = [];
class Datedash extends Component {

    constructor(props) {
        super(props);
        this.state = {
            wallpapers: [],
            dates: [],
            types: [],
            tempOptions: [],
            indexNum: [],
            date: '',
            value: ''
        };
    }



    getGalarie = (val) => {
        let url = `${GALARIE_API_URL}/list`;
        axios.get(url).then(response => response.data).then(data => {
            data.forEach((da, i) => {
                if (moment(da.date).fromNow() === moment(val).fromNow()) {
                    indexnum.push(i);
                }
            })
            this.setState({
                wallpapers: data
            })
        });
    };





    componentDidMount() {


        if (this.props.location.state) {
            const { date, tempOptions } = this.props.location.state
            localStorage.setItem('date', date);
            localStorage.setItem('tempOptions', tempOptions);

        } else {
            this.setState({
                date: localStorage.getItem('date'),
                tempOptions: localStorage.getItem('tempOptions')
            })
        }

        console.log(localStorage.getItem('date'));

        this.getGalarie(localStorage.getItem('date'));
    }







    render() {

        return (
            <div className="site-section" data-aos="fade">
                <div className="container-fluid">
                    <div className="row">
                        <LightgalleryProvider>
                            {indexnum.map((key) => {
                                return (

                                    <div id="aniimated-thumbnials" className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" key={key}>
                                        <LightgalleryItem group="any" src={`http://localhost:5000/${this.state.wallpapers[key].image}`}
                                            subHtml={`<h3>${this.state.wallpapers[key].title}</h3><p>${this.state.wallpapers[key].type}</p>`}>
                                            <Link to={{
                                                pathname: `/Wallpaper/${this.state.wallpapers[key]._id}`,
                                                state: {
                                                    title: this.state.wallpapers[key].title,
                                                    description: this.state.wallpapers[key].description,
                                                    choice: this.state.wallpapers[key].choice,
                                                    rate: this.state.wallpapers[key].rate,
                                                    image: this.state.wallpapers[key].image,
                                                    devices: this.state.wallpapers[key].devices,
                                                    keyword: this.state.wallpapers[key].keyword,
                                                    type: this.state.wallpapers[key].type,
                                                    date: this.state.wallpapers[key].date,
                                                    mimetype: this.state.wallpapers[key].mimetype,
                                                    id: this.state.wallpapers[key]._id
                                                }
                                            }}>
                                                <img src={`http://localhost:5000/${this.state.wallpapers[key].image}`} alt={this.state.wallpapers[key].date} className="img-fluid" />
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


export default Datedash;
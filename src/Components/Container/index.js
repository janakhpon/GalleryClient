import React, { Fragment, Component } from 'react';
import axios from 'axios';
import $ from 'jquery'
import 'lightgallery';
import "animate.css/animate.min.css";

const API_URL = 'http://localhost:5000/typeapi';

class Container extends Component {

    constructor(props) {
        super(props);
        this.state = {
            types: []
        }
    }

    getType = () => {
        const url = `${API_URL}/list`;
        axios.get(url).then(response => response.data).then(data => {
            this.setState({
                types: data
            })
        })
    }
    componentDidMount() {

        this.getType();

    }

    render() {
        return (
            <Fragment>
                <div className="container-fluid" data-aos="fade" data-aos-delay="500">
                    <div className="swiper-container images-carousel">
                        <div className="swiper-wrapper">

                            {
                                this.state.types.map((type, key) => {
                                    return (
                                        <div className="swiper-slide" key={key}>
                                            <div className="image-wrap">
                                                <div className="image-info">
                                                    <h2 className="mb-3">{type.name}</h2>
                                                    <a href="/" className="btn btn-outline-white py-2 px-4">More Photos</a>
                                                </div>
                                                <img src={`http://localhost:5000/${type.image}`} alt={type._id} />
                                            </div>
                                        </div>
                                    );
                                })
                            }

                        </div>

                        <div className="swiper-pagination"></div>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-scrollbar"></div>
                    </div>
                </div>
            </Fragment>
        );
    }
}


export default Container;
import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { TYPE_API_URL, URL } from '../Const';
import './index.css';



const Topic = () => {
    const [types, setTypes] = useState([]);
    useEffect(() => {
        let isSubscribed = true;
        let url = `${TYPE_API_URL}/list`;

        axios.get(url).then(response => response.data).then((data) => {

            if (isSubscribed) {
                setTypes(data);
            }
        })

        return () => isSubscribed = false
    }, [])


    return (
        <Fragment>
            <div className="container-fluid" data-aos="fade" data-aos-delay="20">
                <div className="swiper-container images-carousel">
                    <div className="swiper-wrapper">

                        {
                            types.map((type, key) => {
                                return (
                                    <div className="swiper-slide" key={key}>
                                        <div className="image-wrap">
                                            <div className="image-info">
                                                <h2 className="mb-3">{type.name}</h2>
                                                <a href="/" className="btn btn-outline-white py-2 px-4">More Photos</a>
                                            </div>
                                            <img src={`${URL}/${type.image}`} alt={type._id} />
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

export default Topic;
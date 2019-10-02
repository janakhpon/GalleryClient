import React, { Fragment, Component } from 'react';

class Container extends Component {

    render() {
        return (
            <Fragment>
                <div className="container-fluid" data-aos="fade" data-aos-delay="500">
                    <div className="swiper-container images-carousel">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="image-wrap">
                                    <div className="image-info">
                                        <h2 className="mb-3">Nature</h2>
                                        <a href="single.html" className="btn btn-outline-white py-2 px-4">More Photos</a>
                                    </div>
                                    <img src="images/img_1.jpg" alt="one" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="image-wrap">
                                    <div className="image-info">
                                        <h2 className="mb-3">Portrait</h2>
                                        <a href="single.html" className="btn btn-outline-white py-2 px-4">More Photos</a>
                                    </div>
                                    <img src="images/img_2.jpg" alt="two" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="image-wrap">
                                    <div className="image-info">
                                        <h2 className="mb-3">People</h2>
                                        <a href="single.html" className="btn btn-outline-white py-2 px-4">More Photos</a>
                                    </div>
                                    <img src="images/img_3.jpg" alt="three" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="image-wrap">
                                    <div className="image-info">
                                        <h2 className="mb-3">Architecture</h2>
                                        <a href="single.html" className="btn btn-outline-white py-2 px-4">More Photos</a>
                                    </div>
                                    <img src="images/img_4.jpg" alt="four" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="image-wrap">
                                    <div className="image-info">
                                        <h2 className="mb-3">Animals</h2>
                                        <a href="single.html" className="btn btn-outline-white py-2 px-4">More Photos</a>
                                    </div>
                                    <img src="images/img_5.jpg" alt="five" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="image-wrap">
                                    <div className="image-info">
                                        <h2 className="mb-3">Sports</h2>
                                        <a href="single.html" className="btn btn-outline-white py-2 px-4">More Photos</a>
                                    </div>
                                    <img src="images/img_6.jpg" alt="six" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="image-wrap">
                                    <div className="image-info">
                                        <h2 className="mb-3">Travel</h2>
                                        <a href="single.html" className="btn btn-outline-white py-2 px-4">More Photos</a>
                                    </div>
                                    <img src="images/img_7.jpg" alt="seven" />
                                </div>
                            </div>
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
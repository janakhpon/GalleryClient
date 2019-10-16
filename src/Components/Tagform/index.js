import React, { Fragment, Component } from 'react';
import axios from 'axios';
const API_URL = 'http://localhost:5000/galarieapi';
const formData = new FormData();

class Tagform extends Component {


    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
            selectedColoroptions: [],
            type: {},
            keyword: [],
            image: null
        }
    }





    handleImage = (e) => {
        this.setState({
            image: e.target.files
        });

        formData.append('image', e.target.files[0])
        console.log(e.target.files[0]);
    }

    handleSubmit = (e) => {
        e.preventDefault();


        const url = `${API_URL}/upload`;


        axios({
            method: 'post',
            url: url,
            data: formData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            })




    }

    render() {


        return (
            <Fragment>
                <div className="site-section" data-aos="fade">
                    <div className="container-fluid">

                        <div className="row justify-content-center">
                            <div className="col-md-7">
                                <div className="row mb-5">
                                    <div className="col-12 ">
                                        <h2 className="site-section-heading text-center">Participate in Gallery</h2>

                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-8 mb-5">
                                        <form action="/">


                                            <div className="row form-group">

                                                <div className="col-md-12">
                                                    <label className="text-black" for="title">title</label>
                                                    <input type="text" id="title" className="form-control" />
                                                </div>
                                            </div>


                                            <div className="row form-group">
                                                <div className="col-md-12">
                                                    <label className="text-black" for="description">description</label>
                                                    <textarea name="description" id="description" cols="30" rows="7" className="form-control" placeholder="Write your notes or questions here..."></textarea>
                                                </div>
                                            </div>

                                            <div className="row form-group">
                                                <div className="col-md-12">
                                                    <label for="image">Your Art</label>
                                                    <input type="file" className="form-control-file" id="image" name="image" ref={this.image} onChange={this.handleImage} />
                                                </div>
                                            </div>


                                            <div className="row form-group">
                                                <div className="col-md-12">
                                                    <input type="submit" value="upload to Gallery" className="btn btn-primary py-2 px-4 text-white" onClick={this.handleSubmit} />
                                                </div>
                                            </div>


                                        </form>
                                    </div>
                                    <div className="col-lg-3 ml-auto">
                                        <div className="mb-3 bg-white">
                                            <p className="mb-0 font-weight-bold">Desclaimer/Notes</p>
                                            <p className="mb-4">Type can be added dynamically and you need to choose <u>type</u> for optimized search, use `coma` for <u>tag</u> values </p>

                                            <p className="mb-0 font-weight-bold"><b>Types</b></p>
                                            <div className="mb-4">
                                                <span className="badge badge-primary">Primary</span>
                                                <span className="badge badge-secondary">Secondary</span>
                                                <span className="badge badge-success">Success</span>
                                                <span className="badge badge-danger">Danger</span>
                                                <span className="badge badge-warning">Warning</span>
                                                <span className="badge badge-info">Info</span>
                                                <span className="badge badge-light">Light</span>
                                                <span className="badge badge-dark">Dark</span>
                                            </div>


                                            <p className="mb-0 font-weight-bold"><b>Tags</b></p>
                                            <div className="mb-0">


                                                <span className="badge badge-pill badge-primary">Primary</span>
                                                <span className="badge badge-pill badge-secondary">Secondary</span>
                                                <span className="badge badge-pill badge-success">Success</span>
                                                <span className="badge badge-pill badge-danger">Danger</span>
                                                <span className="badge badge-pill badge-warning">Warning</span>
                                                <span className="badge badge-pill badge-info">Info</span>
                                                <span className="badge badge-pill badge-light">Light</span>
                                                <span className="badge badge-pill badge-dark">Dark</span>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default Tagform;

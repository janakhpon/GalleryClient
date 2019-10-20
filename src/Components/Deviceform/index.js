import React, { Fragment, Component } from 'react';
import axios from 'axios';
const API_URL = 'http://localhost:5000/typeapi';
const formData = new FormData();

class Deviceform extends Component {


    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            image: null,
            types: []
        }
    }


    handleName = (e) => {
        e.preventDefault();
        this.setState({
            name: e.target.value
        })
        formData.set('name', e.target.value);
    }

    handleDescription = (e) => {
        e.preventDefault();
        this.setState({
            description: e.target.value
        })
        formData.set('description', e.target.value);
    }


    handleImage = (e) => {
        this.setState({
            image: e.target.files
        });

        formData.append('image', e.target.files[0]);
        console.log(e.target.files[0]);
    }

    handleSubmit = (e) => {
        e.preventDefault();


        const url = `${API_URL}/add`;


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
            });
        const gurl = `${API_URL}/list`;
        axios.get(gurl).then(response => response.data)
            .then((data) => {
                this.setState({ types: data });
            })




    }

    componentDidMount() {
        const url = `${API_URL}/list`;
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({ types: data });
            })
    }


    render() {
        const colorclass = ["badge badge-primary", "badge badge-secondary", "badge badge-success", "badge badge-danger", "badge badge-warning", "badge badge-info", "badge badge-light", "badge badge-dark"];

        return (
            <Fragment>
                <div className="site-section" data-aos="fade">
                    <div className="container-fluid">

                        <div className="row justify-content-center">
                            <div className="col-md-7">
                                <div className="row">
                                    <div className="col-lg-8 mb-5">
                                        <form action="/">


                                            <div className="row form-group">

                                                <div className="col-md-12">
                                                    <label className="text-black" htmlFor="name">name</label>
                                                    <input type="text" id="name" name="name" className="form-control" onChange={this.handleName} />
                                                </div>
                                            </div>


                                            <div className="row form-group">
                                                <div className="col-md-12">
                                                    <label className="text-black" htmlFor="description">description</label>
                                                    <textarea name="description" id="description" cols="30" rows="7" className="form-control" placeholder="Write your notes or questions here..."
                                                        onChange={this.handleDescription}></textarea>
                                                </div>
                                            </div>

                                            <div className="row form-group">
                                                <div className="col-md-12">
                                                    <label htmlFor="image">Your Art</label>
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
                                                {
                                                    this.state.types.map((type, key) => {

                                                        let gid = Math.floor((Math.random() * 7) + 1);


                                                        return (
                                                            <span className={`${colorclass[gid]}`}>{type.name}</span>
                                                        );
                                                    })
                                                }

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

export default Deviceform;

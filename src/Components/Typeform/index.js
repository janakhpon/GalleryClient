import React, { Fragment, Component } from 'react';
import axios from 'axios';
import { TYPE_API_URL, typeclasses, getID } from '../Const';
import { ToastContainer, toast } from 'react-toastify';
const formData = new FormData();

class Typeform extends Component {


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


        const url = `${TYPE_API_URL}/add`;


        axios({
            method: 'post',
            url: url,
            data: formData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        }).then(res => {

            this.setState({
                name: '',
                description: '',
                image: null,
                types: []
            });

            let mmsg = res.data.msg;
            let merr = res.data.err;
            let msta = res.data.status;

            if (merr !== '') {
                toast.error(`😥 ${merr} with ${msta}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    className: 'form-group'
                });
            } else {
                toast.success(`😎 ${mmsg} with ${msta}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    className: 'form-group'
                });
            }
        })
            .catch(res => {
                let mmsg = res.data.msg;
                let merr = res.data.err;
                let msta = res.data.status;

                if (merr !== '') {
                    toast.error(`😥 ${merr} with ${msta}`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        className: 'form-group'
                    });
                } else {
                    toast.success(`😎 ${mmsg} with ${msta}`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        className: 'form-group'
                    });
                }

            });

        const gurl = `${TYPE_API_URL}/list`;
        axios.get(gurl).then(response => response.data)
            .then((data) => {
                this.setState({ types: data });
            })




    }

    componentDidMount() {
        const url = `${TYPE_API_URL}/list`;
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({ types: data });
            });
    }


    render() {

        return (
            <Fragment>
                <div className="site-section" data-aos="fade">
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnVisibilityChange
                        draggable
                        pauseOnHover
                    />
                    <div className="container-fluid">

                        <div className="row justify-content-center">
                            <div className="col-md-7">
                                <div className="row">
                                    <div className="col-lg-8 mb-5">
                                        <form action="/">


                                            <div className="row form-group">

                                                <div className="col-md-12">
                                                    <label className="text-black" htmlFor="name">New type name</label>
                                                    <input type="text" id="name" name="name" className="form-control" onChange={this.handleName} />
                                                </div>
                                            </div>


                                            <div className="row form-group">
                                                <div className="col-md-12">
                                                    <label className="text-black" htmlFor="description">Suitable type description</label>
                                                    <textarea name="description" id="description" cols="30" rows="7" className="form-control" placeholder="Write your notes or questions here..."
                                                        onChange={this.handleDescription}></textarea>
                                                </div>
                                            </div>

                                            <div className="row form-group">
                                                <div className="col-md-12">
                                                    <label htmlFor="image">Type Image/Art</label>
                                                    <input type="file" className="form-control-file" id="image" name="image" ref={this.image} onChange={this.handleImage} />
                                                </div>
                                            </div>


                                            <div className="row form-group">
                                                <div className="col-md-12">
                                                    <input type="submit" value="SAVE" className="btn btn-primary py-2 px-4 text-white" onClick={this.handleSubmit} />
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
                                                        return (
                                                            <span className={`${typeclasses[getID()]}`} key={key}>{type.name}</span>
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

export default Typeform;

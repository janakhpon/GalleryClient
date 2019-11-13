import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { USER_API_URL } from '../Const';

const formData = new FormData();
class Changepsw extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            phone: '',
            name: '',
            password: '',
            cpassword: '',
            msg: '',
            err: ''
        };
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        formData.set([e.target.name], e.target.value);
    }


    onSubmit = e => {
        e.preventDefault();
        if (this.state.password !== this.state.cpassword) {
            toast.error(`😢 passwords do not match`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                className: 'form-group'
            });
        } else {
            let url = `${USER_API_URL}/change`;

            axios({
                method: 'post',
                url: url,
                data: formData,
                config: { headers: { 'Content-Type': 'multipart/form-data' } }
            })
                .then(res => {
                    let mmsg = res.data.msg;
                    let merr = res.data.err;

                    if (merr !== '') {
                        toast.error(`😢 ${merr}`, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            className: 'form-group'
                        });
                    } else {
                        toast.success(`${mmsg}`, {
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
        }
    }


    render() {
        return (
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
                            <div className="row mb-5">
                                <div className="col-12 ">
                                    <h2 className="site-section-heading text-center">CHANGE PSW</h2>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12 mb-5">
                                    <form action="/">

                                        <div className="row form-group">

                                            <div className="col-md-12">
                                                <label className="text-black" htmlFor="email"> Email </label>
                                                <input type="text" id="email" name="email" className="form-control" onChange={this.onChange} />
                                            </div>
                                        </div>

                                        <div className="row form-group">
                                            <div className="col-md-6 mb-3 mb-md-0">
                                                <label className="text-black" htmlFor="password"> Password </label>
                                                <input type="password" id="password" name="password" className="form-control" onChange={this.onChange} />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="text-black" htmlFor="cpassword"> Confirm Password </label>
                                                <input type="password" id="cpassword" name="cpassword" className="form-control" onChange={this.onChange} />
                                            </div>
                                        </div>

                                        <div className="row form-group">
                                            <div className="col-md-12">
                                                <input type="submit" value="SIGN UP" className="btn btn-primary py-2 px-4 text-white" onClick={this.onSubmit} />
                                            </div>
                                        </div>

                                        <div className="row form-group">
                                            <div className="col-md-12">
                                                <p className="text-center"><Link to="/Auth-Signin"> Back to Log In? </Link></p>
                                            </div>
                                        </div>


                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    };


};


export default Changepsw;
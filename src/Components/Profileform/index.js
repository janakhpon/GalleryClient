import React, { Component } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PROFILE_API_URL } from '../Const';

const formData = new FormData();

class Profileform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            career: '',
            city: '',
            hobby: '',
            address: ''
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        formData.set([e.target.name], e.target.value);

        console.log([e.target.name], e.target.value)
    }

    onSubmit = async (e) => {
        e.preventDefault();

        let url = `${PROFILE_API_URL}/profile`;


        // axios({
        //     method: 'post',
        //     url: url,
        //     data: formData,
        //     config: { headers: { 'Content-Type': 'multipart/form-data' } }
        // })
        //     .then(res => {
        //         let mmsg = res.data.msg;
        //         let merr = res.data.err;
        //         let msta = res.data.status;

        //         if (merr !== '') {
        //             toast.error(`😥 ${merr} with ${msta}`, {
        //                 position: "top-right",
        //                 autoClose: 5000,
        //                 hideProgressBar: false,
        //                 closeOnClick: true,
        //                 pauseOnHover: true,
        //                 draggable: true,
        //                 className: 'form-group'
        //             });
        //         } else {
        //             toast.success(`😎 ${mmsg} with ${msta}`, {
        //                 position: "top-right",
        //                 autoClose: 5000,
        //                 hideProgressBar: false,
        //                 closeOnClick: true,
        //                 pauseOnHover: true,
        //                 draggable: true,
        //                 className: 'form-group'
        //             });
        //         }


        //     });


        try {
            const res = await axios({
                method: 'post',
                url: url,
                data: formData,
                config: { headers: { 'Content-Type': 'multipart/form-data' } }
            })

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

        } catch (err) {
            toast.error(`😥 ${err}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                className: 'form-group'
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
                                    <h2 className="site-section-heading text-center">Profileform Us</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-8 mb-5">
                                    <form action="/">


                                        <div className="row form-group">
                                            <div className="col-md-6 mb-3 mb-md-0">
                                                <label className="text-black" htmlFor="career"> Career </label>
                                                <input type="text" id="career" className="form-control" name="career" onChange={this.onChange} />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="text-black" htmlFor="city"> City </label>
                                                <input type="text" id="city" className="form-control" name="city" onChange={this.onChange} />
                                            </div>
                                        </div>

                                        <div className="row form-group">

                                            <div className="col-md-12">
                                                <label className="text-black" htmlFor="hobby"> Hobby </label>
                                                <input type="text" id="hobby" className="form-control" name="hobby" onChange={this.onChange} />
                                            </div>
                                        </div>

                                        <div className="row form-group">
                                            <div className="col-md-12">
                                                <label className="text-black" htmlFor="address"> Address </label>
                                                <textarea id="address" cols="30" rows="7" className="form-control" placeholder="Write your address line here..." name="address" onChange={this.onChange}></textarea>
                                            </div>
                                        </div>

                                        <div className="row form-group">
                                            <div className="col-md-12">
                                                <input type="submit" value="CREATE PROFILE" className="btn btn-primary py-2 px-4 text-white" onClick={this.onSubmit} />
                                            </div>
                                        </div>


                                    </form>
                                </div>
                                <div className="col-lg-3 ml-auto">
                                    <div className="mb-3 bg-white">
                                        <p className="mb-0 font-weight-bold">Address</p>
                                        <p className="mb-4">No.82 Khayay St. Ngantae ward, Mawlamyine, Mon State, Myanmar</p>

                                        <p className="mb-0 font-weight-bold">Phone</p>
                                        <p className="mb-4"><a href="/">+959 255839074</a></p>

                                        <p className="mb-0 font-weight-bold">Email Address</p>
                                        <p className="mb-0"><a href="/">GTGMyanmar@gtg.tech</a></p>

                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Profileform;
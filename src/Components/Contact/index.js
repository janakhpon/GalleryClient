import React, { useState } from 'react';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CONTACT_API_URL } from '../Const'

const CONTACT_INIT = {
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: ""
}

const Contact = () => {

    const [contact, setContact] = useState(CONTACT_INIT)

    const handleChange = (e) => {
        e.persist();
        setContact(previousValues => ({
            ...previousValues, [e.target.name]: e.target.value
        }))
    }

    const SendRequest = () => {
        try {
            let url = `${CONTACT_API_URL}/add`;

            let name = `${contact.firstname} ${contact.lastname}`
            let data = {
                name,
                email: contact.email,
                subject: contact.subject,
                message: contact.message
            }


            axios({
                method: 'post',
                url: url,
                data,
                config: { headers: { 'Content-Type': 'multipart/form-data' } }
            })
                .then(res => {
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
        } catch (err) {

        }
    }

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
                                <h2 className="site-section-heading text-center">Contact Us</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 mb-5">
                                <form action="/">

                                    <div className="row form-group">
                                        <div className="col-md-6 mb-3 mb-md-0">
                                            <label className="text-black" htmlFor="fname">First Name</label>
                                            <input type="text" id="fname" className="form-control" name="firstname" onChange={handleChange} />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="text-black" htmlFor="lname">Last Name</label>
                                            <input type="text" id="lname" className="form-control" name="lastname" onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <label className="text-black" htmlFor="email">Email</label>
                                            <input type="email" id="email" className="form-control" name="email" onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <label className="text-black" htmlFor="subject">Subject</label>
                                            <input type="subject" id="subject" className="form-control" name="subject" onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <label className="text-black" htmlFor="message">Message</label>
                                            <textarea name="message" id="message" cols="30" rows="7" className="form-control"
                                                placeholder="Write your notes or questions here..." onChange={handleChange}></textarea>
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <input type="button" value="Send Message" className="btn btn-primary py-2 px-4 text-white" onClick={SendRequest} />
                                        </div>
                                    </div>

                                </form>
                            </div>
                            <div className="col-lg-3 ml-auto">
                                <div className="mb-3 bg-white">
                                    <p className="mb-0 font-weight-bold">Address</p>
                                    <p className="mb-4">No.82 Khayay St. Ngantae ward, Mawlamyine, Mon State, Myanmar</p>

                                    <p className="mb-0 font-weight-bold">Phone</p>
                                    <p className="mb-4"><a href="tel:+9509792359726">+95 09792359726 </a></p>

                                    <p className="mb-0 font-weight-bold">Email Address</p>
                                    <p className="mb-0"><a href="mailto:greentechinc.myanmar@gmail.com">greentechinc.myanmar@gmail.com</a></p>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}


export default Contact;
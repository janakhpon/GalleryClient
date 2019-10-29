import React, { Component } from 'react';

class Contact extends Component {

    render() {
        return (
            <div className="site-section" data-aos="fade">
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
                                                <input type="text" id="fname" className="form-control" />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="text-black" htmlFor="lname">Last Name</label>
                                                <input type="text" id="lname" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="row form-group">

                                            <div className="col-md-12">
                                                <label className="text-black" htmlFor="email">Email</label>
                                                <input type="email" id="email" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="row form-group">

                                            <div className="col-md-12">
                                                <label className="text-black" htmlFor="subject">Subject</label>
                                                <input type="subject" id="subject" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="row form-group">
                                            <div className="col-md-12">
                                                <label className="text-black" htmlFor="message">Message</label>
                                                <textarea name="message" id="message" cols="30" rows="7" className="form-control" placeholder="Write your notes or questions here..."></textarea>
                                            </div>
                                        </div>

                                        <div className="row form-group">
                                            <div className="col-md-12">
                                                <input type="submit" value="Send Message" className="btn btn-primary py-2 px-4 text-white" />
                                            </div>
                                        </div>


                                    </form>
                                </div>
                                <div className="col-lg-3 ml-auto">
                                    <div className="mb-3 bg-white">
                                        <p className="mb-0 font-weight-bold">Address</p>
                                        <p className="mb-4">203 Fake St. Mountain View, San Francisco, California, USA</p>

                                        <p className="mb-0 font-weight-bold">Phone</p>
                                        <p className="mb-4"><a href="/">+1 232 3235 324</a></p>

                                        <p className="mb-0 font-weight-bold">Email Address</p>
                                        <p className="mb-0"><a href="/">youremail@domain.com</a></p>

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

export default Contact;
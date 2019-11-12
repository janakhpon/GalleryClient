import React from 'react';

const Signin = () => {
    return (
        <div className="site-section" data-aos="fade">
            <div className="container-fluid">

                <div className="row justify-content-center">
                    <div className="col-md-7">
                        <div className="row mb-5">
                            <div className="col-12 ">
                                <h2 className="site-section-heading text-center">Sign IN</h2>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12 mb-5">
                                <form action="/">


                                    <div className="row form-group">

                                        <div className="col-md-12">
                                            <label className="text-black" htmlFor="email"> Email </label>
                                            <input type="email" id="email" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="row form-group">

                                        <div className="col-md-12">
                                            <label className="text-black" htmlFor="password"> Password </label>
                                            <input type="password" id="password" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <input type="submit" value="Log In" className="btn btn-primary py-2 px-4 text-white" />
                                        </div>
                                    </div>


                                    <div className="row form-group">

                                        <div className="col-md-12">
                                            <p className="text-center">Center aligned text on all viewport sizes.</p>
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
}

export default Signin;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { USER_API_URL, PROFILE_API_URL, tagclasses, getID } from '../Const';

const Profile = () => {
    const [data, setData] = useState([]);
    const [profile, setProfile] = useState([]);


    useEffect(() => {
        let isSubscribed = true
        let url = `${USER_API_URL}/current`;

        axios.get(url).then(response => {
            if (isSubscribed) {
                setData(response.data);
            }
        });

        //clean up hook
        return () => isSubscribed = false
    }, []);



    useEffect(() => {
        let isSubscribed = true
        let url = `${PROFILE_API_URL}/current`;

        axios.get(url).then(response => {
            if (isSubscribed) {
                setProfile(response.data);
            }
        });

        //clean up hook
        return () => isSubscribed = false
    }, []);


    return (
        <div className="site-section" data-aos="fade">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-7">
                        <div className="row mb-5">
                            <div className="col-12 ">
                                <h2 className="site-section-heading text-center">{data.name ? data.name : "Unauthorized"}</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 mb-5">
                                <form action="/">


                                    <div className="row form-group">
                                        <div className="col-md-6 mb-3 mb-md-0">
                                            <label className="text-black" htmlFor="phone"> Phone </label>
                                            <p className="text-center form-control">{data.phone ? data.phone : "Unauthorized"}</p>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="text-black" htmlFor="email"> Email </label>
                                            <p className="text-center form-control">{data.email ? data.email : "Unauthorized"}</p>
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <input type="submit" value="EDIT USER" className="btn btn-primary py-2 px-4 text-white" />
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-6 mb-3 mb-md-0">
                                            <label className="text-black" htmlFor="phone"> Phone </label>
                                            <p className="text-center form-control">{data.phone ? data.phone : "Unauthorized"}</p>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="text-black" htmlFor="email"> Email </label>
                                            <p className="text-center form-control">{data.email ? data.email : "Unauthorized"}</p>
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
                                    <p className="mb-4">No.82 Khayay St. Ngantae ward, Mawlamyine, Mon State, Myanmar</p>

                                    <p className="mb-0 font-weight-bold">Phone</p>
                                    <p className="mb-4"><a href="/">+959 255839074</a></p>

                                    <p className="mb-0 font-weight-bold">Email Address</p>
                                    <p className="mb-0"><a href="/">GTGMyanmar@gtg.tech</a></p>

                                    <p className="mb-0 font-weight-bold">Career</p>
                                    <p className="mb-0"><a href="/">GTGMyanmar@gtg.tech</a></p>


                                    <p className="mb-0 font-weight-bold">Hobby</p>
                                    <p className="mb-0"><a href="/">{profile.hobby ? (profile.hobby.map((hob, key) => {
                                        return (
                                            <span className={`${tagclasses[getID()]}`} key={key}>{hob}</span>
                                        );
                                    })) : ("Unauthorized")}</a></p>


                                    <p className="mb-0 font-weight-bold">City</p>
                                    <p className="mb-0"><a href="/">GTGMyanmar@gtg.tech</a></p>

                                    <p className="mb-0 font-weight-bold">Date</p>
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

export default Profile;
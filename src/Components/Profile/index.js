import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { USER_API_URL, PROFILE_API_URL, tagclasses, getID } from '../Const';

const formData = new FormData();

const onChange = (e) => {
    formData.set([e.target.name], e.target.value);
}

const onUserSubmit = (e) => {
    e.preventDefault();
    let url = `${USER_API_URL}/update`;
    axios({
        method: 'put',
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

const onProfileSubmit = (e) => {
    e.preventDefault();
    let url = `${USER_API_URL}/update`;
    axios({
        method: 'post',
        url: url,
        data: formData,
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
}

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
                                <h2 className="site-section-heading text-center">{data.name ? data.name : "Unauthorized"}</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 mb-5">
                                <form action="/">


                                    <div className="row form-group">
                                        <div className="col-md-6 mb-3 mb-md-0">
                                            <label className="text-black" htmlFor="phone"> Phone </label>
                                            <input className="form-control" type="text" id="phone" name="phone" value={data.phone ? data.phone : "Unauthorized"} onChange={onChange} />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="text-black" htmlFor="email"> Email </label>
                                            <input className="form-control" type="text" id="email" name="email" value={data.email ? data.email : "Unauthorized"} onChange={onChange} />
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <input type="submit" value="UPDATE USER" className="btn btn-primary py-2 px-4 text-white" onClick={onUserSubmit} />
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-6 mb-3 mb-md-0">
                                            <label className="text-black" htmlFor="carer"> Career </label>
                                            <input className="form-control" type="text" id="career" name="career" value={profile.career ? profile.career : "Unauthorized"} onChange={onChange} />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="text-black" htmlFor="city"> City </label>
                                            <input className="form-control" type="text" id="city" name="city" value={profile.city ? profile.city : "Unauthorized"} onChange={onChange} />
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <label className="text-black" htmlFor="address"> Address </label>
                                            <textarea name="address" id="address" cols="30" rows="7" className="form-control" placeholder={profile.address ? profile.address : "Unauthorized"} onChange={onChange} >
                                            </textarea>
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <input type="submit" value="UPDATE PROFILE" className="btn btn-primary py-2 px-4 text-white" onClick={onProfileSubmit} />
                                        </div>
                                    </div>


                                </form>
                            </div>
                            <div className="col-lg-3 ml-auto">
                                <div className="mb-3 bg-white">
                                    <p className="mb-0 font-weight-bold">Address</p>
                                    <p className="mb-4">{profile.address ? (profile.address) : ("Unauthorized")}</p>

                                    <p className="mb-0 font-weight-bold">Phone</p>
                                    <p className="mb-4"><Link to="/">{data.phone ? data.phone : "Unauthorized"}</Link></p>

                                    <p className="mb-0 font-weight-bold">Email Address</p>
                                    <p className="mb-2"><Link to="/">{data.email ? data.email : "Unauthorized"}</Link></p>

                                    <p className="mb-0 font-weight-bold">Career</p>
                                    <p className="mb-2"><Link to="/">{profile.career ? (profile.career) : ("Unauthorized")}</Link></p>


                                    <p className="mb-0 font-weight-bold">Hobby</p>
                                    <p className="mb-2"><Link to="/">{profile.hobby ? (profile.hobby.map((hob, key) => {
                                        return (
                                            <span className={`${tagclasses[getID()]}`} key={key}>{hob}</span>
                                        );
                                    })) : ("Unauthorized")}</Link></p>


                                    <p className="mb-0 font-weight-bold">City</p>
                                    <p className="mb-2"><Link to="/">{profile.city ? (profile.city) : ("Unauthorized")}</Link></p>

                                    <p className="mb-0 font-weight-bold">Date</p>
                                    <p className="mb-2"><Link to="/">{profile.date ? (`Joined ${moment(profile.date).fromNow()}`) : ("Unauthorized")}</Link></p>

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
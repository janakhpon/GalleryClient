import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { GALARIE_API_URL, getID, tagclasses } from '../Const';
import './index.css';


const wallOptions = [];
const Sortid = () => {

    const [wallpapers, setWallpapers] = useState([]);


    useEffect(() => {
        let isSubscribed = true;
        let url = `${GALARIE_API_URL}/list`;

        axios.get(url).then(response => response.data).then((data) => {
            if (isSubscribed) {
                setWallpapers(data)
            }
        });

        return () => isSubscribed = false
    }, []);


    wallpapers.map((wallpaper, key) => {
        let temp = { value: wallpaper._id, label: wallpaper._id, key: key };
        return wallOptions.push(temp);
    })



    return (

        <Fragment>
            <div className="site-section" data-aos="fade">
                <div className="container-fluid">

                    <div className="row justify-content-center">
                        <div className="col-md-7">
                            <div className="row mb-5">
                                <div className="col-12 ">
                                    <h2 className="site-section-heading text-center">Sort By ID</h2>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-7 mb-5">
                                    <p className="mb-2 font-weight-bold text-center"> available IDs </p>
                                    <div className="mb-4">
                                        {/**
                                        starting from index 0 to 7
                                        */}
                                        {
                                            wallOptions.map((wall, key) => {
                                                return (
                                                    <span className={`${tagclasses[getID()]}`} key={key}>{wall.value}</span>
                                                );
                                            })
                                        }


                                    </div>
                                </div>
                                <div className="col-lg-4 ml-auto">

                                    <div className="input-group mb-4 border-0 rounded-pill p-1">
                                        <div className="input-group-prepend border-0">
                                            <button id="button-addon4" type="button" className="btn btn-link text-info"><FontAwesomeIcon icon={faSearch} /></button>
                                        </div>
                                        <input type="search" placeholder="What're you searching for ? ... ." aria-describedby="button-addon4" className="form-control bg-none border-0" />
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


export default Sortid;

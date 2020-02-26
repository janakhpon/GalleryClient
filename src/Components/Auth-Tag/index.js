import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { tagclasses, getID, TAG_API_URL } from '../Const';

const Authtag = () => {

    const [tags, setTags] = useState([]);
    useEffect(() => {
        let isSubscribed = true
        let url = `${TAG_API_URL}/list`;

        axios.get(url).then(response => response.data).then((data) => {
            if (isSubscribed) {
                setTags(data)
            }
        });

        //clean up hook
        return () => isSubscribed = false
    }, []);



    return (
        <Fragment>
            <div className="site-section" data-aos="fade">
                <div className="container-fluid">

                    <div className="row justify-content-center">
                        <div className="col-md-7">
                            <div className="row mb-5">
                                <div className="col-12 ">
                                    <h2 className="site-section-heading text-center">Sort By Tag</h2>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-11 mb-5">
                                    <p className="mb-2 font-weight-bold text-center"> available tags </p>
                                    <div className="mb-4">

                                        {

                                            tags.map((tag, key) => {
                                                return (
                                                    <Link to={{
                                                        pathname: `/Detail-Tag`,
                                                        state: {
                                                            name: tag.name,
                                                            id: tag._id
                                                        }
                                                    }} className={`${tagclasses[getID()]}`} key={key}>{tag.name}</Link>
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

        </Fragment>
    );
}


export default Authtag;

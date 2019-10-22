import React, { Fragment, Component } from 'react';
import Moment from 'react-moment';
import axios from 'axios';
import './index.css';
const GALARIE_API_URL = 'http://localhost:5000/galarieapi';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            keyword: [],
            type: '',
            date: '',
            mimetype: '',
            id: '',
            title: '',
            description: '',
            choice: 0,
            rate: 0,
            devices: []
        }
    }




    onDelete = (e) => {
        e.preventDefault();
        const url = `${GALARIE_API_URL}/delete/${this.state.id}`;
        axios.delete(url).then(response => response.data)
            .then((data) => {
                this.props.history.push('/Auth-Admin');
            });


    }

    componentDidMount() {
        const { devices, title, description, choice, rate, image, keyword, type, date, mimetype, id } = this.props.location.state
        if (this.props.location.state) {
            localStorage.setItem('devices', devices);
            localStorage.setItem('title', title);
            localStorage.setItem('description', description);
            localStorage.setItem('choice', choice);
            localStorage.setItem('rate', rate);
            localStorage.setItem('image', image);
            localStorage.setItem('keyword', keyword);
            localStorage.setItem('type', type);
            localStorage.setItem('date', date);
            localStorage.setItem('mimetype', mimetype);
            localStorage.setItem('id', id);
        }

        console.log(localStorage.getItem('devices'));
        this.setState(
            {
                devices: devices ? devices : localStorage.getItem('devices'),
                title: title ? title : localStorage.getItem('title'),
                description: description ? description : localStorage.getItem('description'),
                choice: choice ? choice : localStorage.getItem('choice'),
                rate: rate ? rate : localStorage.getItem('rate'),
                image: image ? image : localStorage.getItem('image'),
                keyword: keyword ? keyword : localStorage.getItem('keyword'),
                type: type ? type : localStorage.getItem('type'),
                date: date ? date : localStorage.getItem('date'),
                mimetype: mimetype ? mimetype : localStorage.getItem('mimetype'),
                id: id ? id : localStorage.getItem('id')
            }
        )

    }

    render() {
        const colorclass = ["badge badge-primary", "badge badge-secondary", "badge badge-success", "badge badge-danger", "badge badge-warning", "badge badge-info", "badge badge-light", "badge badge-dark"];
        const tagclasses = ['badge badge-pill badge-primary', 'badge badge-pill badge-secondary', 'badge badge-pill badge-success', 'badge badge-pill badge-danger', 'badge badge-pill badge-warning', 'badge badge-pill badge-info', 'badge badge-pill badge-light', 'badge badge-pill badge-dark'];
        return (
            <Fragment>
                <div className="site-section" data-aos="fade">
                    <div className="container-fluid">

                        <div className="row justify-content-center">
                            <div className="col-md-7">
                                <div className="row">

                                    {
                                        this.props.location.state ? (
                                            <div className="col-lg-8 mb-5">
                                                <img src={`http://localhost:5000/${this.state.image}`} alt={this.state.date} className="img-fluid" style={{ width: '100%', height: '100%' }} />
                                            </div>
                                        ) : (
                                                <div className="col-lg-8 mb-5">
                                                    <img src={`http://localhost:5000/${localStorage.getItem('image')}`} alt={localStorage.getItem('date')} className="img-fluid" style={{ width: '100%', height: '100%' }} />
                                                </div>
                                            )
                                    }
                                    <div className="col-lg-3 ml-auto">
                                        <div className="mb-3 bg-white">
                                            {
                                                this.props.location.state ? (
                                                    <React.Fragment>
                                                        <p className="mb-0 font-weight-bold">Head/Title</p>
                                                        <p className="mb-0 primary">Rating {this.state.rate} out of 5</p>
                                                        <p className="mb-0 success">Choice {this.state.choice} out of 10</p>
                                                        <p className="mb-4">
                                                            <Moment fromNow>
                                                                {this.state.date}
                                                            </Moment>
                                                        </p>
                                                    </React.Fragment>
                                                ) : (

                                                        <React.Fragment>
                                                            <p className="mb-0 font-weight-bold">Head/Title</p>
                                                            <p className="mb-0 primary">Rating {localStorage.getItem('rate')} out of 5</p>
                                                            <p className="mb-0 success">Choice {localStorage.getItem('choice')} out of 10</p>
                                                            <p className="mb-4">
                                                                <Moment fromNow>
                                                                    {this.state.date}
                                                                </Moment>
                                                            </p>
                                                        </React.Fragment>
                                                    )
                                            }


                                            <p className="mb-0 font-weight-bold">{this.state.title}</p>
                                            {
                                                this.props.location.state ? (<p className="mb-1">
                                                    {this.state.description}
                                                </p>) : (<p className="mb-1">
                                                    {localStorage.getItem('description')}
                                                </p>)
                                            }




                                            <p className="mb-0 font-weight-bold"><b>Type</b></p>
                                            <div className="mb-4">

                                                {
                                                    this.props.location.state ? (<span className="badge badge-primary">{this.state.type}</span>) : (<span className="badge badge-primary">{localStorage.getItem('type')}</span>)
                                                }
                                                {
                                                    this.props.location.state ? (<span className="badge badge-info">{this.state.mimetype}</span>) : (<span className="badge badge-info">{localStorage.getItem('mimetype')}</span>)
                                                }

                                            </div>




                                            <p className="mb-0 font-weight-bold"><b>Devicess</b></p>
                                            {
                                                this.props.location.state ? (
                                                    <div className="mb-4">

                                                        {
                                                            this.state.devices.map((dev, key) => {
                                                                let gid = Math.floor(Math.random() * 7) + 0;
                                                                return (
                                                                    <span className={`${tagclasses[gid]}`} key={key}>{dev}</span>
                                                                );
                                                            })
                                                        }

                                                    </div>
                                                ) : (

                                                        <div className="mb-4">

                                                            {
                                                                localStorage.getItem('devices').map((dev, key) => {
                                                                    let gid = Math.floor(Math.random() * 7) + 0;
                                                                    return (
                                                                        <span className={`${tagclasses[gid]}`} key={key}>{dev}</span>
                                                                    );
                                                                })
                                                            }

                                                        </div>
                                                    )
                                            }



                                            <p className="mb-0 font-weight-bold"><b>Tags</b></p>
                                            {
                                                this.props.location.state ? (
                                                    <div className="mb-4">

                                                        {
                                                            this.state.keyword.map((val, key) => {
                                                                return (
                                                                    <span className={`${colorclass[key]}`} key={key}>{val}</span>
                                                                );
                                                            })
                                                        }

                                                    </div>
                                                ) : (
                                                        <div className="mb-4">

                                                            {
                                                                localStorage.getItem('keyword').map((val, key) => {
                                                                    return (
                                                                        <span className={`${colorclass[key]}`} key={key}>{val}</span>
                                                                    );
                                                                })
                                                            }

                                                        </div>
                                                    )
                                            }



                                            <p className="mb-0 font-weight-bold"><b>OPTIONS</b></p>
                                            <div className="mb-4">
                                                <span className="btn btn-sm btn-danger" onClick={this.onDelete}>DELETE</span>
                                                <span className="btn btn-sm btn-dark">UPDATE</span>
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

export default Detail;
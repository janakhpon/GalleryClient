import React, { Fragment, Component } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import { DEVICE_API_URL } from '../Const';


class Detaildevice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            image: null,
            mimetype: '',
            name: '',
            screensize: '',
            date: ''
        }
    }




    onDelete = (e) => {
        e.preventDefault();
        const url = `${DEVICE_API_URL}/delete/${this.state.id}`;
        axios.delete(url).then(response => response.data)
            .then((data) => {
                this.props.history.push('/Auth-Device');
            });


    }

    componentDidMount() {

        if (this.props.location.state) {
            const { name, screensize, image, mimetype, id, date } = this.props.location.state
            localStorage.setItem('deviceid', id);
            localStorage.setItem('devicename', name);
            localStorage.setItem('devicescreensize', screensize);
            localStorage.setItem('deviceimage', image);
            localStorage.setItem('devicemimetype', mimetype);
            localStorage.setItem('devicedate', date);
        }
        this.setState(
            {
                id: localStorage.getItem('deviceid'),
                name: localStorage.getItem('devicename'),
                screensize: localStorage.getItem('devicescreensize'),
                image: localStorage.getItem('deviceimage'),
                mimetype: localStorage.getItem('devicemimetype'),
                date: localStorage.getItem('devicedate')
            }
        );





    }

    render() {
        return (
            <Fragment>
                <div className="site-section" data-aos="fade">
                    <div className="container-fluid">

                        <div className="row justify-content-center">
                            <div className="col-md-7">
                                <div className="row">

                                    {

                                        <div className="col-lg-8 mb-5">
                                            <img src={`http://localhost:5000/${this.state.image}`} alt={this.state.id} className="img-fluid" style={{ width: '100%', height: '100%' }} />
                                        </div>

                                    }
                                    <div className="col-lg-3 ml-auto">
                                        <div className="mb-3 bg-white">
                                            <p className="mb-0 font-weight-bold">{this.state.name}</p>
                                            {
                                                <p className="mb-1">
                                                    {this.state.screensize}
                                                </p>
                                            }




                                            <p className="mb-0 font-weight-bold"><b>Type</b></p>
                                            <div className="mb-4">

                                                {
                                                    <span className="badge badge-primary">{this.state.type}</span>
                                                }
                                                {
                                                    <span className="badge badge-info">{this.state.mimetype}</span>
                                                }
                                                {
                                                    <span className="badge badge-info"><Moment add={{ days: 1, hours: 12 }}>{this.state.date}</Moment></span>
                                                }

                                            </div>






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

export default Detaildevice;
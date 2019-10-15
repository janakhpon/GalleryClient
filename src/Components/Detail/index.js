import React, { Fragment, Component } from 'react';
import { Redirect } from 'react-router-dom';
import history from '../History';
import Moment from 'react-moment';
import axios from 'axios';
import './index.css';
const API_URL = 'http://localhost:5000/api';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            keyword: [],
            type: '',
            date: '',
            mimetype: '',
            id: ''
        }
    }




    onDelete = (e) => {
        e.preventDefault();
        const url = `${API_URL}/delete/${this.state.id}`;
        axios.delete(url).then(response => response.data)
            .then((data) => {
                this.props.history.push('/Admin');
            });

           
    }

    componentDidMount() {
        const { image, keyword, type, date, mimetype, id } = this.props.location.state

        this.setState(
            {
                image: image,
                keyword: keyword,
                type: type,
                date: date,
                mimetype: mimetype,
                id: id
            }
        )

    }

    render() {
        const colorclass = ["badge badge-primary", "badge badge-secondary", "badge badge-success", "badge badge-danger", "badge badge-warning", "badge badge-info", "badge badge-light", "badge badge-dark"];
        return (
            <Fragment>
                <div className="site-section" data-aos="fade">
                    <div className="container-fluid">

                        <div className="row justify-content-center">
                            <div className="col-md-7">
                                <div className="row">
                                    <div className="col-lg-8 mb-5">
                                        <img src={`http://localhost:5000/${this.state.image}`} alt={this.state.date} className="img-fluid" style={{ width: '100%', height: '100%' }} />
                                    </div>
                                    <div className="col-lg-3 ml-auto">
                                        <div className="mb-3 bg-white">
                                            <p className="mb-0 font-weight-bold">Head/Title</p>
                                            <p className="mb-4">
                                                <Moment fromNow>
                                                    {this.state.date}
                                                </Moment>
                                            </p>


                                            <p className="mb-0 font-weight-bold">Desclaimer/Notes</p>
                                            <p className="mb-1">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce gravida efficitur ex et varius. Quisque sit amet fermentum sapien, nec scelerisque leo. Nunc dolor metus, auctor a mollis aliquam, tristique eu felis. Aenean iaculis ex vehicula, feugiat tortor id, posuere ipsum. Pellentesque erat quam, tempor ac faucibus sed, gravida aliquet nunc
                                            </p>
                                            <p className="mb-4">
                                                <Moment fromNow>
                                                    {this.state.date}
                                                </Moment>
                                            </p>


                                            <p className="mb-0 font-weight-bold"><b>Type</b></p>
                                            <div className="mb-4">
                                                <span className="badge badge-primary">{this.state.type}</span>
                                                <span className="badge badge-info">{this.state.mimetype}</span>
                                            </div>




                                            <p className="mb-0 font-weight-bold"><b>Tags</b></p>
                                            <div className="mb-4">

                                                {
                                                    this.state.keyword.map((val, key) => {
                                                        return (
                                                            <span className={`${colorclass[key]}`}>{val}</span>
                                                        );
                                                    })
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

export default Detail;
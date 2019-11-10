import React, { Fragment, Component } from 'react';
import axios from 'axios';
import {TYPE_API_URL, URL} from '../Const';



class Detailtype extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            image: null,
            mimetype: '',
            name: '',
            description: ''
        }
    }




    onDelete = (e) => {
        e.preventDefault();
        const url = `${TYPE_API_URL}/delete/${this.state.id}`;
        axios.delete(url).then(response => response.data)
            .then((data) => {
                this.props.history.push('/Auth-Type');
            });


    }

    componentDidMount() {

        if (this.props.location.state) {
            const { name, description, image, mimetype, id } = this.props.location.state
            localStorage.setItem('id', id);
            localStorage.setItem('name', name);
            localStorage.setItem('description', description);
            localStorage.setItem('image', image);
            localStorage.setItem('mimetype', mimetype);
        }
        this.setState(
            {
                id: localStorage.getItem('id'),
                name: localStorage.getItem('name'),
                description: localStorage.getItem('description'),
                image: localStorage.getItem('image'),
                mimetype: localStorage.getItem('mimetype')
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
                                            <img src={`${URL}/${this.state.image}`} alt={this.state.id} className="img-fluid" style={{ width: '100%', height: '100%' }} />
                                        </div>

                                    }
                                    <div className="col-lg-3 ml-auto">
                                        <div className="mb-3 bg-white">
                                            <p className="mb-0 font-weight-bold">{this.state.name}</p>
                                            {
                                                <p className="mb-1">
                                                    {this.state.description}
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

export default Detailtype;
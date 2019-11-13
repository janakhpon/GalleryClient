import React, { Fragment, Component } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
const API_URL = 'http://localhost:5000/tagapi';
const formData = new FormData();

class Tagform extends Component {
    _isMounted = false;


    constructor(props) {
        super(props);
        this.state = {
            name: '',
            tags: [],
            flag: 0
        }
    }





    handleName = (e) => {
        e.preventDefault();
        this.setState({
            name: e.target.value
        });
        formData.set('name', e.target.value);

    }

    handleSubmit = (e) => {
        e.preventDefault();
        const url = `${API_URL}/add`;

        axios({
            method: 'post',
            url: url,
            data: formData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        }).then(res => {
            toast.success('🦄 added new tag', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                className: 'form-group'
            });
            this.setState({
                name: ''
            })
        })
            .catch(res => {
                toast.error(`${res}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    className: 'form-group'
                });

            });



        const gurl = `${API_URL}/list`;
        axios.get(gurl).then(response => response.data).then((data) => {

            if (this._isMounted) {
                this.setState({
                    tags: data
                });
            }

        });


    }

    onDelete = (e) => {
        e.preventDefault();
        const url = `${API_URL}/delete/${this.state.id}`;
        axios.delete(url).then(response => response.data)
            .then((data) => {
                this.props.history.push('/Auth-Tag');
            });


    }

    componentDidMount() {
        this._isMounted = true;
        const url = `${API_URL}/list`;
        axios.get(url).then(response => response.data).then((data) => {

            if (this._isMounted) {
                this.setState({
                    tags: data
                });
            }

        });

    }


    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

        const badgeclasses = ['badge badge-pill badge-primary', 'badge badge-pill badge-secondary', 'badge badge-pill badge-success', 'badge badge-pill badge-danger', 'badge badge-pill badge-warning', 'badge badge-pill badge-info', 'badge badge-pill badge-light', 'badge badge-pill badge-dark'];
        return (
            <Fragment>
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
                                        <h2 className="site-section-heading text-center">Participate in Gallery</h2>

                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-8 mb-5">
                                        <form action="/">


                                            <div className="row form-group">

                                                <div className="col-md-12">
                                                    <label className="text-black" htmlFor="name">Add new tags</label>
                                                    <input type="text" id="name" name="name" className="form-control" onChange={this.handleName} />
                                                </div>
                                            </div>


                                            <div className="row form-group">
                                                <div className="col-md-12">
                                                    <input type="submit" value="Submit" className="" onClick={this.handleSubmit} />
                                                </div>
                                            </div>


                                        </form>
                                    </div>
                                    <div className="col-lg-3 ml-auto">
                                        <div className="mb-3 bg-white">
                                            <p className="mb-0 font-weight-bold">Desclaimer/Notes</p>
                                            <p className="mb-4">Type can be added dynamically and you need to choose <u>type</u> for optimized search, use `coma` for <u>tag</u> values </p>

                                            <p className="mb-0 font-weight-bold"><b>Tags</b></p>
                                            <div className="mb-0">

                                                {
                                                    this.state.tags.map((tag, key) => {
                                                        let gid = Math.floor((Math.random() * 7) + 1);
                                                        return (
                                                            <span className={`${badgeclasses[gid]}`} key={key}>{tag.name}</span>
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
                </div>

            </Fragment>
        );
    }
}

export default Tagform;

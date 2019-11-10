import React, { Fragment, Component } from 'react';
import axios from 'axios';
import { TAG_API_URL} from '../Const';
const formData = new FormData();

class Detailtag extends Component {
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
        const url = `${TAG_API_URL}/add`;

        axios({
            method: 'post',
            url: url,
            data: formData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        }).then(function (response) {

            console.log(response);
        })
            .catch(function (response) {
                this.setState({
                    name: ''
                })
            })



        const gurl = `${TAG_API_URL}/list`;
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
        const url = `${TAG_API_URL}/delete/${this.state.id}`;
        axios.delete(url).then(response => response.data)
            .then((data) => {
                this.props.history.push('/Auth-Tag');
            });


    }


    componentDidMount() {
        if (this.props.location.state) {
            localStorage.setItem('tagid', this.props.location.state.id);
            localStorage.setItem('tagname', this.props.location.state.name);

        }
        this.setState(
            {
                id: localStorage.getItem('tagid'),
                name: localStorage.getItem('tagname')
            }
        );


    }


    componentWillUnmount() {
        this._isMounted = false;
    }
    
    render() {
        return (
            <Fragment>
                <div className="site-section" data-aos="fade">
                    <div className="container-fluid">

                        <div className="row justify-content-center">
                            <div className="col-md-7">
                                <div className="row mb-5">
                                    <div className="col-12 ">
                                        <h2 className="site-section-heading text-center">Participate in Gallery</h2>

                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-12 mb-5">
                                        <form action="/">


                                            <div className="row form-group">

                                                <div className="col-md-12">
                                                    <label className="text-black" htmlFor="name">{this.state.id}</label>
                                                    <input type="text" id="name" name="name" className="form-control" onChange={this.handleName} value={this.state.name} />
                                                </div>
                                            </div>


                                            <div className="row form-group">
                                                <input type="submit" value="Submit" className="btn btn-md btn-success" onClick={this.handleSubmit} />
                                                <input type="submit" value="Delete" className="btn btn-md btn-danger" onClick={this.onDelete} />
                                            </div>


                                        </form>
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

export default Detailtag;

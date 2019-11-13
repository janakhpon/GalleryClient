import React, { Fragment, Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment';
import { tagclasses, GALARIE_API_URL } from '../Const';
import { Link } from 'react-router-dom';
import './index.css';

const descriptionOptions = [];
const tempOptions = [];
let mmval = '';

class Sortdate extends Component {


    constructor(props) {
        super(props);
        this.state = {
            wallpapers: []
        }

        this.image = React.createRef();
    }



    getGalarie = () => {
        let url = `${GALARIE_API_URL}/list`;
        axios.get(url).then(response => response.data).then((data) => {
            this.setState({
                wallpapers: data
            });


            this.state.wallpapers.map((wallpaper, key) => {
                let temp = { value: wallpaper.description, label: wallpaper.description };
                return descriptionOptions.push(temp);
            });

        });

    };




    componentDidMount() {
        this.getGalarie();


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
                                        <h2 className="site-section-heading text-center">Sort By Date</h2>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-7 mb-5">
                                        <p className="mb-2 font-weight-bold text-center"> date on list </p>
                                        <div className="mb-4">
                                            {
                                                this.state.wallpapers.forEach((wallval, i) => {
                                                    mmval = moment(wallval.date).fromNow();
                                                    let temp = { value: moment(wallval.date).fromNow(), label: i }
                                                    tempOptions.push(temp);
                                                    console.log(i + ":" + mmval);
                                                    console.log(tempOptions);
                                                })
                                            }
                                            {
                                                this.state.wallpapers.map((wall, key) => {
                                                    let gid = Math.floor(Math.random() * 7) + 0;

                                                    return (
                                                        <Link to={{
                                                            pathname: `/Dash-Date`,
                                                            state: {
                                                                date: wall.date,
                                                                tempOptions: tempOptions
                                                            }
                                                        }} className={`${tagclasses[gid]}`} key={key}>{moment(wall.date).fromNow()}</Link>
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
    };
}

export default Sortdate;

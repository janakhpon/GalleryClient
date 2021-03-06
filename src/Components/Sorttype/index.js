import React, { Fragment, Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { typeclasses} from '../Const';
import './index.css';
const TYPE_API_URL = 'http://localhost:5000/typeapi';
const TAG_API_URL = 'http://localhost:5000/tagapi';
const GALARIE_API_URL = 'http://localhost:5000/galarieapi';

const descriptionOptions = [];
const tagOptions = [];
const typeOptions = [];
const formData = new FormData();

class Sorttype extends Component {


    constructor(props) {
        super(props);
        this.state = {
            selectedTypes: null,
            selectedTags: [],
            selectedDevices: [],
            wallpapers: [],
            desOptions: [],
            tags: [],
            types: [],
            title: '',
            choice: 0,
            rate: 0,
            description: '',
            image: null
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

    }


    getTag = () => {
        let url = `${TAG_API_URL}/list`;
        axios.get(url).then(response => response.data).then(data => {
            this.setState({
                tags: data
            });
            this.state.tags.map((tag, key) => {
                let temp = { value: tag.name, label: tag.name }
                return tagOptions.push(temp);
            });
        })
    }


    getType = () => {
        let url = `${TYPE_API_URL}/list`;
        axios.get(url).then(response => response.data).then(data => {
            this.setState({
                types: data
            });
            this.state.types.map((type, key) => {
                let temp = { value: type.name, label: type.name }
                return typeOptions.push(temp);
            })
        })
    }



    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value
        });
        formData.set('title', e.target.value);

    }

    handleTypeChange = selectedTypes => {
        this.setState({ selectedTypes, type: selectedTypes.value });
        formData.set('type', selectedTypes.value);
    };

    handleTagChange = selectedTags => {
        this.setState({ selectedTags });
        try {
            //use not to repeat arrary value
            let tagHost = [...new Set(selectedTags.map(a => a.value))];
            formData.set('keyword', tagHost);
        } catch (err) {
            console.log("null is not accepatble");
        }

    }

    handleDeviceChange = selectedDevices => {
        this.setState({ selectedDevices });
        try {
            //use not to repeat arrary value
            let tagHost = [...new Set(selectedDevices.map(a => a.value))];
            formData.set('devices', tagHost);
        } catch (err) {
            console.log("null is not accepatble");
        }

    }


    handleDescriptionChange = (e) => {
        this.setState({
            description: e.target.value
        });
        formData.set('description', e.target.value);


    }

    handleRateChange = (e) => {
        this.setState({ rate: e.target.value });
        formData.set('rate', e.target.value);
    }
    handleChoiceChange = (e) => {
        this.setState({ choice: e.target.value });
        formData.set('choice', e.target.value);

    }

    handleImageChange = (e) => {
        this.setState({
            image: e.target.files
        });
        formData.append('image', e.target.files[0])
    }

    postGalarie = () => {

    }

    handleSubmit = (e) => {
        e.preventDefault();
        const url = `${GALARIE_API_URL}/add`;


        axios({
            method: 'post',
            url: url,
            data: formData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            })




    }



    componentDidMount() {
        this.getTag();
        this.getType();
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
                                        <h2 className="site-section-heading text-center">Sort By Type</h2>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-7 mb-5">
                                        <p className="mb-2 font-weight-bold text-center"> available types </p>
                                        <div className="mb-4">
                                            {/**
                                                starting from index 0 to 7
                                                */}
                                            {
                                                typeOptions.map((type, key) => {
                                                    let gid = Math.floor(Math.random() * 7) + 0;
                                                    return (
                                                        <Link to={{
                                                            pathname: `/Dash-Type`,
                                                            state: {
                                                              type:type.value
                                                            }
                                                          }} className={`${typeclasses[gid]}`} key={key}>{type.value}</Link>
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

export default Sorttype;

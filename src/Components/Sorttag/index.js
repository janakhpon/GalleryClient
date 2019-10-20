import React, { Fragment, Component } from 'react';
import Select from 'react-select';
import axios from 'axios';
const TYPE_API_URL = 'http://localhost:5000/typeapi';
const TAG_API_URL = 'http://localhost:5000/tagapi';
const GALARIE_API_URL = 'http://localhost:5000/galarieapi';

const descriptionOptions = [];
const tagOptions = [];
const typeOptions = [];
const deviceOptions = [
    { value: 'iPhone11', label: 'iPhone11' },
    { value: 'iPhone11s', label: 'iPhone11s' },
    { value: 'iPhoneXs', label: 'iPhoneXs' },
    { value: 'iPhoneX', label: 'iPhoneX' },
    { value: 'iPhone7s', label: 'iPhone7s' },
    { value: 'iPhone7', label: 'iPhone7' },
    { value: 'iPhone7sPro', label: 'iPhone7sPro' },
    { value: 'iPhone7Pro', label: 'iPhone7Pro' },
    { value: 'iPhone6sPro', label: 'iPhone6sPro' }
];
const formData = new FormData();

class Sorttag extends Component {


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
        console.log(e.target.value);
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
        const { selectedTypes, selectedTags, selectedDevices } = this.state;
        const tagclasses = ['badge badge-pill badge-primary', 'badge badge-pill badge-secondary', 'badge badge-pill badge-success', 'badge badge-pill badge-danger', 'badge badge-pill badge-warning', 'badge badge-pill badge-info', 'badge badge-pill badge-light', 'badge badge-pill badge-dark'];
        const typeclasses = ['badge badge-primary', 'badge badge-secondary', 'badge badge-success', 'badge badge-danger', 'badge badge-warning', 'badge badge-info', 'badge badge-light', 'badge badge-dark'];

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
                                    <div className="col-lg-8 mb-5">
                                    <p className="mb-0 font-weight-bold"><b>Types</b></p>
                                            <div className="mb-4">
                                                {/**
                                                starting from index 0 to 7
                                                */}
                                                {
                                                    typeOptions.map((type, key) => {
                                                        let gid = Math.floor(Math.random() * 7) + 0;
                                                        return (
                                                            <span className={`${typeclasses[gid]}`} key={key}>{type.value}</span>
                                                        );
                                                    })
                                                }


                                            </div>
                                    </div>
                                    <div className="col-lg-3 ml-auto">
                                        <div className="mb-3 bg-white">
                                            <p className="mb-0 font-weight-bold">Desclaimer/Notes</p>

                                            {/*{
                                                    descriptionOptions.map((des, key)=>{
                                                        return (<p className="mb-4" key={key}>{des.value}</p>);
                                                    })
                                                } */}
                                            {

                                                (descriptionOptions.length === 0) ? <p className="mb-4">none</p> : <p className="mb-4">{descriptionOptions[Math.floor(Math.random() * descriptionOptions.length) + 0].value}</p>
                                            }


                                            <p className="mb-0 font-weight-bold"><b>Types</b></p>
                                            <div className="mb-4">
                                                {/**
                                                starting from index 0 to 7
                                                */}
                                                {
                                                    typeOptions.map((type, key) => {
                                                        let gid = Math.floor(Math.random() * 7) + 0;
                                                        return (
                                                            <span className={`${typeclasses[gid]}`} key={key}>{type.value}</span>
                                                        );
                                                    })
                                                }


                                            </div>


                                            <p className="mb-0 font-weight-bold"><b>Tags</b></p>
                                            <div className="mb-0">

                                                {
                                                    tagOptions.map((tag, key) => {
                                                        let gid = Math.floor(Math.random() * 7) + 0;
                                                        return (
                                                            <span className={`${tagclasses[gid]}`} key={key}>{tag.value}</span>
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
    };
}

export default Sorttag;

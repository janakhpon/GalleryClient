import React, { Fragment, Component } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

class Uploadform extends Component {


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
                toast.success('🦄 Wow so easy!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    className:'form-group'
                });

                this.setState({
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
                })
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
                                <div className="row">
                                    <div className="col-lg-8 mb-5">
                                        <form action="/">

                                            <div className="row form-group">

                                                <div className="col-md-12">
                                                    <label className="text-black" htmlFor="typeform">Categories</label>
                                                    <Select className="form-group" value={selectedTypes}
                                                        onChange={this.handleTypeChange}
                                                        options={typeOptions} />
                                                </div>
                                            </div>


                                            <div className="row form-group">

                                                <div className="col-md-12">
                                                    <label className="text-black" htmlFor="title">title</label>
                                                    <input type="text" id="title" className="form-control" onChange={this.handleTitleChange} />
                                                </div>
                                            </div>

                                            <div className="row form-group">

                                                <div className="col-md-12">
                                                    <label className="text-black" htmlFor="tags">tags</label>
                                                    <Select
                                                        defaultValue={[deviceOptions[2], deviceOptions[3]]}
                                                        isMulti
                                                        name="colors"
                                                        value={selectedDevices}
                                                        onChange={this.handleDeviceChange}
                                                        options={deviceOptions}
                                                        className="basic-multi-select"
                                                        classNamePrefix="select"
                                                    />
                                                </div>
                                            </div>

                                            <div className="row form-group">

                                                <div className="col-md-12">
                                                    <label className="text-black" htmlFor="tags">tags</label>
                                                    <Select
                                                        defaultValue={[tagOptions[2], tagOptions[3]]}
                                                        isMulti
                                                        name="colors"
                                                        value={selectedTags}
                                                        onChange={this.handleTagChange}
                                                        options={tagOptions}
                                                        className="basic-multi-select"
                                                        classNamePrefix="select"
                                                    />
                                                </div>
                                            </div>

                                            <div className="row form-group">

                                                <div className="col-md-12">
                                                    <label className="text-black" htmlFor="rate">Rate it out of 5</label>
                                                    <input type="number" value={this.state.rate} id="rate" className="form-control" min="0" max="5" onChange={this.handleRateChange} />
                                                </div>
                                            </div>
                                            <div className="row form-group">

                                                <div className="col-md-12">
                                                    <label className="text-black" htmlFor="choice">Choice out of 100</label>
                                                    <input type="range" name="choice" id="choice" min="0" max="100" className="form-control" onChange={this.handleChoiceChange} />
                                                </div>
                                            </div>
                                            <div className="row form-group">
                                                <div className="col-md-12">
                                                    <label className="text-black" htmlFor="description">description</label>
                                                    <textarea name="description" id="description" cols="30" rows="7" className="form-control" onChange={this.handleDescriptionChange} placeholder="Write your notes or questions here..."></textarea>
                                                </div>
                                            </div>

                                            <div className="row form-group">
                                                <div className="col-md-12">
                                                    <label htmlFor="image">Your Art</label>
                                                    <input type="file" className="form-control-file" id="image" name="image" ref={this.image} onChange={this.handleImageChange} />
                                                </div>
                                            </div>


                                            <div className="row form-group">
                                                <div className="col-md-12">
                                                    <input type="submit" value="upload to Gallery" className="btn btn-primary py-2 px-4 text-white" onClick={this.handleSubmit} />
                                                </div>
                                            </div>


                                        </form>
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

export default Uploadform;

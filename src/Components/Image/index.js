import React, { Component } from 'react';
import Moment from 'react-moment';

export default class Image extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            mimetype: props.mimetype,
            image: props.image,
            type: props.type,
            date: props.date,
            keyword: props.keyword,
            key: props.id
        }
    }

    render() {
        return (

            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src={`http://localhost:5000/${this.state.image}`} data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloremque hic excepturi fugit, sunt impedit fuga tempora, ad amet aliquid?</p>">
                <a href="#"><img src={`http://localhost:5000/${this.state.image}`} alt={this.state.date} className="img-fluid" /></a>
            </div>

        );
    }
}
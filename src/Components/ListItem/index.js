import React  from 'react';
import Moment from 'react-moment';
import { getList } from '../../Axios';



export default class ListItem extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      id: props.id,
      mimetype:props.mimetype,
      image:props.image,
      type:props.type,
      date:props.date,
      keyword:props.keyword,
      key:props.key
    }

    console.log(this.state.date);

  }


  async getData(){
    await getList();
  }


  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <React.Fragment>
          <ul>
              <li>{this.state.id}</li>
              <li><Moment fromNow ago>{this.state.date}</Moment> ago</li>
              <li>{this.state.image}</li>
              <li><img src={`http://localhost:5000/${this.state.image}`} alt={this.state.date} /></li>
          </ul>
      </React.Fragment>
    );
  }
}
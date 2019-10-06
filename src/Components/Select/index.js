import React from 'react';

class Select extends React.Component {
    constructor(props) {
      super(props)
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
      this.props.setValue(e.target.value);
    }
    render() {
      const options = this.props.options.map(elem => (
        <option value={elem}>{elem}</option>
      ));
      return (
        <select value={this.props.value} onChange={this.handleChange}>
        {options}
        </select>
      );
    }
  }

  export default Select;
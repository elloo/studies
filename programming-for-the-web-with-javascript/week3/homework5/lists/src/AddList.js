import React, { Component } from 'react';

class AddList extends Component {
  constructor(props){
      super(props);
      this.state = {s: ''};      
  }

  handleSubmit(e) {      
      e.preventDefault(); // this prevents the page from reloading -- do not delete this line!
      this.setState({s: this.refs.id.value});   // "this.refs.id.value" from course material.      
      this.props.addList(this.refs.id.value);   // Invoking handleAddList function from App.js
  }

  render() {
    return (
      <div id="addListDiv">
      <form onSubmit={this.handleSubmit.bind(this)}>
      <div id='addList'>
      <label>What will be on your next list?&nbsp;
      <input type='text' ref='id' id='newID'></input>
      </label>
      </div><br />
      <input type='submit' value='Create List' />
      </form>
      </div>
    );
  }
}

export default AddList;

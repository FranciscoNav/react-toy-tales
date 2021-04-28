import React, { Component } from 'react';

class ToyForm extends Component {
  state ={
    name:'',
    image:'',
    likes:0
  }

  handleChange=(event)=>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit=(event)=>{
    event.preventDefault()
    this.props.addToy({ 
      name: this.state.name,
      image: this.state.image,
      likes: this.state.likes
    })
  }

  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.handleSubmit}>
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text" onChange={this.handleChange} value={this.state.name}/>
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text" onChange={this.handleChange} value={this.state.image}/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;

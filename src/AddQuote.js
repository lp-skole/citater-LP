import React, { Component } from 'react';

class AddQuote extends Component {
  state = {
    title: null,
    quote: null,
    author: null
  }
  handleChange = (e) =>{
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    this.props.addQuote(this.state);
    this.setState({
      title: '',
      quote: '',
      author: ''
    })

  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="block">
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" onChange={this.handleChange}/>
          </div>
          <div className="block">
            <label htmlFor="quote">Quote:</label>
            <input type="text" id="quote" onChange={this.handleChange}/>
          </div>
          <div className="block">
            <label htmlFor="author">By:</label>
            <input type="text" id="author" onChange={this.handleChange}/>
          </div>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default AddQuote
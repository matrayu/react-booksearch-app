import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  handleSearchChanged = (e) => {
    this.searchChanged(e.target.value)
  };

  searchChanged = (searchTerm) => {
    this.setState({ title: searchTerm })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.title !== "") {
      this.props.handleSearch(this.state.title)
    }
    else {
      console.log('Nothing entered!')
      return
    }
  };

  
  render() {
    return (
      <div className="search">
        <form className="search__form" onSubmit={this.handleSubmit}>
          <label htmlFor="search"></label>
          <input type="text" name="search" id="search" placeholder="Shantaram" defaultValue={this.props.searchTerm} onChange={this.handleSearchChanged} />
          <div className="search__button">
            <button type="submit">Search</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
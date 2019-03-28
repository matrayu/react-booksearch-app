import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  handleSearch = (e) => {
    this.handleSubmit(e.target.value)
  };

  handleSubmit = (searchTerm) => {
    this.props.handleSearch(searchTerm)
  };

  
  render() {
    return (
      <div className="search">
        <form className="search__form">
            <label htmlFor="search">Search:</label>
            <input type="text" name="search" id="search" placeholder="Shantaram" value={this.props.searchTerm} onChange={this.handleSearch} />
        </form>
      </div>
    );
  }
}

export default Search;
import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  render() {
    return (
      <div className="search">
        <form className="search__form">
            <label htmlFor="search">Search:</label>
            <input type="text" name="search" id="search" placeholder="Shantaram"/>
        </form>
      </div>
    );
  }
}

export default Search;
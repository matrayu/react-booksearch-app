import React, { Component } from 'react';
import Search from '../Search/Search'
import Filter from '../Filter/Filter'

import './SearchParams.css';

class SearchParams extends Component {
  render() {
    return (
      <div className="searchParams">
        <Search 
          handleSearch={this.props.handleSearch}
          searchTerm={this.props.searchTerm}
          />
        <Filter 
          bookType={this.props.bookType}
          printType={this.props.printType}
          handlePrintType={this.props.handlePrintType}
          handleBookType={this.props.handleBookType}
        />
      </div>
    );
  }
}

export default SearchParams;
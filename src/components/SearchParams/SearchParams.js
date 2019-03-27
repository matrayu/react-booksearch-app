import React, { Component } from 'react';
import Search from '../Search/Search'
import Filter from '../Filter/Filter'

import './SearchParams.css';

class SearchParams extends Component {
  render() {
    return (
      <div className="searchParams">
        <Search />
        <Filter />
      </div>
    );
  }
}

export default SearchParams;
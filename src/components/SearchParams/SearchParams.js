import React, { Component } from 'react';
import Search from '../Search/Search'
import Filter from '../Filter/Filter'
import BookResults from '../BookResults/BookResults'

import './SearchParams.css';

class SearchParams extends Component {
  render() {
    return (
      <div className="SearchParams">
        <Search />
        <Filter />
        <BookResults />
      </div>
    );
  }
}

export default SearchParams;
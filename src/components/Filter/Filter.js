import React, { Component } from 'react';
import './Filter.css';

class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <form className="filter__form">
            <label>Print Type:
                <select>
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="magazines">Magazines</option>
                </select>    
            </label> 
            <label>Book Type: 
                <select>
                    <option value="no-filter">No Filter</option>
                    <option value="ebooks">eBooks</option>
                    <option value="free-ebooks">Free eBooks</option>
                    <option value="full">Full</option>
                    <option value="paid-ebooks">Paid eBooks</option>
                    <option value="partial">Partial</option>
                </select>    
            </label> 
        </form>
      </div>
    );
  }
}

export default Filter;
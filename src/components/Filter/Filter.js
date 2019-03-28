import React, { Component } from 'react';
import './Filter.css';

class Filter extends Component {
  handlePrintType = (e) => {
    this.filterPrintType(e.target.value)
  };

  filterPrintType = (printType) => {
    this.props.handlePrintType(printType)
  };

  handleBookType = (e) => {
    this.filterBookType(e.target.value)
  };

  filterBookType = (bookType) => {
    this.props.handleBookType(bookType)
  };

  render() {
    return (
      <div className="filter">
        <form className="filter__form">
            <label>Print Type:
                <select defaultValue={this.props.printType} onChange={this.handlePrintType}>
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="magazines">Magazines</option>
                </select>    
            </label> 
            <label>Book Type: 
                <select defaultValue={this.props.bookType} onChange={this.handleBookType}>
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
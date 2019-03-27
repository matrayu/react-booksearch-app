import React, { Component } from 'react';
import Book from '../Book/Book'
import './BookResults.css';

class BookResults extends Component {
  render() {
    return (
      <div className="bookResults">
        <Book />
      </div>
    );
  }
}


export default BookResults;
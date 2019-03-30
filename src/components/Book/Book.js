import React, { Component } from 'react';
import './Book.css';

class Book extends Component {
  render() {
    const {book} = this.props;

    const priceFormat = book.price
      ? new Intl.NumberFormat(`${book.country}`, { style: 'currency', currency: `${book.currencyCode}` }).format(book.price)
      : 'Not For Sale';

    return (
      <div className="book">
        <div className="book__row">
          <h2 className="book__title">{book.title}</h2>
        </div>
        <div className="book__details">
          <div className="book__image">
            <img src={book.thumbnail} title={book.title} alt='No Img Available' />
          </div>
          <div className="book__subDetails">
            <div className="book__author">Author: {book.author}</div>
            <div className="book__price">Price: {priceFormat}</div>
            <div className="book__description">{book.shortDescription}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Book;
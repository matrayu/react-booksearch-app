import React, { Component } from 'react';
import './Book.css';

class Book extends Component {
  render() {
    return (
      <div className="book">
        <div className="book__row">
          <h2 className="book__title">{this.props.book.title}</h2>
        </div>
        <div className="book__details">
          <div className="book__image">
            <img src={this.props.book.thumbnail} title={this.props.book.title} alt={this.props.book.title} />
          </div>
          <div className="book__subDetails">
            <div className="book__author">Author: {this.props.book.author}</div>
            <div className="book__price">Price: {this.props.book.price}</div>
            <div className="book__description">{this.props.book.shortDescription}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Book;
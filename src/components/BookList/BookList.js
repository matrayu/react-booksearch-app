import React, { Component } from 'react';
import Book from '../Book/Book'
import './BookList.css';

class BookList extends Component {
  render() {
    console.log(this.props.bookList)
    const books = this.props.bookList.map((book, i) => {
      const bookObj = {
        key:{i},
        title: book.volumeInfo.title,
        isEbook: book.saleInfo.isEbook,
        description: book.volumeInfo.description,
        shortDescription: book.searchInfo.textSnippet,
        thumbnail: book.volumeInfo.imageLinks.thumbnail,
        author: book.volumeInfo.authors,
        country: book.saleInfo.country,
        /* price: 10.00,
        currencyCode: 'USD', */
        price: book.saleInfo.listPrice.amount,
        currencyCode: book.saleInfo.listPrice.currencyCode,
        saleability: book.saleInfo.saleability,
      }
      return <Book book={bookObj} key={i} />;
    });

    return (
      <div className="bookList">
        {books}
      </div>
    );
  }
}


export default BookList;
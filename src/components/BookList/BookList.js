import React, { Component } from 'react';
import Book from '../Book/Book'
import './BookList.css';

class BookList extends Component {

  render() {
    let books = ''
    if(this.props.bookList) {
      books = this.props.bookList.map((book, i) => {
        const bookObj = {
          title: book.volumeInfo.title,
          isEbook: book.saleInfo.isEbook,
          description: book.volumeInfo.description,
          shortDescription: book.searchInfo ? book.searchInfo.textSnippet : '',
          thumbnail: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : '',
          author: book.volumeInfo.authors,
          country: book.saleInfo.country,
          price: book.saleInfo.listPrice ? book.saleInfo.listPrice.amount : '',
          currencyCode: book.saleInfo.listPrice ? book.saleInfo.listPrice.currencyCode : '',
          saleability: book.saleInfo.saleability,
        }
        return <Book book={bookObj} key={i} />;
      })
    } else {
      books = `Your search - ${this.props.searchTerm} - did not match any book results.`
    }

    return (
      <div className="bookList">
        {books}
      </div>
    );
  }
}


export default BookList;
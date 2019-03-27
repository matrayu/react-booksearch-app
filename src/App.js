import React, { Component } from 'react';
import SearchParams from './components/SearchParams/SearchParams'
import BookList from './components/BookList/BookList'

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Google Book Search</h1>
          <SearchParams />
          <BookList bookList={this.props.books}/>
        </header>
      </div>
    );
  }
}

export default App;

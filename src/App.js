import React, { Component } from 'react';
import SearchParams from './components/SearchParams/SearchParams'
import Data from './Data'

import './App.css';

const staticBooks = Data.store.items
console.log(staticBooks)


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Google Book Search</h1>
          <SearchParams />
        </header>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import SearchParams from "./components/SearchParams/SearchParams";
import BookList from "./components/BookList/BookList";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      searchTerm: "",
      printType: "All",
      bookType: "No Filter"
    };
  }
  
  componentWillUpdate(nextProps, nextState) {
    let searchParams = '';
    if(nextState.searchTerm !== this.state.searchTerm || nextState.printType !== this.state.printType || nextState.bookType !== this.state.bookType) {
      if(nextState.bookType === 'No Filter') {
        searchParams = encodeURI(`q=${nextState.searchTerm}&printType=${nextState.printType}&`);
      } 
      else {
        searchParams = encodeURI(`q=${nextState.searchTerm}&filter=${nextState.bookType}&printType=${nextState.printType}&`);
      };
      console.log('Updating!')
      const baseUrl = "https://www.googleapis.com/books/v1/volumes?";
      const apiKey = "key=AIzaSyCqjl3i6rIksJupnO7JqAm9J3Bf9qPMR4E";
      const searchUrl = baseUrl + searchParams + apiKey;
      const options = {
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      };

      fetch(searchUrl, options)
        .then(res => {
          console.log('API Call!', searchUrl)
          if (!res.ok) {
            throw new Error("Something went wrong, please try again later");
          }
          return res;
        })
        .then(res => res.json())
        .then(data => {
          this.setState({
            items: data.items,
            error: null
          });
        })
        .catch(err => {
          this.setState({
            error: err.message
          });
        });
    };
  };
  

  handleSearch(searchTerm) {
    this.setState({ searchTerm: searchTerm })
  };

  handlePrintType(printType) {
    this.setState({ printType: printType })
  };

  handleBookType(bookType) {
    this.setState({ bookType: bookType })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Google Book Search</h1>
          <SearchParams
            handleSearch={searchTerm => this.handleSearch(searchTerm)}
            handlePrintType={printType => this.handlePrintType(printType)}
            handleBookType={bookType => this.handleBookType(bookType)}
            searchTerm={this.state.searchTerm}
            printType={this.state.printType}
            bookType={this.state.bookType}
          />
          <BookList bookList={this.state.items} searchTerm={this.state.searchTerm} />
        </header>
      </div>
    );
  }
}

export default App;

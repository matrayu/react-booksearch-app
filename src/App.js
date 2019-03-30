import React, { Component } from "react";
import SearchParams from "./components/SearchParams/SearchParams";
import BookList from "./components/BookList/BookList";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        /* {
            "kind": "books#volume",
            "id": "1nOvLGnVZJAC",
            "etag": "Z/+rTuOnRUA",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/1nOvLGnVZJAC",
            "volumeInfo": {
                "title": "Shantaram",
                "subtitle": "A Novel",
                "authors": [
                    "Gregory David Roberts"
                ],
                "publisher": "St. Martin's Press",
                "publishedDate": "2004-10-13",
                "description": "\"It took me a long time and most of the world to learn what I know about love and fate and the choices we make, but the heart of it came to me in an instant, while I was chained to a wall and being tortured.\" So begins this epic, mesmerizing first novel by Gregory David Roberts, set in the underworld of contemporary Bombay. Shantaram is narrated by Lin, an escaped convict with a false passport who flees maximum security prison in Australia for the teeming streets of a city where he can disappear. Accompanied by his guide and faithful friend, Prabaker, the two enter Bombay's hidden society of beggars and gangsters, prostitutes and holy men, soldiers and actors, and Indians and exiles from other countries, who seek in this remarkable place what they cannot find elsewhere. As a hunted man without a home, family, or identity, Lin searches for love and meaning while running a clinic in one of the city's poorest slums, and serving his apprenticeship in the dark arts of the Bombay mafia. The search leads him to war, prison torture, murder, and a series of enigmatic and bloody betrayals. The keys to unlock the mysteries and intrigues that bind Lin are held by two people. The first is Khader Khan: mafia godfather, criminal-philosopher-saint, and mentor to Lin in the underworld of the Golden City. The second is Karla: elusive, dangerous, and beautiful, whose passions are driven by secrets that torment her and yet give her a terrible power. Burning slums and five-star hotels, romantic love and prison agonies, criminal wars and Bollywood films, spiritual gurus and mujaheddin guerrillas---this huge novel has the world of human experience in its reach, and a passionate love for India at its heart. Based on the life of the author, it is by any measure the debut of an extraordinary voice in literature.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_10",
                        "identifier": "1429908270"
                    },
                    {
                        "type": "ISBN_13",
                        "identifier": "9781429908276"
                    }
                ],
                "readingModes": {
                    "text": true,
                    "image": false
                },
                "pageCount": 944,
                "printType": "BOOK",
                "categories": [
                    "Fiction"
                ],
                "averageRating": 4,
                "ratingsCount": 133,
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "6.24.19.0.preview.2",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=1nOvLGnVZJAC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=1nOvLGnVZJAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=1nOvLGnVZJAC&printsec=frontcover&dq=shantaram&hl=&as_brr=5&as_pt=BOOKS&cd=1&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=1nOvLGnVZJAC&source=gbs_api",
                "canonicalVolumeLink": "https://market.android.com/details?id=book-1nOvLGnVZJAC"
            },
            "saleInfo": {
                "country": "US",
                "saleability": "FOR_SALE",
                "isEbook": true,
                "listPrice": {
                    "amount": 9.99,
                    "currencyCode": "USD"
                },
                "retailPrice": {
                    "amount": 9.99,
                    "currencyCode": "USD"
                },
                "buyLink": "https://play.google.com/store/books/details?id=1nOvLGnVZJAC&rdid=book-1nOvLGnVZJAC&rdot=1&source=gbs_api",
                "offers": [
                    {
                        "finskyOfferType": 1,
                        "listPrice": {
                            "amountInMicros": 9990000,
                            "currencyCode": "USD"
                        },
                        "retailPrice": {
                            "amountInMicros": 9990000,
                            "currencyCode": "USD"
                        },
                        "giftable": true
                    }
                ]
            },
            "accessInfo": {
                "country": "US",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.com/books/download/Shantaram-sample-epub.acsm?id=1nOvLGnVZJAC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=1nOvLGnVZJAC&hl=&as_brr=5&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "Burning slums and five-star hotels, romantic love and prison agonies, criminal wars and Bollywood films, spiritual gurus and mujaheddin guerrillas---this huge novel has the world of human experience in its reach, and a passionate love for ..."
            }
        },
        {
            "kind": "books#volume",
            "id": "VX-uCgAAQBAJ",
            "etag": "mT4E0moLuQ4",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/VX-uCgAAQBAJ",
            "volumeInfo": {
                "title": "The Mountain Shadow",
                "subtitle": "",
                "authors": [
                    "Gregory David Roberts"
                ],
                "publisher": "Zola Books",
                "publishedDate": "2015-10-13",
                "description": "Shantaram introduced millions of readers to a cast of unforgettable characters in the hidden heart of Bombay through Lin, an Australian fugitive, working as a passport forger for a branch of the Bombay mafia. In The Mountain Shadow, the long awaited sequel, Lin must find his way in a Bombay run by a different generation of mafia dons, playing by a different set of rules. It has been two years since the events in Shantaram, and since Lin lost two people he had come to love: his father figure, Khaderbhai, and his soul mate, Karla, married to a handsome Indian media tycoon. Lin returns from a smuggling trip to a city that seems to have changed too much, too soon. Many of his old friends are long gone, the new mafia leadership has become entangled in increasingly violent and dangerous intrigues, and a fabled holy man challenges everything that Lin thought he'd learned about love and life. But Lin can't leave the Island City: Karla, and a fatal promise, won't let him go.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9781939126238"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "1939126231"
                    }
                ],
                "readingModes": {
                    "text": true,
                    "image": true
                },
                "pageCount": 874,
                "printType": "BOOK",
                "categories": [
                    "Fiction"
                ],
                "averageRating": 5,
                "ratingsCount": 1,
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "1.1.1.0.preview.3",
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=VX-uCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=VX-uCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=VX-uCgAAQBAJ&printsec=frontcover&dq=shantaram&hl=&as_brr=5&as_pt=BOOKS&cd=2&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=VX-uCgAAQBAJ&source=gbs_api",
                "canonicalVolumeLink": "https://market.android.com/details?id=book-VX-uCgAAQBAJ"
            },
            "saleInfo": {
                "country": "US",
                "saleability": "FOR_SALE",
                "isEbook": true,
                "listPrice": {
                    "amount": 9.99,
                    "currencyCode": "USD"
                },
                "retailPrice": {
                    "amount": 9.99,
                    "currencyCode": "USD"
                },
                "buyLink": "https://play.google.com/store/books/details?id=VX-uCgAAQBAJ&rdid=book-VX-uCgAAQBAJ&rdot=1&source=gbs_api",
                "offers": [
                    {
                        "finskyOfferType": 1,
                        "listPrice": {
                            "amountInMicros": 9990000,
                            "currencyCode": "USD"
                        },
                        "retailPrice": {
                            "amountInMicros": 9990000,
                            "currencyCode": "USD"
                        },
                        "giftable": true
                    }
                ]
            },
            "accessInfo": {
                "country": "US",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.com/books/download/The_Mountain_Shadow-sample-epub.acsm?id=VX-uCgAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.com/books/download/The_Mountain_Shadow-sample-pdf.acsm?id=VX-uCgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=VX-uCgAAQBAJ&hl=&as_brr=5&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "In The Mountain Shadow, the long awaited sequel, Lin must find his way in a Bombay run by a different generation of mafia dons, playing by a different set of rules."
            }
        },
        {
            "kind": "books#volume",
            "id": "QoYrDwAAQBAJ",
            "etag": "wzsLM+jiQHY",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/QoYrDwAAQBAJ",
            "volumeInfo": {
                "title": "Limits of the Known",
                "authors": [
                    "David Roberts"
                ],
                "publisher": "W. W. Norton & Company",
                "publishedDate": "2018-02-20",
                "description": "A celebrated mountaineer and author searches for meaning in great adventures and explorations, past and present. David Roberts, \"veteran mountain climber and chronicler of adventures\" (Washington Post), has spent his career documenting voyages to the most extreme landscapes on earth. In Limits of the Known, he reflects on humanity’s—and his own—relationship to extreme risk. Part memoir and part history, this book tries to make sense of why so many have committed their lives to the desperate pursuit of adventure. In the wake of his diagnosis with throat cancer, Roberts seeks answers with sharp new urgency. He explores his own lifelong commitment to adventuring, as well as the cultural contributions of explorers throughout history: What specific forms of courage and commitment did it take for Fridtjof Nansen to survive an eighteen-month journey from a record \"farthest north\" with no supplies and a single rifle during his polar expedition of 1893–96? What compelled Eric Shipton to return, five times, to the ridges of Mt. Everest, plotting the mountain’s most treacherous territory years before Hillary and Tenzing’s famous ascent? What drove Bill Stone to dive 3,000 feet underground into North America’s deepest cave? What motivates the explorers we most admire, who are willing to embark on perilous journeys and push the limits of the human body? And what is the future of adventure in a world we have mapped and trodden from end to end?",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9780393609875"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "0393609871"
                    }
                ],
                "readingModes": {
                    "text": true,
                    "image": false
                },
                "pageCount": 336,
                "printType": "BOOK",
                "categories": [
                    "Sports & Recreation"
                ],
                "averageRating": 5,
                "ratingsCount": 1,
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "1.9.9.0.preview.2",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=QoYrDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=QoYrDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=QoYrDwAAQBAJ&printsec=frontcover&dq=shantaram&hl=&as_brr=5&as_pt=BOOKS&cd=3&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=QoYrDwAAQBAJ&source=gbs_api",
                "canonicalVolumeLink": "https://market.android.com/details?id=book-QoYrDwAAQBAJ"
            },
            "saleInfo": {
                "country": "US",
                "saleability": "FOR_SALE",
                "isEbook": true,
                "listPrice": {
                    "amount": 16.95,
                    "currencyCode": "USD"
                },
                "retailPrice": {
                    "amount": 9.99,
                    "currencyCode": "USD"
                },
                "buyLink": "https://play.google.com/store/books/details?id=QoYrDwAAQBAJ&rdid=book-QoYrDwAAQBAJ&rdot=1&source=gbs_api",
                "offers": [
                    {
                        "finskyOfferType": 1,
                        "listPrice": {
                            "amountInMicros": 16950000,
                            "currencyCode": "USD"
                        },
                        "retailPrice": {
                            "amountInMicros": 9990000,
                            "currencyCode": "USD"
                        },
                        "giftable": true
                    }
                ]
            },
            "accessInfo": {
                "country": "US",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.com/books/download/Limits_of_the_Known-sample-epub.acsm?id=QoYrDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=QoYrDwAAQBAJ&hl=&as_brr=5&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "Part memoir and part history, this book tries to make sense of why so many have committed their lives to the desperate pursuit of adventure."
            }
        } */
      ],
      searchTerm: "",
      printType: "All",
      bookType: "No Filter"
    };
  }

  /* handleSearch(searchTerm) {
    this.setState({
      searchTerm: searchTerm
    });
    console.log(this.state.searchTerm)
  } */
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

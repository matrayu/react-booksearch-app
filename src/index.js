import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Data from './Data';
import * as serviceWorker from './serviceWorker';

const staticBooks = Data.store.items

ReactDOM.render(<App books={staticBooks}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

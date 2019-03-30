import React, { Component } from 'react';
import './Pricing.css';
import '../Book/Book';

class Pricing extends Component {
    getPrice(price) {
        console.log(price)
        if(price !== 'Not for Sale') {
          const priceFormat = new Intl.NumberFormat(`${this.props.book.country}`, { style: 'currency', currency: `${this.props.book.currencyCode}` }).format(this.props.book.price)
          console.log(priceFormat)
          return priceFormat;
        }
        else {
          console.log(price)
          return ('Not for sale');
        }
      };
}

export default Pricing;
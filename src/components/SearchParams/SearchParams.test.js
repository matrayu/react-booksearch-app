import React from 'react';
import ReactDOM from 'react-dom';
import SearchParams from './SearchParams';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchParams />, div);
  ReactDOM.unmountComponentAtNode(div);
});
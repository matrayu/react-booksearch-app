import React from 'react';
import ReactDOM from 'react-dom';
import Book from './Book';
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Book />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer
      .create(<Book />)
      .toJSON();
  expect(tree).toMatchSnapshot();
});
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('Basic components tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

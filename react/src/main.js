import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />, document.getElementById('app'));
})

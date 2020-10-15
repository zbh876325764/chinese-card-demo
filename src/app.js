import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'
import {applyPolyfills, defineCustomElements} from 'chinese-card/loader'
ReactDOM.render(<App />, document.getElementById('app'));
applyPolyfills().then(() => {
  defineCustomElements();
});
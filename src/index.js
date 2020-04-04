import 'react-hot-loader';
import React from 'react';

import { hydrate, render } from "react-dom";

const rootElement = document.getElementById("root");

// polyfill

// import 'core-js/stable';
// import 'regenerator-runtime/runtime';


import App from './App';
import './styles/style.less';

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

import React from 'react';
import { render } from 'react-dom';
import App from './App';

const root = document.createElement('div');
document.body.appendChild(root);
document.body.style.margin = '0px';

render(<App />, root);

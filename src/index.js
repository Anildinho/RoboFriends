import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList';
import 'tachyons';
import { robots } from './robots';

ReactDOM.render(
  <StrictMode>
    <CardList robots={robots}/>
  </StrictMode>, 
  document.getElementById('root')
);

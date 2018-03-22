import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { App } from '../App/index.jsx';

export const Root = ({ title }) => (
  <BrowserRouter>
    <App title={title} />
  </BrowserRouter>
);

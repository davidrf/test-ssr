import React from 'react'
import { StaticRouter } from 'react-router-dom';
import { App } from '../../src/App/index.jsx';

export const Root = ({ context, location, title }) => (
  <StaticRouter context={context} location={location}>
    <App title={title} />
  </StaticRouter>
);

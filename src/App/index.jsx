import React, { Fragment } from 'react'
import styles from './styles.css';
import { Link, Route } from 'react-router-dom';
import { FirstPage } from '../FirstPage/index.jsx'
import { SecondPage } from '../SecondPage/index.jsx'

export const App = ({ title }) => (
  <Fragment>
    <h1>{title}!</h1>
    <Link to="/">First Page</Link>
    <Link to="/second">Second Page</Link>
    <Route
      exact
      path="/"
      component={FirstPage}
    />
    <Route
      path="/second"
      component={SecondPage}
    />
  </Fragment>
);

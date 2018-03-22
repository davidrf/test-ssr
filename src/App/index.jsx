import React from 'react'
import { Hello } from '../Hello/index.jsx'
import styles from './styles.css';

export const App = ({ title }) => (
  <div className={styles.root}>
    <h1>{title}!</h1>
    <Hello />
  </div>
);

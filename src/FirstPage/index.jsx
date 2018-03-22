import React from 'react'
import { Hello } from '../Hello/index.jsx'
import styles from './styles.css';

export const FirstPage = () => (
  <div className={styles.root}>
    <h1>First Page</h1>
    <Hello />
  </div>
);

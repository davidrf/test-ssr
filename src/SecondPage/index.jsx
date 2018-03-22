import React from 'react'
import { Hello } from '../Hello/index.jsx'
import styles from './styles.css';

export const SecondPage = () => (
  <div className={styles.root}>
    <h1>Second Page</h1>
    <Hello />
  </div>
);

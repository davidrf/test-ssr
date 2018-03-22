import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App/index.jsx';

const element = document.getElementById('app')

ReactDOM.hydrate(<App title="best title" />, element)

import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from './Root/index.jsx';

const element = document.getElementById('app')

ReactDOM.hydrate(<Root title="best title" />, element)

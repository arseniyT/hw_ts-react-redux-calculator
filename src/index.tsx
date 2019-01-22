import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Calc from './components/Calculactor';
import { store } from './store';
import './style.css';

ReactDOM.render(
    <Provider store = { store }>
        <Calc />
    </Provider>
    , document.getElementById('root'));

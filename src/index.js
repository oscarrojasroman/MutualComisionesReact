import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { Provider } from 'react-redux';
import { store } from './helpers/store';
import { history } from './reducers/store';
import {Router,Route} from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
        <Router history ={history}>
                <Route path="/" component={App} />
        </Router>
    </Provider>, document.getElementById('root'));


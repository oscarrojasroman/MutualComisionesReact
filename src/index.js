import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { Provider } from 'react-redux';
import { store, history } from './helpers';
import {Router,Route} from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
        <Router history ={history}>
            <Route component={App}>
                <Route path="/" component={App} />
            </Route>
        </Router>
    </Provider>, document.getElementById('root'));


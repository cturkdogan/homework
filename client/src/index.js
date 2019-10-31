import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import store from './store';
// views
import Home from './views/Home';

const render = () => {
    stateLog();
    return ReactDOM.render(
    <Router>
        <App>
            <Route exact path='/' component={Home} />
        </App>
    </Router>    
    , document.getElementById('root'));
}
render();
store.subscribe(render);

function stateLog(){
    console.log("%c Rendered with ?? ?", "background: purple; color: #ffff");
    console.log(store.getState());
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

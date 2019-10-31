import React from 'react';
import '../App.css';
import { Row, Col, ListGroup } from 'react-bootstrap';
import store from '../store';
import { setActiveMenuId } from '../actions';

const Menu = ({ menu }) => {

    const { label, menuId } = menu;
    
    return (
        <div className="just-padding">
        <div className="list-group list-group-root well">  
          <a onClick={handleMenuClick.bind(null, menu)} className="list-group-item">{label}</a>
          <div className="list-group">    
            <a onClick={handleMenuClick.bind(null, menu)} className="list-group-item"></a>    
          </div>
        </div>
        </div>
    );

    function handleMenuClick({ menuId }) {
        console.log(`menuId ${menuId}`);
        store.dispatch(setActiveMenuId(menuId))
    }
};

export default Menu;
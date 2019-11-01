import React from 'react';
import '../App.css';
import { Row, Col, ListGroup } from 'react-bootstrap';
import store from '../store';
import { setActiveMenuId } from '../actions';

const Menu = ({ menu }) => {

    const { label, menu_id } = menu;
    
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

    function handleMenuClick({ menu_id }) {
        console.log(`menu_id ${menu_id}`);
        store.dispatch(setActiveMenuId(menu_id))
    }
};

export default Menu;
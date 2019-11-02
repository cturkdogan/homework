import React from 'react';
import '../App.css';
import { Row, Col, ListGroup, Button } from 'react-bootstrap';
import store from '../store';
import { setActiveMenuId } from '../actions';

const Menu = ({ menu }) => {

    /*const state = store.getState();
    const {menusReducer} = state;
    console.log({menusReducer});*/
    const { label, menu_id } = menu;
    if (menu.parent_id === null){
      return (
        <div className="just-padding">
        <div className="list-group">  
          <a onClick={handleMenuClick.bind(null, menu)} className="list-group-item">{label}</a>         
        </div>
        </div>
    );
    } else {
      return (
        <div className="just-padding"> 
      <div className="list-group">    
      <a onClick={handleMenuClick.bind(null, menu)} className="list-group-item">{label}</a>    
      </div>
      </div>
      );
    }
    
    return (
        <div className="just-padding">
        <div className="list-group list-group-root well">  
          <Col><a onClick={handleMenuClick.bind(null, menu)} className="list-group-item">{label}</a></Col>
          <div className="list-group">    
            <a onClick={handleMenuClick.bind(null, menu)} className="list-group-item">1.1</a>    
          </div>
        </div>
        </div>
    );

    function handleMenuClick({ menu_id }) {
        console.log(`menu_id: ${menu_id}`);
        store.dispatch(setActiveMenuId(menu_id))
    }
};

export default Menu;
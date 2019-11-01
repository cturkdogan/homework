import React from 'react';
import '../App.css';
import { Row, Col } from 'react-bootstrap';
import store from '../store';
import Text from './Text';
import Title from './Title';
import { setActiveMenuId } from '../actions';


const MenuWindow = () => {
    const state = store.getState(); // get state
    if (state.activeMenuId === "undefined") {
        const menu = state.items[0]; // get first menu from the items list
        console.log({ menu });
        store.dispatch(setActiveMenuId(menu.menu_id)); // set the displayed menu id as the activeMenuId   
    }
    const activeMenu = state.items.find(item => item.menu_id === state.activeMenuId)  
    console.log(`Active Menu Id: ${state.activeMenuId}`);
    console.log(`Active Menu: ${activeMenu}`)
    
    return (
        <Row className="MenuWindow">
            <Title menu={activeMenu} />
            <Text menu={activeMenu} />
            <Col className="footer">Copyright ©JRCS Co.Ltd.</Col>
        </Row>
    );
};

export default MenuWindow;
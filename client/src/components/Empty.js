import React from 'react';
import '../App.css';
import store from '../store';
import {Row, Col} from 'react-bootstrap';
import _ from 'lodash';
import Text from './Text';
import Title from './Title';
import {setActiveMenuId} from '../actions';

const Empty = () => {
    const {items} = store.getState(); // get menu list
    const menu = items[0]; // get first menu from the list
    console.log({ menu });
    const activeMenuId = menu.menuId;
    console.log(`Active Menu Id: ${activeMenuId}`);
  //  store.dispatch(setActiveMenuId(activeMenuId)); // set the displayed menu id as the activeMenuId    
    
    return (        
        <Row className="MenuWindow">            
        <Title menu={menu}/>
        <Text menu={menu}/>
        <Col className="footer">Copyright ©JRCS Co.Ltd.</Col>             
        </Row>       
    );
};

export default Empty;

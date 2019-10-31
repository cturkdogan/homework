import React from 'react';
import '../App.css';
import {Col, ListGroup} from 'react-bootstrap';
import store from '../store';
import Menu from './Menu';

const Sidebar = ({items}) => (
        
        <Col id='sidebar' sm={3}  md={2} lg={2} hidden-xs-down="true" bg-faded="true" sidebar="true">                
        {items.map(item => <Menu menu={item} key={item.menuId} />)}               
        </Col>

)

export default Sidebar;
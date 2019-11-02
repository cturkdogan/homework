import React, { Component } from 'react';
import '../App.css';
import { Col, ListGroup } from 'react-bootstrap';
import LoadingIcon from '../loading.svg';
import Menu from './Menu'
import PropTypes from 'prop-types';
import store from '../store';
import { fetchMenusSuccess} from '../actions';

export class MenuView extends Component {

    constructor(props) {
            super(props);          
            this.state=store.getState();
    }        


    render() {  
        this.state = store.getState();
        const {menusReducer} = this.state;
        console.log({menusReducer});
            return (
                    
                    <Col id='sidebar' sm={3} md={2} lg={2} hidden-xs-down="true" bg-faded="true" sidebar="true">
                            {this.state.items.map(menu => <Menu menu={menu} key={menu.menu_id} />)}
                    </Col>
            );
    }
}

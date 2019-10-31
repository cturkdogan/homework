import React, {Component} from 'react';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import {Container, Row} from 'react-bootstrap';
import store from '../store';
import _ from 'lodash';

class Home extends Component {

    render(){
        const {items, menu, activeMenuId} = store.getState();
        return(
            <Container fluid>
                <Row>
                    <Sidebar items={items}/>
                    <Main menu={menu} activeMenuId={activeMenuId}/>                    
                </Row>
            </Container>                
        );
    }
}

export default Home;
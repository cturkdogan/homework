import React from 'react';
import '../App.css';
import { Col, Row } from 'react-bootstrap';
import Empty from './Empty';
import MenuWindow from './MenuWindow';
import _ from 'lodash';

const Main = ({ menu, activeMenuId }) => {

    console.log(`Active Menu Id: ${activeMenuId}`);
    const renderMainContent = () => {
        if (!activeMenuId) {
            return (
                <Row>
                    <Empty menu={menu} activeMenuId={activeMenuId} />
                </Row>
            );
        } else {
            return (
                <Row>
                    <MenuWindow activeMenuId={activeMenuId} />
                </Row>
            );
        }
    }
    return (
        <Col id='main' sm={{ span: 9 }} md={{ span: 10 }} lg={{ span: 10 }} pt={3}>
            {renderMainContent()}
        </Col>
    );
};

export default Main;
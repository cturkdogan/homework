import React from 'react';
import '../App.css';
import {Col, Row, Button} from 'react-bootstrap';
import store from '../store';
import Menu from './Menu';
import { setActiveMenuId } from '../actions';

import DropdownTreeSelect from 'react-dropdown-tree-select'
import 'react-dropdown-tree-select/dist/styles.css'

const Sidebar = ({items}) => {

             const onChange = (currentNode, selectedNodes) => {
                console.log('onChange::', currentNode.value, selectedNodes);
                store.dispatch(setActiveMenuId(currentNode.menuId));
                
              }

return (
 <Row>       
 <Col>               
<DropdownTreeSelect showDropdown='always' mode='hierarchical' data={items} onChange={onChange} />
 </Col>
 <Col>               
 <Button>Add Menu</Button>
  </Col>
  </Row> 
);        

}

export default Sidebar;
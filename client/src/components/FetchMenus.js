import React, { Component } from 'react';
import '../App.css';
import { Col, ListGroup, Row } from 'react-bootstrap';
import store from '../store';
import { fetchMenusSuccess } from '../actions';
import { setActiveMenuId } from '../actions';

import DropdownTreeSelect from 'react-dropdown-tree-select'
import 'react-dropdown-tree-select/dist/styles.css'

export default class FetchMenus extends Component {

	constructor(props) {
		super(props);
		this.state = store.getState();
		this.onChange = this.onChange.bind(this);
	}


	componentWillMount() {

		fetch('/api/menu', {
			method: "GET",
			headers: {
				'Content-Type': 'application/json',
			}
		})
			.then(res => res.json())
			.then(menus => {
				menus.map(menu => {
					return (
						<div key={menu.menu_id}>{menu.label}</div>
					)
				})
				store.dispatch(fetchMenusSuccess({ menus }));
			})
		this.state = store.getState();
		const { menusReducer } = this.state;
		console.log({ menusReducer });
	}

	onChange = (currentNode, selectedNodes) => {
		console.log('onChange::', currentNode.value, currentNode.menuId, selectedNodes);
		store.dispatch(setActiveMenuId(currentNode.menu_id));
		
	  }


	render() {
		this.state = store.getState();
		const { menusReducer } = this.state;
		console.log({ menusReducer });
		const {items} = this.state;
		return (

			<Row>
				<Col>
					<DropdownTreeSelect showDropdown='always' mode='hierarchical' data={items} onChange={this.onChange} />
				</Col>
			</Row>
		);
	}
}



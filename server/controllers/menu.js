const Menu = require('../models').Menu;
const sequelize = require('sequelize');
const Op = sequelize.Op;
const express = require('express');
const logger = require('morgan');
const app = express();

module.exports = {	
	createMenu(req, res){
		return Menu
		.create({
				menu_id: req.body.menu_id,
				label: req.body.label,
				title: req.body.title,
				value: req.body.value,
				parent_id: req.body.parent_id
			})
		.then(menu => res.status(201).send(menu))
		.catch(error => res.status(400).send(error));
	},
	listMenu(req, res){
		return Menu
		.findAll(
		{ 
			limit: 10000
		},		
		)
		.then(menu => res.status(201).send(menu))
		.catch(error => res.status(400).send(error));
	},
	retrieveMenu(req, res){

		return Menu
		.findOne({
				where: {
						menuID: req.params.menuID
						}
				})
		.then(menu => {
			if (!menu) {
			return res.status(404).send({
				message: 'Menu Not Found',
				});
			}
		return res.status(200).send(menu);
		})
		.catch(error => res.status(400).send(error));	
	},
	updateMenu(req, res){
		return Menu
		.findOne({
				where: {
						menuID: req.params.menuID
						}
				})
		.then(menu => {
			if(!menu){				
				return res.status(404).send({
					message: 'Menu Not found',
				});
			}			
			return menu
				.update({
					inventory: req.body.inventory,			
				})
				.then(() => res.status(200).send(menu)) // send back the updated Menu
				.then(() => console.log("menu inventory: " + menu.inventory + " request inventory: " + req.body.inventory))
				.catch((error) => res.status(400).send(error));				
		})
		.catch(error => res.status(400).send(error));
	},
	destroyMenu(req, res){
		return Menu
		.findOne({
				where: {
						menuID: req.params.menuID
						}
				})
		.then(menu => {
			if(!menu){
				return res.status(404).send({message: 'Menu Not Found',});
			}
			return menu
				.destroy()
				.then(() => res.status(204).send({message: "Successfully deleted",}))
				.catch(error => res.status(400).send(error));
		})
		.catch(error => res.status(400).send(error));
	},
	
};
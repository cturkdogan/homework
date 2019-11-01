const menuController = require('../controllers').menu;

module.exports = (app) => {
	app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the JRCS HW API!',
	}));	
	app.post('/api/menu', menuController.createMenu);
	app.get('/api/menu', menuController.listMenu);
	app.get('/api/menu/:menu_id', menuController.retrieveMenu);
	app.put('/api/menu/:menu_id', menuController.updateMenu);
	app.delete('/api/menu/:menu_id', menuController.destroyMenu);
};
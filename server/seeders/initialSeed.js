/* module.exports = {
        up: (queryInterface, Sequelize) => 
          queryInterface.renameColumn('Menus', 'menuID', 'menu_id').then(console.log("column updated")),        
}; */

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Menus', [{
        menu_id: '1',
        label: 'Menu 1',
        title: 'Marine Industry Problemsemo@demo.com',
        value: 'Secure data sharing and collaboration among partners => Blockchain corruption cyber attack Decarbonization => emission reduction goals, carbon neutral fuels, optimized logistic chains Safe seafare => Shipping 4.0  autonomous shipping, human error New business models: blockchain => verticals feeding on shipping data',
        parent_id: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        menu_id: '1.1',
        label: 'Menu 1.1',
        title: 'Solutions',
        value: 'Secure data sharing and collaboration among partners => Blockchain corruption cyber attack Decarbonization => emission reduction goals, carbon neutral fuels, optimized logistic chains Safe seafare => Shipping 4.0  autonomous shipping, human error New business models: blockchain => verticals feeding on shipping data',
        parent_id: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        menu_id: '2',
        label: 'Menu 2',
        title: 'Industry 4.0 notes',
        value: 'Sensors Autonomous vehicles and equipment Drones 3D printing IOT and Cloud Augmented Reality, VR, Digital twin ‘Learn (AR and VR), Train (VR), Perform (AR) Digital simulation',
        parent_id: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        menu_id: '2.1',
        label: 'Menu 2.1',
        title: 'Solutions',
        value: 'Sensors Autonomous vehicles and equipment Drones 3D printing IOT and Cloud Augmented Reality, VR, Digital twin ‘Learn (AR and VR), Train (VR), Perform (AR) Digital simulation',
        parent_id: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      }    
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Menus', null, {});
  }
};
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Menus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      menu_id: { type: Sequelize.STRING, unique: true, allowNull: false },
      label: { type: Sequelize.STRING },
      title: { type: Sequelize.STRING },
      value: { type: Sequelize.TEXT },
      parent_id: { type: Sequelize.STRING, allowNull: true },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    }),
  down: (queryInterface/*, Sequelize*/) =>
    queryInterface.dropTable('Menus'),
};
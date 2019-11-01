module.exports=(sequelize, Sequelize) => {
    const Menu = sequelize.define('Menu', {
        menu_id: {type: Sequelize.STRING, unique: true, allowNull: false},
        label: {type: Sequelize.STRING},
        title: {type: Sequelize.STRING},
        value: {type: Sequelize.TEXT},
        parent_id: {type: Sequelize.STRING, allowNull: true}
    });
    return Menu;
};
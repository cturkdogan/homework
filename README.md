# jrcshw draft document
A sample applicaition on react.js redux.js front end and node.js / express api / postgres backend on Heroku Cloud  

// Sequelize as ORM (Object-Relational Mapping)
$ npm install -g sequelize-cli
$ npm install --save sequelize pg pg-hstore
// to create model migration config seeder folders automatically
$ sequelize init
// create the db first
$ createdb dbdev
$ export DATABASE_URL=our-database-url

// to create the model: 
sequelize model:create --name menu --attributes menu_id:string,label:string,title:string,value:text,parent_id:string
 
// to create on db
sequelize db:migrate
// to remove
sequelize db:migrate:undo

// run all seed files
$ npx sequelize-cli db:seed:all
// If you wish to undo most recent seed
$ npx sequelize-cli db:seed:undo
// If you wish to undo a specific seed
$ npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data
// If you wish to undo all seeds
$ npx sequelize-cli db:seed:undo:all

// If you'd like to see the queries generated by sequelize, use DEBUG=sequelize:sql* node app.js when you start your server.

up: function(queryInterface, Sequelize) {
    return queryInterface.renameColumn('Items', 'name', 'itemName').then(function() {
        return queryInterface.sequelize
                             .query("UPDATE Items SET itemName='Board' WHERE itemName='board'");
    });
}

//Nodemon

npm install -g nodemon
And nodemon will be installed globally to your system path.

You can also install nodemon as a development dependency:

npm install --save-dev nodemon

// Express API doc
Swagger UI Express
Adds middleware to your express app to serve the Swagger UI bound to your Swagger document. This acts as living documentation for your API hosted from within your app.


// Product Database Configuration
heroku Cloud: add postgres database and insert seed data using dataclips as in ./files/heroku-postgres-script.sql
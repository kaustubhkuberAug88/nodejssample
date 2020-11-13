const db = require("../models/database/database.js");
const User = db.users;
const Op = db.Sequelize.Op;

// Retrieve all Users from the database.
exports.getUsers = (callback) => {
    User.findAll()
        .then(users => {
            console.log("*** getUsers Ok:");
            return callback(null, { users: users });
        })
        .catch(error => {
            console.log("*** getUsers Error:");
            return callback(error);
        })
};

// Create and Save a new User
exports.createUser = (body, callback) => {

};


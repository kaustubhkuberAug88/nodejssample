'use strict'

const userRepository = require('../../repositories/user.repository.js');

exports.getUsers = (req, res) => {
    console.log('*** inside Controller');
    userRepository.getUsers((err, data) => {
        if(err){
            console.log('*** getUsersController error: ' + err);
            res.json(null);
        } else {
            console.log('*** getUsersController Ok: ');
            res.json(data.users);
        }
    });
}
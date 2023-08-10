const express = require('express');
const userRoutes = express.Router();
const controller = require('../controllers/users.controller.js');

userRoutes.get('/', controller.getUsers);

userRoutes.get('/:userId', controller.getUserById);


module.exports = userRoutes;
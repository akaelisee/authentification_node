const express = require('express');

const apiRouter = express.Router();

const userController = require('../controllers/userController');

apiRouter.get('/user', userController.getFindUser);
apiRouter.get('/user/:id', userController.getFindByIdUser);
apiRouter.post('/register/user', userController.postRegisterAddUser);
apiRouter.post('/login/user', userController.postLoginUser);


module.exports = apiRouter
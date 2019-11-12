const express = require('express');
const router = express.Router();
const createUserController = require('./controllers/createUserController');
const findUserController = require('./controllers/findUserController');
const changeUserController = require('./controllers/changeUserController');
const deleteUserController = require('./controllers/deleteUserController');
const findAllController = require('./controllers/findAllController');

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.use(express.json());
router.use(express.urlencoded());

router
    .route('/')
    .post(createUserController)
    .get(findUserController)
    .put(changeUserController)
    .delete(deleteUserController)

router
    .get('/list', findAllController);

module.exports = router;

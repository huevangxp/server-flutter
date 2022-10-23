const router = require('express').Router();
const userRoute = require('./userRoute');

userRoute(router);

module.exports = router;
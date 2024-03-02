const router = require('express').Router();
const services = require('../services');
const userAuth = require('../utils/auth');

const userRoutes = require('./api/userRoutes');

router.route('/')
  .get(services.renderHome);

router.route('/signup')
  .get(services.renderSignup)

router.route('/login')
  .get(services.renderLogin)
  .post(services.userLogin);

router.route('/logout')
  .post(services.userLogout);

router.use('/users', userRoutes);



module.exports = router;
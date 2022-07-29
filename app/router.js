const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const {
    applicationController,
} = require('./controller');

const {
  
} = require('./models');

function apply(app) {  
  const applicationControllers = new applicationController();

  app.get('/', applicationControllers.handleGetRoot);
  app.put('/v1/user/', authenticationControllers.authorize, userControllers.handleUpdateUser);
  app.get('/v1/user/', authenticationControllers.authorize, userControllers.handleGetUser);
  return app;
}

module.exports = { apply };

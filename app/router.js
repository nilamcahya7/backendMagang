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
  
  return app;
}

module.exports = { apply };

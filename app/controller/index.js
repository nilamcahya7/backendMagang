const applicationController = require('./applicationController');
const inclusionController = require('./inclusionController');
const trainingController = require('./trainingController');
const vacancyController = require('./vacancyController');
const authenticationController = require('./authenticationController');
const userController = require('./userController')

module.exports = {
    applicationController,
    authenticationController,
    inclusionController,
    trainingController,
    vacancyController,
    userController
};
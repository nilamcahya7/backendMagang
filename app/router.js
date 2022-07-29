const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const handleUploadImage = require('./middleware/uploadOnCloudinary');
const uploadOnMemory = require('./middleware/uploadOnMemory');

const {
    applicationController,
    inclusionController,
    trainingController,
    vacancyController,
    authenticationController,
    userController
} = require('./controller');

const {
  Inclusion,
  Training,
  Vacancy,
  User,
  Education,
  Experience
} = require('./models');

function apply(app) {  
  const trainingModel = Training;
  const inclusionModel = Inclusion;
  const vacancyModel = Vacancy;
  const userModel = User;
  const educationModel = Education;
  const experienceModel = Experience;
  
  const applicationControllers = new applicationController()
  const userControllers = new userController({
    userModel, bcrypt, jwt, educationModel, experienceModel
  })
  const authenticationControllers = new authenticationController({
    userModel, bcrypt, jwt
  })
  const inclusionControllers = new inclusionController({
    inclusionModel
  })
  const trainingControllers = new trainingController({
    trainingModel
  }) 
  const vacancyControllers = new vacancyController({
    vacancyModel
  })
    

  app.get('/', applicationControllers.handleGetRoot);
  
  app.put('/auth/register', authenticationControllers.handleRegister)
  app.post('/auth/login', authenticationControllers.handleLogin)
  
  app.put('/user' ,authenticationControllers.authorize, uploadOnMemory.any('picture'), handleUploadImage,userControllers.handleUpdateUser)
  app.post('/user/education', authenticationControllers.authorize, userControllers.handleAddEducation)
  app.post('/user/experience', authenticationControllers.authorize, userControllers.handleAddExperience)  

  app.get('/inclusion-news', inclusionControllers.getAllinclusion)
  app.get('/inclusion-news/:id', inclusionControllers.getInclusionById)

  app.get('/training', trainingControllers.getAlltraining)
  app.get('/training/:id', trainingControllers.getTrainingById)

  app.get('/vacancy', vacancyControllers.getAllnVacancy)
  app.get('/vacancy/:id', vacancyControllers.getVacancyById)
  return app;
}

module.exports = { apply };

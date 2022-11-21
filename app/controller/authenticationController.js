const applicationController = require('./applicationController');

// Handle error 
const {
  emailAlreadyTakenError,
  emailInvalid,
  emailOrPhoneNotFound,
  passwordContentDoesntMatch,
  passwordIncorrect,
  phoneAlreadyTakenError,
  dataDoesntMatch,
  NIKwrong,
} = require('../error')

// untuk mendapatkan token
const {
  JWT_SIGNATURE_KEY
} = require('../../config/application');

class authenticationController extends applicationController {
  constructor({
    userModel,
    bcrypt,
    jwt,
  }) {
    super();
    this.userModel = userModel;
    this.bcrypt = bcrypt;
    this.jwt = jwt;
  }

  // Authorize => memvalidasi token dan usernya atau tidak
  authorize = async (req, res, next) => {
    try {
      const token = req.headers.authorization?.split('Bearer ')[1];
      const payload = await this.decodeToken(token);
      req.user = payload; 
      next();
    } catch (err) {
      let catchErr = null;
      if (err.details) { 
        catchErr = err.details;
      }
      res.status(401).json({
        error: {
          name: err.name, 
          message: err.message, 
          details: err.details,
        },
      });
    }
  };

  // Register
  handleRegister = async (req, res, next) => {
    try {
      const {
        NIK,
        fullName,
        mother,
        phone,
        password
      } = req.body;
      const email = req.body.email.toLowerCase();

      const emailContent = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!email.match(emailContent)) {
        const err = new emailInvalid();
        res.status(401).json(err);
        return;
      }

      // Existing User
      const existingUserEmail = await this.userModel.findOne({
        where: {
          email,
        }
      });

      const existingUserPhone = await this.userModel.findOne({
        where: {
          phone
        }
      });

      if (existingUserEmail) {
        const err = new emailAlreadyTakenError(email);
        res.status(422).json(err);
        return;
      }

      if (existingUserPhone) {
        const err = new phoneAlreadyTakenError(phone);
        res.status(422).json(err);
        return
      }

      // // Password Content Rules (PasswordContentDoesntMatch)
      const passwrodContent = '^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){1,}).{8,}$';
      if (!password.match(passwrodContent)) {
        const err = new passwordContentDoesntMatch();
        res.status(401).json(err);
        return;
      }


      const user = await this.userModel.create({
        NIK,
        fullName,
        email,
        mother,
        password: this.encryptPassword(password),
        phone,
      })

      // Token Register
      const accessToken = await this.createTokenFromUser(user);
      res.status(201).json({
        accessToken,
        user: {
          NIK,
          fullName,
          mother,
          phone,
          email,
          shortName: user.shortName,
          picture: user.picture,
          headline: user.headline,
          disabilityType: user.disabilityType,
          birthPlace: user.birthPlace,
          birthDate: user.birthDate,
          gender: user.gender,
          address: user.address,
          description: user.description,
          disabilityAids: user.disabilityAids,
          detailsDisability: user.detailsDisability,
          skill: user.skill,
          marital: user.marital
        }
      });
    } catch (err) {
      next(err);
    }
  };

  // Login
  handleLogin = async (req, res, next) => {
    try {
      const email = req.body.email.toLowerCase();
      const { password } = req.body;

      const checkUserByEmail = await this.userModel.findOne({ where: { email } });
      const checkUserByPhone = await this.userModel.findOne({ where: { phone: email } })

      if (checkUserByEmail) {
        const checkPassword = await this.verifyPassword(password, checkUserByEmail.password)
        if (checkPassword) {
          const data = {
            id: checkUserByEmail.id
          }
          const accessToken = await this.createTokenFromUser(data) 
          return res.status(200).json({
            accessToken,
            user: {
              NIK: checkUserByEmail.NIK,
              shortName: checkUserByEmail.shortName,
              fullName: checkUserByEmail.fullName,
              mother: checkUserByEmail.mother,
              phone: checkUserByEmail.phone,
              email: checkUserByEmail.email,
              picture: checkUserByEmail.picture,
              headline: checkUserByEmail.headline,
              disabilityType: checkUserByEmail.disabilityType,
              birthPlace: checkUserByEmail.birthPlace,
              birthDate: checkUserByEmail.birthDate,
              gender: checkUserByEmail.gender,
              address: checkUserByEmail.address,
              description: checkUserByEmail.description,
              disabilityAids: checkUserByEmail.disabilityAids,
              detailsDisability: checkUserByEmail.detailsDisability,
              skill: checkUserByEmail.skill,
              marital: checkUserByEmail.marital
            }
          })
        } else {
          const err = new passwordIncorrect();
          res.status(401).json(err)
        };
      } else if (checkUserByPhone) {
        const checkPassword = await this.verifyPassword(password, checkUserByPhone.password);
        if (checkPassword) {
          const data = {
            id: checkUserByPhone.id
          }
          const accessToken = await this.createTokenFromUser(data)
          return res.status(201).json({
            accessToken,
            user: {
              NIK: checkUserByPhone.NIK,
              shortName: checkUserByPhone.shortName,
              fullName: checkUserByPhone.fullName,
              mother: checkUserByPhone.mother,
              phone: checkUserByPhone.phone,
              email: checkUserByPhone.email,
              picture: checkUserByPhone.picture,
              headline: checkUserByPhone.headline,
              disabilityType: checkUserByPhone.disabilityType,
              birthPlace: checkUserByPhone.birthPlace,
              birthDate: checkUserByPhone.birthDate,
              gender: checkUserByPhone.gender,
              address: checkUserByPhone.address,
              description: checkUserByPhone.description,
              disabilityAids: checkUserByPhone.disabilityAids,
              detailsDisability: checkUserByPhone.detailsDisability,
              skill: checkUserByPhone.skill,
              marital: checkUserByPhone.marital
            }
          })
        } else {
          const err = new passwordIncorrect();
          res.status(401).json(err)
        }
      } else if (!checkUserByEmail && !checkUserByPhone) {
        const err = new emailOrPhoneNotFound(email);
        res.status(401).json(err);
        return;
      }
    } catch (err) {
      next(err)
    }
  }

  encryptPassword(password) {
    return this.bcrypt.hashSync(password, 10);
  };

  // Login Token
  createTokenFromUser = (user) => this.jwt.sign({
    id: user.id,
    NIK: user.NIK,
    full_name: user.fullName,
    phone: user.phone,
    email: user.email,
    mother: user.mother,
  }, JWT_SIGNATURE_KEY);


  decodeToken = async (token) => {
    return await this.jwt.verify(token, JWT_SIGNATURE_KEY);
  };

  verifyPassword = async (password, encryptedPassword) => {
    return await this.bcrypt.compareSync(password, encryptedPassword);
  };
}

module.exports = authenticationController;
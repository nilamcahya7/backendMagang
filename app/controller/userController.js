const applicationController = require('./applicationController');
const {
  UserNotFound,
} = require('../error');
const { JWT_SIGNATURE_KEY } = require('../../config/application');

class userController
  extends applicationController {
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

  handleUpdateUser = async (req, res, next) => {
    try {
      const {
        shortName,
        phone,
        address,
        description,
        picture,
        headline,
        disabilityType,
        disabilityAids,
        detailsDisability,
        experience,
        skill,
      } = req.body;

      const checkUser = await this.userModel.findByPk(req.user.id);
      if (!checkUser) {
        const err = new UserNotFound(email);
        res.status(401).json(err);
        return;
      }
      if (shortName) {
        checkUser.shortName = shortName;
      }
      if (phone) {
        checkUser.phone = phone;
      }
      if (address) {
        checkUser.address = address;
      }
      if (picture) {
        checkUser.picture = picture;
      }
      if (headline) {
        checkUser.position = headline;
      }
      if (disabilityType) {
        checkUser.disabilityType = disabilityType;
      }
      if (description) {
        checkUser.description = description;
      }
      if (disabilityAids) {
        checkUser.disabilityAids = disabilityAids;
      }
      if (detailsDisability) {
        checkUser.detailsDisability = detailsDisability;
      }
      if (experience) {
        checkUser.experience = experience;
      }
      if (skill) {
        checkUser.skill = skill;
      }
      
      const updateUser = await checkUser.save();
      if (updateUser) {
        res.status(200).json({
          id: req.params.id,
          shortName: checkUser.shortName,
          phone: checkUser.phone,
          address: checkUser.address,
          description: checkUser.description,
          picture: checkUser.picture,
          headline: checkUser.headline,
          disabilityType: checkUser.disabilityType,
          disabilityAids: checkUser.disabilityAids,
          detailsDisability: checkUser.detailsDisability,
          experience: checkUser.experience,
          skill: checkUser.skill,
        })
      }
    } catch (err) {
      next(err);
    }
  };

  handleGetUser = async (req, res, next) => {
    try {
      const getUser = await this.userModel.findByPk(req.user.id);
      res.status(200).json({
        data: {
          id: getUser.id,
          shortName: getUser.shortName,
          fullName: getUser.fullName,
          NIK: getUser.NIK,
          mother: getUser.mother,
          email: getUser.email,
          phone: getUser.phone,
          birthPlace: getUser.birthPlace,
          birthDate: getUser.birthDate,
          gender: getUser.gender,
          address: getUser.address,
          description: getUser.description,
          picture: getUser.picture,
          headline: getUser.headline,
          disabilityType: getUser.disabilityType,
          disabilityAids: getUser.disabilityAids,
          detailsDisability: getUser.detailsDisability,
          experience: getUser.experience,
          skill: getUser.skill,
          marital: getUser.marital
        }
      });
     } catch (err) {
      next(err);
     }
  };
  
  decodeToken = async (token) => {
    return await this.jwt.verify(token, JWT_SIGNATURE_KEY);
  };

  encryptPassword = async (password) => {
    return await this.bcrypt.hashSync(password, 10);
  };

  verifyPassword = async (password, encryptedPassword) => {
    return await this.bcrypt.compareSync(password, encryptedPassword);
  };
}

module.exports = userController;

const applicationController = require('./applicationController');
const {
  UserNotFound,
} = require('../error');
const {
  JWT_SIGNATURE_KEY
} = require('../../config/application');

class userController
extends applicationController {
  constructor({
    userModel,
    educationModel,
    experienceModel,
    bcrypt,
    jwt,
  }) {
    super();
    this.userModel = userModel;
    this.educationModel = educationModel;
    this.experienceModel = experienceModel;
    this.bcrypt = bcrypt;
    this.jwt = jwt;
  }

  handleUpdateUser = async (req, res, next) => {
    try {
      const {
        phone,
        shortName,
        headline,
        disabilityType,
        address,
        description,
        disabilityAids,
        detailsDisability,
        skill,
      } = req.body;
      const picture = req.img[0];

      const checkUser = await this.userModel.findByPk(req.user.id);
      if (!checkUser) {
        const err = new UserNotFound(email);
        res.status(401).json(err);
        return;
      }
      if (phone) {
        checkUser.phone = phone;
      }
      if (shortName) {
        checkUser.shortName = shortName;
      }
      if (picture) {
        checkUser.picture = picture;
      }
      if (headline) {
        checkUser.headline = headline;
      }
      if (disabilityType) {
        checkUser.disabilityType = disabilityType;
      }
      if (address) {
        checkUser.address = address;
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
      if (skill) {
        checkUser.skill = skill;
      }

      const updateUser = await checkUser.save();
      if (updateUser) {
        res.status(200).json({
          id: req.params.id,
          shortName: checkUser.shortName,
          phone: checkUser.phone,
          picture: checkUser.picture,
          headline: checkUser.headline,
          disabilityType: checkUser.disabilityType,
          address: checkUser.address,
          description: checkUser.description,
          disabilityAids: checkUser.disabilityAids,
          detailsDisability: checkUser.detailsDisability,
          skill: checkUser.skill,
        })
      }
    } catch (err) {
      next(err);
    }
  };

  handleAddEducation = async (req, res, next) => {
    try {
      const {
        institution,
        level,
        major,
        gpa,
        startMonth,
        startYear,
        endMonth,
        endYear,
      } = req.body;

      const checkUser = await this.userModel.findByPk(req.user.id);
      if (!checkUser) {
        const error = new UserNotFound(email);
        res.status(401).json(error);
        return;
      }

      const addEducation = await this.educationModel.create({
        userId: req.user.id,
        institution,
        level,
        major,
        gpa,
        startMonth,
        startYear,
        endMonth,
        endYear
      });
      res.status(201).json(addEducation);
    } catch (error) {
      next(error);
    }
  }

  handleAddExperience = async (req, res, next) => {
    try {
      const {
        institution,
        jobsPosition,
        jobsType,
        startMonth,
        startYear,
        endMonth,
        endYear,
      } = req.body;

      const checkUser = await this.userModel.findByPk(req.user.id);
      if (!checkUser) {
        const error = new UserNotFound(email);
        res.status(401).json(error);
        return;
      }

      const addExperience = await this.experienceModel.create({
        userId: req.user.id,
        institution,
        jobsPosition,
        jobsType,
        startMonth,
        startYear,
        endMonth,
        endYear,
      });
      res.status(201).json(addExperience);
    } catch (error) {
      next(error);
    }
  }

  handleGetUser = async (req, res, next) => {
    try {
      const getUser = await this.userModel.findByPk(req.user.id);
      res.status(200).json({
        data: {
          id: getUser.id,
          fullName: getUser.fullName,
          email: getUser.email,
          phone: getUser.phone,
          picture: getUser.picture,
          position: getUser.position,
          disabilityType: getUser.disabilityType,
          address: getUser.address,
          description: getUser.description,
          disabilityAids: getUser.disabilityAids,
          detail: getUser.detail,
          skill: getUser.skill,
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
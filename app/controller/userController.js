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
        birthDate,
        birthPlace,
        gender,
        marital,
      } = req.body;

      const checkUser = await this.userModel.findByPk(req.user.id);
      if (!checkUser) {
        const err = new UserNotFound(email);
        res.status(401).json(err);
        return;
      }
      if (phone) {
        checkUser.phone = phone;
      }
      if (birthPlace) {
        checkUser.birthPlace = birthPlace;
      }
      if (birthDate) {
        checkUser.birthDate = birthDate;
      }
      if (gender) {
        checkUser.gender = gender;
      }
      if (marital) {
        checkUser.marital = marital;
      }
      if (shortName) {
        checkUser.shortName = shortName;
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
          id: req.user.id,
          NIK : checkUser.NIK,
          fullName: checkUser.fullName,
          mother : checkUser.mother,
          phone : checkUser.phone,
          email: checkUser.email,
          shortName: checkUser.shortName,
          picture: checkUser.picture,
          headline: checkUser.headline,
          disabilityType: checkUser.disabilityType,
          address: checkUser.address,
          description: checkUser.description,
          disabilityAids: checkUser.disabilityAids,
          detailsDisability: checkUser.detailsDisability,
          skill: checkUser.skill,
          birthDate: checkUser.birthDate,
          birthPlace: checkUser.birthPlace,
          gender: checkUser.gender,
          marital: checkUser.marital
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

  handleUploadPicture = async (req, res, next) => {
    try {
      const picture = req.img;

      const uploadPicture = await this.userModel.findByPk(req.user.id);
      if (!uploadPicture) {
        const error = new UserNotFound(email);
        res.status(401).json(error);
        return;
      }
      if (picture) {
        uploadPicture.picture = picture;
      }

      const updatePicture = await uploadPicture.save();
      if (updatePicture) {
        res.status(200).json({
          picture: uploadPicture.picture,
          NIK : uploadPicture.NIK,
          fullName: uploadPicture.fullName,
          mother : uploadPicture.mother,
          phone : uploadPicture.phone,
          email: uploadPicture.email,
          shortName: uploadPicture.shortName,
          headline: uploadPicture.headline,
          disabilityType: uploadPicture.disabilityType,
          address: uploadPicture.address,
          description: uploadPicture.description,
          disabilityAids: uploadPicture.disabilityAids,
          detailsDisability: uploadPicture.detailsDisability,
          skill: uploadPicture.skill,
          birthDate: uploadPicture.birthDate,
          birthPlace: uploadPicture.birthPlace,
          gender: uploadPicture.gender,
          marital: uploadPicture.marital
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
          NIK : getUser.NIK,
          shortName: getUser.shortName,
          fullName : getUser.fullName,
          mother: getUser.mother,
          phone: getUser.phone,
          email : getUser.email,
          picture: getUser.picture,
          headline: getUser.headline,
          disabilityType: getUser.disabilityType,
          birthPlace: getUser.birthPlace,
          birthDate: getUser.birthDate,
          gender: getUser.gender,
          address: getUser.address,
          description: getUser.description,
          disabilityAids: getUser.disabilityAids,
          detailsDisability: getUser.detailsDisability,
          skill: getUser.skill,
          marital: getUser.marital
        }
      });
    } catch (err) {
      next(err);
    }
  };

  handleGetEducation = async (req, res, next) => {
    try {
      const user = req.user.id;
      const education = {
        attributes : {exclude : ['createdAt', 'updatedAt']},
        where : {
          userId: user
        }
      }
      const getEducation = await this.educationModel.findAll(education);
      res.status(200).json(getEducation);
    } catch (err) {
      next(err);
    }
  }

  handleGetExperience = async (req, res, next) => {
    try {
      const user = req.user.id;
      const experience = {
        attributes : {exclude : ['createdAt', 'updatedAt']},
        where : {
          userId: user
        }
      }
      const getExperience = await this.experienceModel.findAll(experience);
      res.status(200).json(getExperience);
    } catch (err) {
      next(err);
    }
  }

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
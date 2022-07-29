const applicationController = require("./applicationController");

class vacancyController extends applicationController {
  constructor({
    vacancyModel,
  }) {
    super();
    this.vacancyModel = vacancyModel
    }   

  getAllnVacancy = async (req, res, next) => {
    try {
      const allVacancy = await this.vacancyModel.findAll();
      return res.status(200).json(allVacancy);
    } catch (err) {
      next(err);
    }
  };
  getVacancyById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const vacancy = await this.vacancyModel.findOne({
            where: {
                id,
            },
        });
        return res.status(201).json(vacancy);

    } catch (err) {
        next(err);
    }

}
  
}

module.exports = vacancyController;

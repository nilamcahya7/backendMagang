const applicationController = require("./applicationController");

class trainingController extends applicationController {
    constructor({
        trainingModel,
    }) {
        super();
        this.trainingModel = trainingModel
    }

    getAlltraining = async (req, res, next) => {
        try {
            const allTraining = await this.trainingModel.findAll();
            return res.status(200).json(allTraining);
        } catch (err) {
            next(err);
        }
    };

    getTrainingById = async (req, res, next) => {
        try {
            const { id } = req.params;
            const training = await this.trainingModel.findOne({
                where: {
                    id,
                },
            });
            return res.status(200).json(training);

        } catch (err) {
            next(err);
        }

    }


}

module.exports = trainingController;
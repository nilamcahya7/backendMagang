const applicationController = require("./applicationController");

class inclusionController extends applicationController {
    constructor({
        inclusionModel,
    }) {
        super();
        this.inclusionModel = inclusionModel
    }

    getAllinclusion = async (req, res, next) => {
        try {
            const allInclusion = await this.inclusionModel.findAll();
            return res.status(200).json(allInclusion);
        } catch (err) {
            next(err);
        }
    };

    getInclusionById = async (req, res, next) => {
        try {
            const { id } = req.params;
            const inclusion = await this.inclusionModel.findOne({
                where: {
                    id,
                },
            });
            return res.status(201).json(inclusion);

        } catch (err) {
            next(err);
        }

    }


}

module.exports = inclusionController;
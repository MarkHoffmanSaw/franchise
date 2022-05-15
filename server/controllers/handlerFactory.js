const APIFeatures = require("../utils/APIFeatures");

exports.getAll = (Model) => {
  return async (req, res, next) => {
    try {
      const features = new APIFeatures(Model.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();

      const data = await features.query;

      res.status(200).json({
        status: "success",
        data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

exports.getOne = (Model) => {
  return async (req, res, next) => {
    try {
      const data = await Model.findById(req.params.id);

      res.status(200).json({
        status: "success",
        data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

exports.createOne = (Model) => {
  return async (req, res, next) => {
    const data = await Model.create(req.body);
    res.status(200).json({
      status: "success",
      data,
    });
  };
};

const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    const features = new APIFeatures(Model.find(), req.query)
      .filter() // ['sort','fields','page','limit']
      .sort() // ?sort=...
      .limitFields() // ?fields=...
      .paginate(); // ?page=...&limit=...

    const doc = await features.query.select("-fullDescription");

    res.status(200).json({
      status: "success",
      results: doc.length,
      doc,
    });
  });

exports.getOne = (Model) =>
  catchAsync(async (req, res, next) => {
    let doc;
    if (req.params.id) doc = await Model.findById(req.params.id); // for an user
    if (req.params.slug) doc = await Model.findOne({ slug: req.params.slug }); // for an card

    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }

    res.status(200).json({
      status: "success",
      doc,
    });
  });

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);

    res.status(200).json({
      status: "success",
      doc,
    });
  });

exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }

    res.status(200).json({
      status: "success",
      doc,
    });
  });

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }

    res.status(204).json({
      status: "sucess",
      data: null,
    });
  });

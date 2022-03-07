const { check } = require("express-validator");
const { handleValidationErrors } = require("./utils");

const id = check("id")
  .notEmpty()
  .withMessage("cannot be empty")
  .isInt({ min: 0 });
const imageUrl = check("imageUrl")
  .notEmpty()
  .withMessage("cannot be empty")
  .isURL({ require_protocol: false, require_host: false });

exports.validateCreate = [imageUrl, handleValidationErrors];

exports.validateUpdate = [id, imageUrl, handleValidationErrors];

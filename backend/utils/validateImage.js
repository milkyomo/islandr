const { check } = require("express-validator");
const { handleValidationErrors } = require("./validation");

const imageUrl = check("imageUrl")
  .notEmpty()
  .isURL({ require_protocol: false, require_host: false })
  .withMessage("Please provide a valid URL");

exports.validateCreate = [imageUrl, handleValidationErrors];

exports.validateUpdate = [imageUrl, handleValidationErrors];

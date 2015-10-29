var CustomError = require("./CustomError.js");
var util = require("util");

function ConflictError(message, previousError) {
    CustomError.call(this, message, previousError);
}
util.inherits(ConflictError, CustomError);

module.exports = ConflictError;

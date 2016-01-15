var CustomError = require("./CustomError.js");
var util = require("util");

function MissingArgumentError(message, previousError) {
    CustomError.call(this, message, previousError);
}
util.inherits(MissingArgumentError, CustomError);

module.exports = MissingArgumentError;

var CustomError = require("./CustomError.js");
var util = require("util");

function InvalidArgumentError(message, previousError) {
    CustomError.call(this, message, previousError);
}
util.inherits(InvalidArgumentError, CustomError);

module.exports = InvalidArgumentError;

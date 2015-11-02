var CustomError = require("./CustomError.js");
var util = require("util");

function InvalidArgumentError(argumentName, message, previousError) {
    this.invalidArgument = argumentName || "";
    CustomError.call(this, message, previousError);
}
util.inherits(InvalidArgumentError, CustomError);

module.exports = InvalidArgumentError;

var CustomError = require("./CustomError.js");
var util = require("util");

function InternalError(message, previousError) {
    CustomError.call(this, message, previousError);
}
util.inherits(InternalError, CustomError);

module.exports = InternalError;

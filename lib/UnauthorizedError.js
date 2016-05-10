var CustomError = require("./CustomError.js");
var util = require("util");

function UnauthorizedError(message, previousError) {
    CustomError.call(this, message, previousError);
}
util.inherits(UnauthorizedError, CustomError);

module.exports = UnauthorizedError;

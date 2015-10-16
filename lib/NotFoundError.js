var CustomError = require("./CustomError.js");
var util = require("util");

function NotFoundError(message, previousError) {
    CustomError.call(this, message, previousError);
}
util.inherits(NotFoundError, CustomError);

module.exports = NotFoundError;

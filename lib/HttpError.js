var CustomError = require("./CustomError.js");
var NotFoundError = require("./NotFoundError.js");
var util = require("util");

var HttpError = function(statusCode, message, previousError) {
    if(statusCode == 404) {
        return new NotFoundError(message, previousError);
    }
    CustomError.call(this, message, previousError);
    this.statusCode = statusCode;
};
util.inherits(HttpError, CustomError);

module.exports = HttpError;

var CustomError = require("./CustomError.js");
var util = require("util");

var NotFoundError = function(message, previousError) {
    CustomError.call(this, message, previousError);
};
util.inherits(NotFoundError, CustomError);

module.exports = NotFoundError;

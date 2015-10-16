var util = require("util");

var CustomError = function(message, previousError) {
    Error.call(this, message);
    this.previousError = previousError;
    this.name = this.type.name;
};
util.inherits(CustomError, Error);

CustomError.prototype.is = function(errorType) {
    return this.constructor === errorType;
};

module.exports = CustomError;

var util = require("util");

function CustomError(message, previousError) {
    this.previousError = previousError;
    this.type = this.constructor.name;
    this.message = message;
    this.stack = "";

    var helperError = new Error(message);
    var re = new RegExp("new " + this.type + "[^\n]+\n", "g");
    var result = re.exec(helperError.stack);

    if(result) {
        this.stack = this.type + ": " + message + "\n" + helperError.stack.slice(re.lastIndex);
    }
}

CustomError.prototype.is = function(errorType) {
    return this.constructor === errorType;
};

CustomError.prototype.toString = function() {
    return this.stack;
};

module.exports = CustomError;

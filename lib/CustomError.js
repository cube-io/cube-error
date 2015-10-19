function CustomError(message, previousError) {
    this.previousError = previousError;
    this.type = this.constructor.name;
    this.message = message || "";
    this.stack = getRelevantStack(new Error().stack, message, this.type);
}

function getRelevantStack(fullStack, message, type) {
    var re = new RegExp("new " + type + "[^\n]+\n", "g");
    var result = re.exec(fullStack);

    if(!result) {
        return "";
    }

    return type + ": " + message + "\n" + fullStack.slice(re.lastIndex);;
}


CustomError.prototype.is = function(errorType) {
    return this.constructor === errorType;
};

CustomError.prototype.toString = function() {
    return this.stack;
};

module.exports = CustomError;

function CustomError(message, previousError) {
    this.previousError = previousError;
    this.type = this.constructor.name;
    this.message = message || "";
    this.stack = getRelevantStack(new Error().stack, message, this.type);
}

function getRelevantStack(fullStack, message, type) {
    var matchConstructorStackFrame = new RegExp("new " + type + "[^\n]+\n", "g");
    var constructorStackFrameLine = matchConstructorStackFrame.exec(fullStack);

    if(!constructorStackFrameLine) {
        return "";
    }

    return type + ": " + message + "\n" + fullStack.slice(matchConstructorStackFrame.lastIndex);
}


CustomError.prototype.is = function(errorType) {
    return this.constructor === errorType;
};

CustomError.prototype.toString = function() {
    return this.stack;
};

module.exports = CustomError;

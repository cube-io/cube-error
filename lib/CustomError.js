function CustomError(message, previousError) {
    this.previousError = previousError;
    this.type = this.constructor.name;
    this.message = message || "";
    this.stack = getRelevantStackTrace(new Error().stack, message, this.type);
}

function getRelevantStackTrace(fullStackTrace, message, type) {
    var matchConstructorStackFrame = new RegExp("new " + type + "[^\n]+\n", "g");
    var constructorStackFrameLine = matchConstructorStackFrame.exec(fullStackTrace);

    if(!constructorStackFrameLine) {
        return "";
    }

    var stackTraceHeader = type + ": " + message + "\n";
    var relevantStack = fullStackTrace.slice(matchConstructorStackFrame.lastIndex);
    return stackTraceHeader + relevantStack;
}

CustomError.prototype.is = function(ErrorType) {
    var equal = true;

    if (this.constructor === ErrorType) {
        return equal;
    }

    var errorType = new ErrorType();
    if (this.type == errorType.type) {
        return equal;
    }

    return !equal;
};

CustomError.prototype.toString = function() {
    return this.stack;
};

module.exports = CustomError;

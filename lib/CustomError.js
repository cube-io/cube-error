function CustomError(message, previousError) {
    this.previousError = previousError;
    this.typeName = this.constructor.name;
    this.message = message || "";
    this.stack = getRelevantStackTrace(new Error().stack, message, this.typeName);
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
    if (this.constructor === ErrorType) {
        return true;
    }

    var errorType = new ErrorType();
    return (this.typeName == errorType.typeName);
};

CustomError.prototype.toString = function() {
    return this.stack;
};

module.exports = CustomError;

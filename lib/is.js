module.exports = function(ExpectedErrorType, error) {
    return typeof(error.is) === "function" && error.is(ExpectedErrorType);
};

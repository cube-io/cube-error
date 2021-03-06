module.exports = {
    NotFound: require("./lib/NotFoundError.js"),
    Http: require("./lib/HttpError.js"),
    Custom: require("./lib/CustomError.js"),
    is: require("./lib/is.js"),
    Conflict: require("./lib/ConflictError.js"),
    InvalidArgument: require("./lib/InvalidArgumentError.js"),
    MissingArgument: require("./lib/MissingArgumentError.js"),
    Unauthorized: require("./lib/UnauthorizedError.js"),
    Internal: require("./lib/InternalError.js")
};

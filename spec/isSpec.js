var NotFoundError = require("../index.js").NotFound;
var HttpError = require("../index.js").Http;
var is = require("../index.js").is;

describe("is", function() {

    it("can compare two custom errors", function() {
        var error = new NotFoundError("na");
        expect(is(NotFoundError, error)).toBeTruthy();
    });

    it("returns false if error is not a custom error", function() {
        var error = new Error("na");
        expect(is(NotFoundError, error)).toBeFalsy();
    });

    it("returns false if error is the wrong custom error type", function() {
        var httpError = new HttpError();
        expect(is(NotFoundError, httpError)).toBeFalsy();
    });

});

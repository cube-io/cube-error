var HttpError = require("../index.js").Http;
var NotFoundError = require("../index.js").NotFound;

describe("HttpError", function() {
    it("has a message", function() {
        var e = new HttpError(500, "hello, world");
        expect(e.message).toEqual("hello, world");
    });

    it("has a status code", function() {
        var e = new HttpError(500);
        expect(e.statusCode).toEqual(500);
    });

    it("returns a NotFoundError if status code is 404", function() {
        var e = new HttpError(404);
        expect(e.is(NotFoundError)).toBeTruthy();
        expect(e.typeName).toEqual("NotFoundError");
    });

    it("defaults to an empty string if it has no message", function() {
        var e = new HttpError(500);
        expect(e.message).toEqual("");
    });

    it("has a stack trace", function() {
        var e = new HttpError(500, "hello kitty");
        expect(e.stack).toMatch(/^HttpError: hello kitty/);
    });

    it("has a previous error", function() {
        var innerError = {
            message: "something",
            statusCode: 1337,
            psudo: "error much"
        };
        var e = new HttpError(500, "Got pseudo-error from couch", innerError);
        expect(e.previousError).toEqual(innerError);
    });

    it("has a type", function() {
        var e = new HttpError(500);
        expect(e.typeName).toEqual("HttpError");
    });

    it("can be matched with `is`", function() {
        var e = new HttpError(500);
        expect(e.is(HttpError)).toBeTruthy();
    });

    it("converts to its stacktrace when printed", function() {
        var e = new HttpError(500, "hello");
        var eAsString = "Found this error: " + e;
        expect(eAsString).toEqual("Found this error: " + e.stack);
    });

    it("is an instance of Error", function() {
        var e = new HttpError();
        expect(e instanceof Error).toBeTruthy();
    });
});

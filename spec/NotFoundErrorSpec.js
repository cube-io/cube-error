var NotFoundError = require("../index.js").NotFound;

describe("NotFoundError", function() {
    it("has a message", function() {
        var e = new NotFoundError("hello, world");
        expect(e.message).toEqual("hello, world");
    });

    it("defaults to an empty string if it has no message", function() {
        var e = new NotFoundError();
        expect(e.message).toEqual("");
    });

    it("has a stack trace", function() {
        var e = new NotFoundError("hello kitty");
        expect(e.stack).toMatch(/^NotFoundError: hello kitty/);
    });

    it("has a previous error", function() {
        var innerError = {
            message: "something",
            statusCode: 1337,
            psudo: "error much"
        };
        var e = new NotFoundError("Got pseudo-error from couch", innerError);
        expect(e.previousError).toEqual(innerError);
    });

    it("has a type", function() {
        var e = new NotFoundError();
        expect(e.type).toEqual("NotFoundError");
    });

    it("has a can be matched with `is`", function() {
        var e = new NotFoundError();
        expect(e.is(NotFoundError)).toBeTruthy();
    });

    it("converts to its stacktrace when printed", function() {
        var e = new NotFoundError("hello");
        var eAsString = "Found this error: " + e;
        expect(eAsString).toEqual("Found this error: " + e.stack);
    });
});

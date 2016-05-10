var UnauthorizedError = require("../index.js").Unauthorized;

describe("UnauthorizedError", function() {
    it("has a message", function() {
        var e = new UnauthorizedError("hello, world");
        expect(e.message).toEqual("hello, world");
    });

    it("defaults to an empty string if it has no message", function() {
        var e = new UnauthorizedError();
        expect(e.message).toEqual("");
    });

    it("has a stack trace", function() {
        var e = new UnauthorizedError("hello kitty");
        expect(e.stack).toMatch(/^UnauthorizedError: hello kitty/);
    });

    it("has a previous error", function() {
        var innerError = {
            message: "something",
            statusCode: 1337,
            psudo: "error much"
        };
        var e = new UnauthorizedError("Got pseudo-error from couch", innerError);
        expect(e.previousError).toEqual(innerError);
    });

    it("has a type", function() {
        var e = new UnauthorizedError();
        expect(e.typeName).toEqual("UnauthorizedError");
    });

    it("can be matched with `is`", function() {
        var e = new UnauthorizedError();
        expect(e.is(UnauthorizedError)).toBeTruthy();
    });

    it("converts to its stacktrace when printed", function() {
        var e = new UnauthorizedError("hello");
        var eAsString = "Found this error: " + e;
        expect(eAsString).toEqual("Found this error: " + e.stack);
    });
});

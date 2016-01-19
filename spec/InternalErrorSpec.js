var InternalError = require("../index.js").Internal;

describe("InternalError", function() {
    it("has a message", function() {
        var e = new InternalError("hello, world");
        expect(e.message).toEqual("hello, world");
    });

    it("defaults to an empty string if it has no message", function() {
        var e = new InternalError();
        expect(e.message).toEqual("");
    });

    it("has a stack trace", function() {
        var e = new InternalError("hello kitty");
        expect(e.stack).toMatch(/^InternalError: hello kitty/);
    });

    it("has a previous error", function() {
        var innerError = {
            message: "something",
            statusCode: 1337,
            psudo: "error much"
        };
        var e = new InternalError("Got pseudo-error from couch", innerError);
        expect(e.previousError).toEqual(innerError);
    });

    it("has a type", function() {
        var e = new InternalError();
        expect(e.typeName).toEqual("InternalError");
    });

    it("can be matched with `is`", function() {
        var e = new InternalError();
        expect(e.is(InternalError)).toBeTruthy();
    });

    it("converts to its stacktrace when printed", function() {
        var e = new InternalError("hello");
        var eAsString = "Found this error: " + e;
        expect(eAsString).toEqual("Found this error: " + e.stack);
    });

    it("is an instance of Error", function() {
        var e = new InternalError();
        expect(e instanceof Error).toBeTruthy();
    });
});

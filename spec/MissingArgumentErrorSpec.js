var MissingArgumentError = require("../index.js").MissingArgument;

describe("MissingArgumentError", function() {
    it("has a message", function() {
        var e = new MissingArgumentError("hello, world");
        expect(e.message).toEqual("hello, world");
    });

    it("defaults to an empty string if it has no message", function() {
        var e = new MissingArgumentError();
        expect(e.message).toEqual("");
    });

    it("has a stack trace", function() {
        var e = new MissingArgumentError("hello kitty");
        expect(e.stack).toMatch(/^MissingArgumentError: hello kitty/);
    });

    it("has a previous error", function() {
        var innerError = {
            message: "something",
            statusCode: 1337,
            psudo: "error much"
        };
        var e = new MissingArgumentError("Got pseudo-error from couch", innerError);
        expect(e.previousError).toEqual(innerError);
    });

    it("has a type", function() {
        var e = new MissingArgumentError();
        expect(e.typeName).toEqual("MissingArgumentError");
    });

    it("can be matched with `is`", function() {
        var e = new MissingArgumentError();
        expect(e.is(MissingArgumentError)).toBeTruthy();
    });

    it("converts to its stacktrace when printed", function() {
        var e = new MissingArgumentError("hello");
        var eAsString = "Found this error: " + e;
        expect(eAsString).toEqual("Found this error: " + e.stack);
    });
});

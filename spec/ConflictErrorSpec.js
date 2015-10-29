var ConflictError = require("../index.js").Conflict;

describe("ConflictError", function() {
    it("has a message", function() {
        var e = new ConflictError("world, hello");
        expect(e.message).toEqual("world, hello");
    });

    it("defaults to an empty string if it has no message", function() {
        var e = new ConflictError();
        expect(e.message).toEqual("");
    });

    it("has a stack trace", function() {
        var e = new ConflictError("pokemón gotta catch them all");
        expect(e.stack).toMatch(/^ConflictError: pokemón gotta catch them all/);
    });

    it("has a previous error", function() {
        var innerError = {
            message: "something",
            statusCode: 1337,
            psudo: "error much"
        };
        var e = new ConflictError("Got pseudo-error from couch", innerError);
        expect(e.previousError).toEqual(innerError);
    });

    it("has a type", function() {
        var e = new ConflictError();
        expect(e.type).toEqual("ConflictError");
    });

    it("can be matched with `is`", function() {
        var e = new ConflictError();
        expect(e.is(ConflictError)).toBeTruthy();
    });

    it("converts to its stacktrace when printed", function() {
        var e = new ConflictError("hello");
        var eAsString = "Found this error: " + e;
        expect(eAsString).toEqual("Found this error: " + e.stack);
    });
});

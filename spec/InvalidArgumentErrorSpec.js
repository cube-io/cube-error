var InvalidArgumentError = require("../index.js").InvalidArgument;

describe("InvalidArgumentError", function() {
    it("has a message", function() {
        var e = new InvalidArgumentError("world, hello");
        expect(e.message).toEqual("world, hello");
    });

    it("defaults to an empty string if it has no message", function() {
        var e = new InvalidArgumentError();
        expect(e.message).toEqual("");
    });

    it("has a stack trace", function() {
        var e = new InvalidArgumentError("Gemu no jikan");
        expect(e.stack).toMatch(/^InvalidArgumentError: Gemu no jikan/);
    });

    it("has a previous error", function() {
        var innerError = {
            message: "Me? Duel you? I'd have more of a challenge playing solitaire",
            statusCode: 1337,
            psudo: "lorem ipsum"
        };
        var e = new InvalidArgumentError("Got lorem ipsum error from Yu-Gi-Oh", innerError);
        expect(e.previousError).toEqual(innerError);
    });

    it("has a type", function() {
        var e = new InvalidArgumentError();
        expect(e.type).toEqual("InvalidArgumentError");
    });

    it("can be matched with `is`", function() {
        var e = new InvalidArgumentError();
        expect(e.is(InvalidArgumentError)).toBeTruthy();
    });

    it("converts to its stacktrace when printed", function() {
        var e = new InvalidArgumentError("It is game time!");
        var eAsString = "Found this error: " + e;
        expect(eAsString).toEqual("Found this error: " + e.stack);
    });
});

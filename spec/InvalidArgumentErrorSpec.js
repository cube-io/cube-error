var InvalidArgumentError = require("../index.js").InvalidArgument;

describe("InvalidArgumentError", function() {
    it("has a message", function() {
        var e = new InvalidArgumentError("nameOfArg", "world, hello");
        expect(e.message).toEqual("world, hello");
    });

    it("defaults to an empty string if it has no message", function() {
        var e = new InvalidArgumentError("nameOfArg");
        expect(e.message).toEqual("");
    });

    it("has a stack trace", function() {
        var e = new InvalidArgumentError("nameOfArg", "Gemu no jikan");
        expect(e.stack).toMatch(/^InvalidArgumentError: Gemu no jikan/);
    });

    it("has a previous error", function() {
        var innerError = {
            message: "Me? Duel you? I'd have more of a challenge playing solitaire",
            statusCode: 1337,
            psudo: "lorem ipsum"
        };
        var e = new InvalidArgumentError("nameOfArg", "Got lorem ipsum error from Yu-Gi-Oh", innerError);
        expect(e.previousError).toEqual(innerError);
    });

    it("has a type", function() {
        var e = new InvalidArgumentError();
        expect(e.typeName).toEqual("InvalidArgumentError");
    });

    it("has a 'invalidArgument' property", function() {
        var e = new InvalidArgumentError("superMan", "world, hello");
        expect(e.invalidArgument).toEqual("superMan");
    });

    it("defaults 'invalidArgument' to an empty string if it has has no arg-name", function() {
        var e = new InvalidArgumentError();
        expect(e.invalidArgument).toEqual("");
    });

    it("can be matched with `is`", function() {
        var e = new InvalidArgumentError();
        expect(e.is(InvalidArgumentError)).toBeTruthy();
    });

    it("converts to its stacktrace when printed", function() {
        var e = new InvalidArgumentError("Yu-Gi-Oh", "It is game time!");
        var eAsString = "Found this error: " + e;
        expect(eAsString).toEqual("Found this error: " + e.stack);
    });

    it("is an instance of Error", function() {
        var e = new InvalidArgumentError();
        expect(e instanceof Error).toBeTruthy();
    });
});

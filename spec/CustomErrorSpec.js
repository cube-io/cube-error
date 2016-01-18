var CustomError = require("../index.js").Custom;

describe("CustomError", function() {
    it("has no stack trace", function() {
        var e = new CustomError("pokemón gotta catch them all");
        expect(e.stack).toBe("");
    });

    it("has a type", function() {
        var e = new CustomError();
        expect(e.typeName).toEqual("Error");
    });

    it("is an instance of Error", function() {
        var e = new CustomError();
        expect(e instanceof Error).toBeTruthy();
    });
});

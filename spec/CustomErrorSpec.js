var CustomError = require("../index.js").Custom;

describe("CustomError", function() {
    it("has a stack trace", function() {
        var e = new CustomError("pokemón gotta catch them all");
        expect(e.stack).toMatch(/^CustomError: pokemón gotta catch them all/);
    });

    it("has a type", function() {
        var e = new CustomError();
        expect(e.typeName).toEqual("Error");
    });
});

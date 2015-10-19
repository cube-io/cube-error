node-error
==========

This library adds some standardization to errors, and provides an easy way of building new error types.

Installation
------------

    npm install node-error --save
    
Usage
-----

It is simple to require in the library and throw a standardized error:

```js
var CustomErrors = require("node-error");

throw new CustomErrors.NotFound("Hello");
```

The real power, however, comes with matching an error-type:

```js
somethingThatFails(function(error) {
  if(error && error.is(CustomErrors.NotFound)) {
    //do something
    return;
  }
  if(error) {
    //do else
    return;
  }
  //success
});
```

### Supported errors

We currently support these errors:

- `NotFound(message, previousError)`:
  Used when a resource could not be located.
- `HttpError(statusCode, message, previousError)`:
  Maps common status codes to correct errors.
  `404` maps to `NotFound`.
  Otherwise returns a `HttpError` with a `statusCode` field.

### Building custom errors

You can build a custom error by inheriting from `Custom`:

```js
var CustomError = require("node-error").Custom;

function MyError(message, previousError) {
  CustomError.call(this, message, previousError);
  //something custom?
}
util.inherits(MyError, CustomError);
```

This error will come prepackaged with `is(MyError)`.

TODO
----

- Map HttpError to more errors in specific cases.
  Some ideas are:
  - `400` to `BadRequestError`
  - `401` to `UnauthorizedError`
  - `403` to `ForbiddenError`
  - `500` to `InternalServerError`
- Make HttpError alternate classes *always* have a statusCode anyway (to reduce breakingness of changes when introducing new mappings).
- Test CustomError extension as a thing in unit tests.
- Handle the case where CustomError is subclasses wrongly (eg. `var MyError = function() {}; util.inherits(MyError, CustomError);`), and no `this.constructor.name` exists.
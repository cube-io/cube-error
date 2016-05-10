cube-error
==========

This library adds some standardization to errors, and provides an easy way of building new error types.

Installation
------------

    npm install cube-error --save

Usage
-----

It is simple to require in the library and throw a standardized error:

```js
var CustomErrors = require("cube-error");

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
- `Conflict(message, previousError)`:
  Used when a resource modification conflicts with existing internal state.
- `MissingArgument(message, previousError)`:
  Can be used when arguments were expected but not passed.
- `InvalidArgument(invalidArgumentName, message, previousError)`:
  Can be used as a custom `TypeError` to indicate unexpected input-type or value
  The error has a `invalidArgument`-field which stores the value of `invalidArgumentName`
- `Unauthorized(message, previousError)`:
  Can be used to indicate that authorization has failed. A message can be included to
  provide a reason as to what will happen as a consequence.
- `Internal(message, previousError)`:
  Used when an error happens, which can't be recognized as any other error type.

`Custom` should never be instantiated, but is intended to be inherited from.


### Building custom errors

You can build a custom error by inheriting from `Custom`:

```js
var CustomError = require("cube-error").Custom;

function MyError(message, previousError) {
  CustomError.call(this, message, previousError);
  //something custom?
}
util.inherits(MyError, CustomError);
```

This error will come prepackaged with `is(MyError)`, `stack`, `message`, and `previousError` fields.

TODO
----

- Map HttpError to more errors in specific cases.
  Some ideas are:
  - `400` to `BadRequestError`
  - `403` to `ForbiddenError`
  - `500` to `InternalServerError`
- Make HttpError alternate classes *always* have a statusCode anyway (to reduce breakingness of changes when introducing new mappings).
- Test CustomError extension as a thing in unit tests.
- Handle the case where CustomError is subclasses wrongly (eg. `var MyError = function() {}; util.inherits(MyError, CustomError);`), and no `this.constructor.name` exists.

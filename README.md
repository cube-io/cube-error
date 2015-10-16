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
var Error = require("node-error");

throw new Error.NotFound("Hello");
```

The real power, however, comes with matching an error-type:

```js
somethingThatFails(function(error) {
  if(error && error.is(Error.NotFound)) {
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

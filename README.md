[![Build Status](https://travis-ci.org/claudiopro/flattery.svg?branch=master)](https://travis-ci.org/claudiopro/flattery)

# flattery

Flattens an array of nested arrays into a list of scalar elements

# Instructions

Install via `npm`:

```bash
npm install flattery --save
```

Use in your Node scripts like this:

```js
const flattery = require('flattery');

var flattened = flattery([[1, 2, [3]], 4]); // -> [1, 2, 3, 4]
```

# License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) Claudio Procida 2015-2016

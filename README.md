# is-circleci

[![NPM version](https://img.shields.io/npm/v/is-circleci.svg)](https://www.npmjs.com/package/is-circleci)
[![Circle CI](https://circleci.com/gh/shinnn/is-circleci/tree/master.svg?style=svg)](https://circleci.com/gh/shinnn/is-circleci/tree/master)
[![Build Status](https://travis-ci.org/shinnn/is-circleci.svg?branch=master)](https://travis-ci.org/shinnn/is-circleci)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/is-circleci.svg)](https://coveralls.io/r/shinnn/is-circleci)
[![devDependency Status](https://david-dm.org/shinnn/is-circleci/dev-status.svg)](https://david-dm.org/shinnn/is-circleci#info=devDependencies)

Check if a [Node](https://nodejs.org/) program is running on [CircleCI](https://circleci.com/)

```javascript
const isCircleci = require('is-circleci');

// On CircleCI
isCircleci === true; //=> true

// On a non-CircleCI environment
isCircleci === false; //=> true
```

## Installation

[Use npm](https://docs.npmjs.com/cli/install).

```
npm install is-circleci
```

## License

[The Unlicense](./LICENSE)

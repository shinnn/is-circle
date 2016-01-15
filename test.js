'use strong';

const test = require('tape');
const isCircleci = require('.');

const expected = 'npm_lifecycle_event' in process.env && process.env.npm_lifecycle_event === 'test-circleci';

test('isCircleci', t => {
  t.strictEqual(
    isCircleci,
    expected,
    'should expose a Boolean value that indicates whether the script is runnnig on CircleCI.'
  );

  t.end();
});

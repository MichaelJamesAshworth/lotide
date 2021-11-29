const assertEqual = require('../assertEqual');
const head = require('../head');
const assert = require('chai').assert;

//Test Code
describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it ("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it ("returns 'hello' for ['hello', 'lighthouse', 'labs']", () => {
    assert.strictEqual(head(['hello']), 'hello');
  });

  it ("returns 'one' for ['one']", () => {
    assert.strictEqual(head(['one']), 'one');
  });

  it ("returns '[]' for ' '", () => {
    assert.strictEqual(head([]),);
  });
});
const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

  it("returns [] for ['Yo Yo']", () => {
    assert.deepEqual(tail(['Yo Yo']), []);
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail(['Yo Yo']), []);
  });
});
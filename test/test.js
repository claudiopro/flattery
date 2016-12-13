var flattery = require('..'),
  expect = require('chai').expect;

describe('the flattery util', function() {
  it('reduces a nested array to a flat list of integers', function() {
    expect(flattery([1, [2, 3], [4]])).to.eql([1, 2, 3, 4]);
    expect(flattery([[1, 2], 3, [4]])).to.eql([1, 2, 3, 4]);
    expect(flattery([1, [2, [3, 4]]])).to.eql([1, 2, 3, 4]);
    expect(flattery([1, [2, [3]], 4])).to.eql([1, 2, 3, 4]);
    expect(flattery([[1, 2, [3]], 4])).to.eql([1,2,3,4]);
  });

  it('does not alter a flat array', function() {
    expect(flattery([1, 2, 3, 4])).to.eql([1, 2, 3, 4]);
  });

  it('returns an empty array when passed in an empty array', function() {
    expect(flattery([])).to.eql([]);
  });

  it('throws when called on a scalar value', function() {
    expect(function(){flattery(1)}).to.throw;
  });

  it('does not throw when called on an array', function() {
    expect(function(){flattery([1])}).to.not.throw();
    expect(function(){flattery([1, 2])}).to.not.throw();
    expect(function(){flattery([1, [2]])}).to.not.throw();
    expect(function(){flattery([1, [2, 3]])}).to.not.throw();
  });

  it('works well on strings', function() {
    expect(flattery([23, 'foo', [34, 1], [['bar', [12]]]])).to.eql([23, 'foo', 34, 1, 'bar', 12]);
    expect(flattery([23, ['foo', [34, 1]], [['bar', [12]]]])).to.eql([23, 'foo', 34, 1, 'bar', 12]);
    expect(flattery([[23], ['foo'], [34, [1]], [['bar', [12]]]])).to.eql([23, 'foo', 34, 1, 'bar', 12]);
  });
});

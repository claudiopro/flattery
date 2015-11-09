var flattery = require('..');

describe('the flattery util', function() {
  it('reduces a nested array to a flat list of integers', function() {
    expect(flattery([1, [2, 3], [4]])).toEqual([1, 2, 3, 4]);
    expect(flattery([[1, 2], 3, [4]])).toEqual([1, 2, 3, 4]);
    expect(flattery([1, [2, [3, 4]]])).toEqual([1, 2, 3, 4]);
    expect(flattery([1, [2, [3]], 4])).toEqual([1, 2, 3, 4]);
    expect(flattery([[1, 2, [3]], 4])).toEqual([1,2,3,4]);
  });

  it('does not alter a flat array', function() {
    expect(flattery([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  it('returns an empty array when passed in an empty array', function() {
    expect(flattery([])).toEqual([]);
  });

  it('throws when called on a scalar value', function() {
    expect(function(){flattery(1)}).toThrow();
  });

  it('does not throw when called on an array', function() {
    expect(function(){flattery([1])}).not.toThrow();
    expect(function(){flattery([1, 2])}).not.toThrow();
    expect(function(){flattery([1, [2]])}).not.toThrow();
    expect(function(){flattery([1, [2, 3]])}).not.toThrow();
  });
});

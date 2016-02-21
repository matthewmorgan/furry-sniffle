const rotate = require('./rotate-matrix');

describe('rotate-matrix', ()=>{
  "use strict";

  it('returns an empty object if passed an empty object', ()=>{
    expect(rotate([])).toEqual([]);
  });

  it('throws if passed undefined or null', ()=>{
    const test1 = () => rotate();
    const test2 = () => rotate(null);
    const test3 = () => rotate(undefined);
    expect(test1).toThrow();
    expect(test2).toThrow();
    expect(test3).toThrow();
  });

  it('rotates a matrix 90 degrees clockwise', () => {
    const matrix = [9, 18, 27, 36];
    expect(rotate(matrix)).toEqual([36,9,18,27]);
  });

  it('rotates a matrix of negative numbers 90 degrees clockwise', () => {
    const matrix = [-5, -12, -1, -77];
    expect(rotate(matrix)).toEqual([-77,-5,-12,-1]);
  });

});
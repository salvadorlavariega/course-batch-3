
'use strict';


const sort = require('../src/index');
const assert = require('chai').assert;


describe('Shell algorithm', () => {
    it('Sorting an array ordered', () => {
      const A = [1,2,3,4,5];
      assert.deepEqual(sort(A), [1,2,3,4,5]);
    });

    it('Sorting a simple array', () => {
      const A = [5,4,3,2,1];
      assert.deepEqual(sort(A), [1,2,3,4,5]);
    });

    it('Sorting an array with negative values', () => {
      const A = [5,-2,3,2,1];
      assert.deepEqual(sort(A), [-2, 1, 2, 3, 5]);
    });


});

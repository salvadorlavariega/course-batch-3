const expect = require('chai').expect;
const assert = require('chai').assert;

const index = require('../app/index.js');

describe('Basic Test to get the bigest value',  () => {

    it('should return the bigest value', () => {
        const values = [10, 15, 3, 5, 50, 20];
        expect(index.getBigestValue(values)).to.equal(50);
        });

    it('should return an error', () => {
        const values = [10, 15, 'a', 5, 50, 20];
        expect(()=> {index.getBigestValue(values)}).to.throw(Error, 'The values must be numeric');
    });

});
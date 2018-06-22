'use strict';

const assert    = require('chai').assert;
const expect    = require('chai').expect;
const bubble = require('../app/bubble');

describe('Bubble should accept only array objects ', () => {
    describe('Check isArray Function: ', () => {
        it('return true if the parameter in an array object', () => {
            const myArray = [12,4,62,56,8,23];
            const result   = bubble.isArray(myArray);
            assert.equal(result, true);
        });
        it('return false if a variable integer is not an Array Object',() => {
            const myArray = 50;
            const result   = bubble.isArray(myArray);
            assert.equal(result, false);
        });
        it('return false if a String as parameter is not an Array Object', () => {
            const myArray = 'string'
            const result   = bubble.isArray(myArray);
            assert.equal(result, false);
        });
        it('return false if the undefined variable other is not an Array Object', () =>{
            let other;
            const result   = bubble.isArray(other);
            assert.equal(result, false);
        });
        it('return false if null as parameter is not an Array Object', () => {
            const result   = bubble.isArray(null);
            assert.equal(result, false);
        });
    });

});

describe('Bubble should accept only Integer array objects ',  () => {
    describe('Check isNumericArray Function: ', function() {
        it('return true if the parameter is a numeric array object', () =>{
            const myArray = [12,4,62,56,8,23];
            const result   = bubble.isNumericArray(myArray);
            assert.equal(result, true);
        });
        it('return false if new Array as parameter is not a numeric array object',() => {
            const myArray = new Array;
            const result   = bubble.isNumericArray(myArray);
            assert.equal(result, false);
        });
        it('return false if ["s","a","d"] as parameter is not a numeric array object', () => {
            const myArray = ['s','a','d'];
            const result   = bubble.isNumericArray(myArray);
            assert.equal(result, false);
        });
        it('return false if [12,4,62,56,8,"a"] as parameter is not a numeric array object',() => {
            const myArray = [12,4,62,56,8,'a'];
            const result   = bubble.isNumericArray(myArray);
            assert.equal(result, false);
        });
        it('return false if [] as parameter is not a numeric array object', () => {
            const myArray = [];
            const result   = bubble.isNumericArray(myArray);
            assert.equal(result, false);
        });
    });

});


describe('Bubble Sort must order an integer array from least to greatest',  () =>{
    describe('Check bubbleSort Function: ',  () => {
        it('return empty array [] if the array is not numeric or is empty',  () => {
            const myArray = [];
            const result   = bubble.bubbleSort(myArray);
            expect([]).to.deep.equal(result);
        });

        it('return the array [1,5,3,2] ordened like [1,2,3,5]',  () => {
            const myArray = [1,5,3,2];
            const ordenedArray = [1,2,3,5];
            const result   = bubble.bubbleSort(myArray);
            expect(ordenedArray).to.deep.equal(result);
        });

        it('return the array  [29,45,21,32,12,9,45,23,1,45] ordened like [1,9,12,21,23,29,32,45,45,45]',  () => {
            const myArray = [29,45,21,32,12,9,45,23,1,45];
            const result   = bubble.bubbleSort(myArray);
            expect([1,9,12,21,23,29,32,45,45,45]).to.deep.equal(result);
        });

        it('return the array [345,123,5645,7678,123,4323,23,56,7867] ordened like [23,56,123,123,345,4323,5645,7678,7867]',
            () => {
            const myArray = [345,123,5645,7678,123,4323,23,56,7867];
            const result   = bubble.bubbleSort(myArray);
            expect([23, 56, 123, 123, 345, 4323, 5645, 7678, 7867]).to.deep.equal(result);
            }
         );

    });

});

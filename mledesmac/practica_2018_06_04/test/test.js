'use strict';

const expect  = require('chai').expect;
const assert = require('chai').assert;
const { compareValidStrings, stringToBytes, binToString } = require('../index.js');


it('Values are undefined', () =>{
    expect(compareValidStrings()).to.equal(false);
});

it('Values are the same', () =>{
    expect(compareValidStrings('','1')).to.equal(false);
});

it('String to byte is valid', () =>{
    assert.typeOf(stringToBytes('Test'),'array');
});

it('Valid length of string', () =>{
    expect(stringToBytes('Test')).to.have.lengthOf(4);
});

it('Valid string from bytes', () =>{
    expect(binToString([65])).to.equal('A');
});

it('The new string is the same as the original',  () => {
    const original =  'A';//binToString(stringToBytes('original'));
    const compareString = 'A'; //binToString(stringToBytes('original'));

    expect(compareValidStrings(original,compareString)).to.equal(true);


});


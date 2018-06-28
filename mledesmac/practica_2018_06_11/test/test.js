'use strict';

const assert = require('chai').assert;
const chai = require('chai').use(require('chai-fs'));
const {readFile, getNodes} = require('../index.js');


it('File exists', () => {
    assert.isFile('index.html', 'HTML Exists')
});


it('Has child nodes', () => {
    assert.equal(getNodes('body'), true, 'Has child node')
});

it('Is end of file', () => {
   assert.equals(validString(''), true, 'Is end of file')
});

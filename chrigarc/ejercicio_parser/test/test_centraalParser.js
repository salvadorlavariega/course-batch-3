'use strict';
const assert = require('chai').assert;
const central = require('../centraalParser');
const JsonFiles = require('../tests_files/expects');

describe('Test IO Files: ', () => {
    it('Test File exists', () => {
        const filename = './tests_files/content.html';
        const content = central.openFile(filename);        
        assert.isAbove(content.length, 0);
    });
    it('File not exists', () => {
        const filename = 'lo que sea';
        const content = central.openFile(filename);
        assert.equal(content.length, 0);
    });
});


describe('Test HTML/CSS Parser: ', () => {
    it('Test HTML file without style attributes', () => {
        const filename = './tests_files/content.html';
        const content = central.openFile(filename);
        const result = central.parseHTML(content);
        const expect = JsonFiles.getDummy('content');
        assert.deepEqual(result, expect);
    });

    it('Test CSS file', () => {
        const filename = './tests_files/style.css';
        const content = central.openFile(filename);
        const result = central.parseCSS(content);
        const expect = JsonFiles.getDummy('styles');
        assert.deepEqual(result, expect);
    });

    it('Test HTML file with style attributes', () => {
        const filename = './tests_files/full.html';
        const content = central.openFile(filename);
        const result = central.parseFULL(content);
        const expect = JsonFiles.getDummy('full html');
        assert.deepEqual(result, expect);
    });
});

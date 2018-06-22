'use strict';
const fs = require('fs');
const CSSParser = require('./CSSParser');
const HTMLParser = require('./HTMLParser');

const openFile = (filename) =>{
    let content = '';
    try {
        content = fs.readFileSync(filename, 'utf8');
    }catch(error) {
    }
    return content;
};

const parseHTML = (content) => {
    return HTMLParser.extractElements(content);
};

const parseCSS = (content) => {
    return CSSParser.extract(content);
};

const parseFULL = (content) => {
    return {
        html: HTMLParser.extractElements(content),
        css: CSSParser.extract(content)
    };
};

module.exports = {openFile, parseHTML, parseCSS, parseFULL};

'use strict';

const assert    = require('chai').assert;
const expect    = require('chai').expect;
const parser = require('../app/parser');

describe('return code into HTML tags tags', () => {
    describe('Check extractFrom Function: ', () => {
        let html = `<html>
                        <head>
                        <Body>
                        <div class="name: "> </div>
                        </body>
                        </head>
                        </html>`;

        it('Return all between <html></html>', () => {
            let node = 'html';
            html = parser.extractFrom(node,html);
            assert(typeof (html) === 'string', node + ' node not contains code');
            console.log(html);
        });
        it('Return all between <head></head>', () => {
            let node = 'head';
            html = parser.extractFrom(node,html);
            assert(typeof (html) === 'string', node + ' node not contains code');
            console.log(html);
        });

    });
});
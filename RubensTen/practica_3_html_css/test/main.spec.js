const main = require('../src/main');
const { expect, assert } = require("chai");

describe('Suit Test - Analizador HTML y CSS', () => {
    describe('Suit Test - Find tags', () => {
        it('exist function', () => {
            expect(main.findTag).to.not.equal(undefined);
        });

        it('return tag with their content by a regular expression', () => {
            const result = main.findTag('<span class="sds" data-id="23">And more ...</span><span></span>');
        });
    });

    describe('Make a nodo', () => {
        const INVALID_NAME = {
            CODE: 1000,
            CAUSE: 'Invalid name'
        };

        it('string name is invalid because contain a space in the name of nodo', () => {
            const result = JSON.stringify(main.makeNode('foo bar', '', '', ''));
            expect(result).to.equal(JSON.stringify(INVALID_NAME));
        });

        it('string name is invalid because contain a numbers in the name of nodo', () => {
            const result = JSON.stringify(main.makeNode('foo10', '', '', ''));
            expect(result).to.equal(JSON.stringify(INVALID_NAME));
        });
    });

    describe('Remove spaces in html', () => {
        it('delete spaces in html document', () => {
            
        });
    });
    /*it('etiqueta es valida');
    it('obtener tipo de etiqueta html o css');
    it('crear nodo');
    it('agregar subnodes'); */

});
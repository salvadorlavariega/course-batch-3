'use strict';
const assert = require('chai').assert;
const CSSParser = require('../CSSParser');


describe('Attributes extract style from html tag: ', () => {
    it('html tag with style attribute', () => {
        const textLine = '<div data-item="data1" data-value="value1" style="display:initial; color: black"></div>';
        const expect_value = {
                selectors: ['div'],
                attributes: [
                    {key: 'display', value: 'initial'},
                    {key: 'color', value: 'black'},
                ],
                mixin: ''
            };
        const result_parser = CSSParser.parserFromHTMLTag(textLine);
        assert.deepEqual(result_parser, expect_value);
    });
});

describe('Extract Rules array style from CSS rule: ', () => {
    it('test Array rule', () => {
        const textLine = '.navbar__title a{ color: white; text-decoration: none;}';
        const expect_value = ['.navbar__title', 'a'];
        const result_parser = CSSParser.getArrayNameRules(textLine);
        assert.deepEqual(result_parser, expect_value);
    });
});

describe('Extract Attributtes style from CSS rule: ', () => {
    it('CSS rule with attributes', () => {
        const textLine = '@font-face { font-family: montserrat; src: url("../fonts/Montserrat-Regular.ttf"); font-weight: normal;}';
        const expect_value = [
            {key: 'font-family', value: 'montserrat'},
            {key: 'src', value: 'url("../fonts/Montserrat-Regular.ttf")'},
            {key: 'font-weight', value: 'normal'},
        ];
        const result_parser = CSSParser.getAttributesFromCSSRule(textLine);
        assert.deepEqual(result_parser, expect_value);
    });
    it('CSS rule without attributes', () => {
        const textLine = '@font-face {}';
        const expect_value = [];
        const result_parser = CSSParser.getAttributesFromCSSRule(textLine);
        assert.deepEqual(result_parser, expect_value);
    });
});

describe('Extract Mixin from CSS rule: ', () => {
    it('CSS rule with mixin', () => {
        const textLine = '@font-face { @apply --my-component-titles; }';
        const expect_value = '--my-component-titles';
        const result_parser = CSSParser.getMixinFromCSSRule(textLine);
        assert.equal(result_parser, expect_value);
    });
    it('CSS rule without mixin', () => {
        const textLine = '@font-face {}';
        const expect_value = '';
        const result_parser = CSSParser.getMixinFromCSSRule(textLine);
        assert.equal(result_parser, expect_value);
    });
});

describe('Suite test parse CSS: ', () => {
    it('Test nextRule', () => {
        const textLine = '@font-face { font-family: montserrat; src: url("../fonts/Montserrat-Regular.ttf"); font-weight: normal;} .navbar__title a{ color: white; text-decoration: none;}';
        const expect_value = {
            content: '@font-face { font-family: montserrat; src: url("../fonts/Montserrat-Regular.ttf"); font-weight: normal;}',
            pending: ' .navbar__title a{ color: white; text-decoration: none;}'
        };
        const result = CSSParser.nextRule(textLine);
        assert.deepEqual(result, expect_value);
    });

    it('Test parser', () =>{
        const textLine = '@font-face { font-family: montserrat; src: url("../fonts/Montserrat-Regular.ttf"); font-weight: normal;} .navbar__title a{ color: white; text-decoration: none; @apply --my-component-titles;}';
        const expect = [
            {
                selectors: ['@font-face'],
                attributes: [
                    {key: 'font-family', value: 'montserrat'},
                    {key: 'src', value: 'url("../fonts/Montserrat-Regular.ttf")'},
                    {key: 'font-weight', value: 'normal'}
                ],
                mixin: ''
            },
            {
                selectors: ['.navbar__title', 'a'],
                attributes: [
                    {key: 'color', value: 'white'},
                    {key: 'text-decoration', value: 'none'},
                ],
                mixin: '--my-component-titles'
            }
        ];
        const result = CSSParser.extract(textLine);
        assert.deepEqual(result, expect);
    });
});

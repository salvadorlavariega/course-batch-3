'use strict';

const STYLE_ATTRIBUTE = 'style';
const OPEN_SYMBOL = '{';
const CLOSE_SYMBOL = '}';
const APPLY = '@apply'

const parserFromHTMLTag = (content) => {
    const expresion = / style=".*"/;
    const match = expresion.exec(content);
    const styles = generateStylesHTML(match.toString().trim());
    const resultStyle = {
        selectors: [extractTag(content)], attributes: styles, mixin: ''
    };
    return resultStyle;
};

const getAttributesFromCSSRule = (content) => {
    const indexOpenSymbol = content.indexOf(OPEN_SYMBOL);
    const indexCloseSymbol = content.indexOf(CLOSE_SYMBOL);
    return generateStylesCSS(content.substring(indexOpenSymbol + 1, indexCloseSymbol));
};

const getMixinFromCSSRule = (content) =>{
    const indexOpenSymbol = content.indexOf(OPEN_SYMBOL);
    const indexCloseSymbol = content.indexOf(CLOSE_SYMBOL);
    return generateStylesCSS(content.substring(indexOpenSymbol + 1, indexCloseSymbol), true);
};

const extractTag = (content) => {
    let isOpenTag = false;
    let tag = '';
    const onlyLetters = RegExp('[A-Za-z0-9]');
    let hasNext = true;
    for(let i=0;i<content.length && hasNext;i++){
        if(!isOpenTag && content[i] === '<'){
            isOpenTag = true;
        }
        if(isOpenTag && tag !== '' && content[i] === ' '){
            isOpenTag = false;
            hasNext = false;
        }
        if(isOpenTag && onlyLetters.test(content[i])){
            tag+=content[i];
        }
    }
    return tag;
};

const generateStylesHTML = (content) =>{
    const resultArray = [];
    let styles = content.split('=')[1];
    styles = styles.substring(1, styles.length-1);
    const stylesArray = styles.split(';');
    for(const style of stylesArray){
        const key = style.split(':')[0].trim();
        const value = style.split(':')[1].trim();
        resultArray.push({key: key, value: value});
    }
    return resultArray;
};

const generateStylesCSS = (content, onlyAppy = false) =>{
    let result = [];
    const stylesArray = content.split(';');
    for(const style of stylesArray){
        if(style.indexOf(':')> -1){
            const key = style.split(':')[0].trim();
            const value = style.split(':')[1].trim();
            result.push({key: key, value: value});
        }else if(onlyAppy && style.indexOf(APPLY) > -1){
            result = style.replace(APPLY, '').trim();
        }
    }
    if(onlyAppy && Array.isArray(result)){
        result  = '';
    }
    return result;
};

const getArrayNameRules = (content) => {
    const indexOpenSymbol = content.indexOf(OPEN_SYMBOL);
    const selectorsArray = content.substring(0,  indexOpenSymbol).trim().split(CLOSE_SYMBOL)[0].split(' ');
    return selectorsArray;
};

const nextRule = (content) => {
    const indexCloseSymbol = content.indexOf(CLOSE_SYMBOL);
    return {
        content: content.substring(0, indexCloseSymbol+1),
        pending: content.substring(indexCloseSymbol+1)
    }
};

const extract = (content) => {
    const rules = [];
    let rule = null;
    while(content !== ''){
        rule = nextRule(content);
        const objectRule = {
            selectors: getArrayNameRules(rule.content), attributes: getAttributesFromCSSRule(rule.content), mixin: getMixinFromCSSRule(rule.content, true)
        };
        rules.push(objectRule);
        content = rule.pending;
    }
    return rules;
};

module.exports = {parserFromHTMLTag, getArrayNameRules, getAttributesFromCSSRule, getMixinFromCSSRule, nextRule, extract};

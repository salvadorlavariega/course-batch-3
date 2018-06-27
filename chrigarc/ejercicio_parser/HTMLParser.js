'use strict';

const VALID_TAGS = [
    'a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside', 'audio', 'b', 'base', 'basefont', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5' ,'h6', 'head', 'header', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noframes', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strike', 'strong', 'sub', 'summary', 'sup', 'svg', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr'
];

const OPEN_SYMBOL = '<';
const CLOSE_SYMBOL = '>';
const STYLE_ATTRIBUTE = 'style';

const nextHTMLTag = (content) =>{
    const result = {
        HTMLTag: '', pending: ''
    };
    let isOpenTag = false;
    let tag = '';
    let index = 0;
    let hasNext = true;
    while(index < content.length && hasNext) {
        if(content[index] !== CLOSE_SYMBOL && isOpenTag) {
            tag+=content[index];
        }
        if(content[index] === OPEN_SYMBOL){
            isOpenTag = true;
            tag += content[index];
        }
        if(content[index] === CLOSE_SYMBOL) {
            tag += content[index];
            hasNext = false;
        }
        index++;
    }
    result.HTMLTag = tag;
    result.pending = content.substring(index);
    return result;
};

const isValidTag = (content) => {
    let result = false;
    const tag = extractTag(content);
    result = (VALID_TAGS.indexOf(tag) > -1);
    return result;
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

const extractAttributes = (content) => {
    const attributes = [];
    const expresion = / [A-Za-z]+-*\w*="\w*"/g;
    let match = '';
    while((match = expresion.exec(content))){
        const attr = generateAttribute(match.toString().trim());
        if(attr){
            attributes.push(attr);
        }
    }
    return attributes;
};

const generateAttribute = (content) => {
    const array_elements = content.split('=');
    const key = array_elements[0];
    if(key === STYLE_ATTRIBUTE){
        return null;
    }
    const value = array_elements[1].substring(1, array_elements[1].length-1);
    const attribute = {
        key: key, value: value
    };
    return attribute;
};

const extractElements = (content) => {
    const stack = [];
    const tree = [];
    let last = null;
    let tag = null;
    while(content !== '') {
        tag = nextHTMLTag(content);
        if(isValidTag(tag.HTMLTag)){
            last = stack[stack.length-1];
            if(isCloseTag(tag.HTMLTag)){
                stack.pop();
            }else {
                const element = generateElement(tag.HTMLTag);
                if (!isTagWithClose(tag.HTMLTag)){
                    stack.push(element);
                }
                if(last){
                    last.nodes.push(element);
                }else{
                    tree.push(element);
                }
            }
        }
        content = tag.pending;
    }
    return tree;
};

const isCloseTag = (content) => {
    return content.toString().startsWith('</');
};

const isTagWithClose = (content) => {
    return content.toString().endsWith('/>');
};

const generateElement = (content) =>  {
    const element = {
        tag: extractTag(content),
        name: extractTag(content),
        attributes: extractAttributes(content),
        nodes: []
    };
    return element;
};

module.exports = {nextHTMLTag, isValidTag, extractAttributes, extractElements};

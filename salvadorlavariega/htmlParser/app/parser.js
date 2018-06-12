'use strict';

const extractFrom = (node, code) =>{
    node = node.toUpperCase();
    code = code.toUpperCase();
    const regex = new RegExp('^(<'+node+'>)([\\s\\w<>\\/\\"=:%]{0,})*(<\\/'+node+'>)$');
    const match = regex.exec(code);
    return match[2];
}

module.exports =  {
    extractFrom: extractFrom
};
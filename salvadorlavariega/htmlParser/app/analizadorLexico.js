'use strict';

const parseHtmlbyFile = (contents) =>{
    const code = contents.replace(/(?:\r\n|\r|\n)/g, '');
    const tree = createTreeFrom(code);
    return JSON.stringify(tree);
    //elementNodes.innerHTML= JSON.stringify(tree);
}

const parseHtml = (id) =>{
    const elementHtml = document.getElementById(id);
    const elementNodes = document.getElementById('resultNodes');
    let code = elementHtml.value;
    code = code.replace(/(?:\r\n|\r|\n)/g, '');
    const tree = createTreeFromJson(code);
    elementNodes.innerHTML= JSON.stringify(tree);
}

const createTreeFromJson = (code) =>{
    const tree = createNode('HTML', code);
    const headTree = createNodeHead(code);
    const bodyTree = createNodeBody(code);
    const nodes = new Array();

    nodes.push(headTree);
    nodes.push(bodyTree);
    tree.nodes = nodes;
    console.log('tree');
    console.log(tree);
    return tree;
}
const createTreeFrom = (code) =>{
    const tree = createNode('HTML', code);
    const headTree = createNodeHead(code);
    const bodyTree = createNodeBody(code);
    const nodes = new Array();

    nodes.push(JSON.stringify(headTree));
    nodes.push(JSON.stringify(bodyTree));
    tree.nodes = nodes;
    console.log('tree');
    console.log(tree);
    return tree;
}

const createNode = (nodeName, code) =>{
    const tree = {};
    const match = extractChildsByNode(nodeName,code);
    if(match !== null){
        const name = extractNodeName(match[1]);
        const attributes = extractAttributes(match[1]);
        tree.name = name;
        tree.tag = name;
        tree.attributes = attributes.attributes;
        tree.nodes = new Array();
    }
    return tree;
}

const createNodeHead = (code) =>{
    const reserveWords = ['TITLE','SCRIPT'];
    const match = extractChildsByNode('HEAD',code);
    let codeHead = match[2];
    let arrayJson = new Array();
    for(const word of reserveWords){
        let matchNode = new Array();
        while(matchNode !== null){
            matchNode = extractChildsByNode(word,codeHead);
            if(matchNode !== null) {
                const line = matchNode[1] + matchNode[2] + matchNode[3];
                codeHead = codeHead.replace(line, '');
                const name = extractNodeName(line);
                const attr = extractAttributes(line);
                const jsn = {};
                jsn.name=name;
                jsn.tag=name;
                jsn.attributes= attr;
                if(matchNode[2] !== null){
                    jsn.value = matchNode[2];
                }
                arrayJson.push(jsn);
            }
        }
    }
    let arrayNodes = extractHeadChilds(codeHead);
    for(const line of arrayNodes) {
        const name = extractNodeName(line);
        const attr = extractAttributes(line);
        const jsn = {};
        jsn.name=name;
        jsn.tag=name;
        jsn.attributes= attr;
        arrayJson.push(jsn)
    }

    return {'HEAD':arrayJson};
}

const createNodeBody = (code) =>{

    const bodyTree = createNode('BODY', code );
    const bodyMatch = extractChildsByNode('BODY',code);
    if(bodyMatch!==null){
        const nodes = findRecursive(bodyMatch[2]);
        bodyTree.nodes = nodes;
        return bodyTree;
    }
    else {
        return bodyTree;
    }

}

const findRecursive = (code)=>{
    const nodesArray = new Array();
    while(code.trim() !== ''){
        let childs =  extractChilds(code);

        if(childs !== null) {
            const nodeName = extractNodeName(childs[1]);
            childs = extractChildsByNode(nodeName, code);
            let node = createNode(nodeName, childs[0]);
            nodesArray.push(node);
            code = code.replace(childs[0].trim(), '');
            if(childs[2] !== null){
                console.log(childs[2] );
                node.nodes = findRecursive(childs[2].trim());
            }
        } else {
            const node = {text:code.trim()};
            nodesArray.push(node);
            code = '';
        }

    }

    return nodesArray;
}

const extractChilds = (code) =>{
    code = code.trim().toUpperCase();
    const regex = new RegExp('^([<]{1}[\\\w\\s\\.\\-_/\\"=]*[>]{1})([\\s\\w<>\\/\\"=:#%-_]{0,})([<]{1}[\\/]{1}[\\w]*[>]{1})$');
    return regex.exec(code);
}

const extractChildsByNode = (node, code) =>{
    node = node.toUpperCase();
    code = code.trim().toUpperCase();
    const regex = new RegExp('(<'+node+'[\\s\\w\\/\\=\\"\\.\\-_:]*>)([\\s\\w<>\\/\\"=:#%-_]{0,})(<\\/'+node+'>)');
    return regex.exec(code);
}

const extractNodeName = (nodeCode) =>{
    const regex = new RegExp('(^[<]\\w+)');
    const res = regex.exec(nodeCode);
    if(res != null && res.length > 0){
        const match = new RegExp('(\\w+)').exec(res[1]);
        return match[1];
    }
    return '';
}

const extractHeadChilds = (code) =>{
    code = code.trim();
    const regex = new RegExp('<[\\s\\w\\s\\=\\"\\.\\:_\\-\\,\\/]*>[\\w\\s]*');
    let match; //= code.match(regex);
    let matches = new Array();
    while ( code.trim() !== '') {
        match =  regex.exec(code);
        matches.push(match[0].trim());
        code = code.replace(match[0],'');
    }
    return matches;
}

const extractAttributes = (code) => {
    const regex = new RegExp('([\\w-_]*=)(["]{1}[\\s\\w<>\\/=:%-_\\.]*"{1})');
    const regexText = new RegExp('[\\s\\w\\/=:%-_\\.]+');
    let res = regex.exec(code);
    const attributes = new Array();
    while ( res !== null) {
        const attMap = {};
        attMap.key = res[1].replace('=','');
        attMap.value = res[2].match(regexText)[0];
        attributes.push(attMap);
        code = code.replace(res[0],'');
        res = regex.exec(code);
    }
    const result = {};
    result.attributes = attributes;
    return result;

}

module.exports = {
    parseHtmlbyFile:parseHtmlbyFile
}
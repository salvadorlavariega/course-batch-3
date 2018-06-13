'use strict';
//const parser = require('parser');

const parseHtml = (id) =>{
    const elementHtml = document.getElementById(id);
    const elementNodes = document.getElementById('resultNodes');
    let code = elementHtml.value;
    code = code.replace(/(?:\r\n|\r|\n)/g, '');
    const tree = createTreeFrom(code);
    elementNodes.innerHTML= JSON.stringify(tree);
}

const createTreeFrom = (code) =>{
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
                arrayJson.push(jsn)
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
        bodyTree.nodes.push(nodes);
        return bodyTree;
    }
    else {
        return bodyTree;
    }

}

const findRecursive = (code)=>{
    if(code !== null){
        let childs =  extractChilds(code);
        if(childs === null) return null;
        const nodeName = extractNodeName(childs[1]);
        childs = extractChildsByNode(nodeName,code);
        let node = createNode(nodeName,childs[0]);
        if(childs[2] != null){
            let newCode = childs[2].trim().replace(childs[0],'');
            node.innerCode = newCode;
            const childNode = findRecursive(newCode);
            node.nodes.push(childNode);
            return node;
         } else {
            return node;
        }
    }
}
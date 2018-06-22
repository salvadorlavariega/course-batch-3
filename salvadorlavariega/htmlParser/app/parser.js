'use strict';

const extractChilds = (code) =>{
    code = code.trim().toUpperCase();
    const regex = new RegExp('^([<]{1}[\\w\\s\\.\\/\\"=]*[>]{1})([\\s\\w<>\\/\\"=:#%-_]{0,})([<]{1}[\\/]{1}[\\w]*[>]{1})$');
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



module.exports =  {
    extractChilds: extractChilds,
    extractChildsByNode : extractChildsByNode,
    extractNodeName: extractNodeName,
    extractHeadChilds:extractHeadChilds,
    extractAttributes:extractAttributes
};
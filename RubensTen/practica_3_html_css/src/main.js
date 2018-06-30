'use strict';

const fs = require('fs');

class Main {
    constructor() {
    }
    removeSpaces(html) {
        return html.replace(/\n^\s+|\s+$/gm, '');
    }

    getTag(html) {
        const regexHTML = /^(<([^>]+)>)/i;
        return regexHTML.exec(html);
    }

    isOpenTag(tag) {
        if (tag.indexOf('/') !== -1) {
            return false;
        }
        return true;
    }

    getContentFromFile(file) {
        let contents = '';
        try {
            return contents = fs.readFileSync(file, 'utf8');
        } catch (error) {
            throw new Error('File not found');
        }
    }
}

class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }
    getLength() {
        return this.count;
    }
    push(item) {
        this.items.push(item);
        this.count = this.count + 1;
    }
    pop() {
        if (this.count > 0) {
            this.count = this.count - 1;
        }
        return this.items.pop();
    }
    peek() {
        return this.items.slice(-1)[0];
    }
}

module.exports = {    
    findTag: (block) => {    
        const regex = /<.*?>.*?<\/.*?>|<.*?\/>/i;
        return block.search(regex);        
    },
    makeNode: (name, tag, attributes, nodes) => {
        if (!isValidName(name)) {
            return {
                CODE: 1000,
                CAUSE: 'Invalid name'
            };
        }

        return {
            name: `<${name}>`
            /* tag: '<dash-case>',
            attributes: [{
                key = '', value = ''
            }],
            nodes: [] */
        };
    },
    process: (file) => {
        const main = new Main();
        const html = main.getContentFromFile(file);
        let cleanHTML = main.removeSpaces(html);
        console.log('clean HTML: ', cleanHTML);
        const tag = main.getTag(cleanHTML);
        console.log('find tag: ', tag);
        const isOpenTag = main.isOpenTag(tag[2]); // tag without <>
        console.log('isOpenTag: ', isOpenTag);

        const pila = new Stack();
        if (isOpenTag) {
            pila.push(tag[0]);// html tag
            const regexRemoveTag = new RegExp(tag[0], 'gi');
            cleanHTML = cleanHTML.replace(regexRemoveTag, '');
            console.log('cleanHTML without tag: ', cleanHTML);
            console.log('stack contain: ', pila);
        } else {
            console.log('close tag');
        }
    }
};

/* toCamelCase = (cadena) => {
    const arrayString = cadena.split(' ');
    if (arrayString.length === 0) {
        return cadena;
    }

    for (let i = 1; i < arrayString.length; i++) {
        const item = arrayString[i];
        const word = item[0].toUpperCase();
        arrayString[i] = word + item.substring(1);
    }
    return arrayString.join('');
}; */

'use strict';

const fs = require('fs');
const openTags = [];
const closeTags = [];


const readFile = () => {
    return fs.readFileSync('index.html', 'utf8');
};

const getAllNodes = () => {
    const regExp = [/^<\s*\w.*?>/, /^<\/\s*\w.*?>/];
    let contentFile = removeSpaces(readFile());
    let flag = false;

    do{
        for(const expression of regExp) {
            if (expression.exec(contentFile)) {
                const result = expression.exec(contentFile);

                contentFile = removeNodeFromString(result, contentFile);
                console.log(contentFile);

               if(contentFile.length === 0){
                   flag = true;
                   break;
               }
            }

        }


    }while(!flag);

    //return contentFile.match(startTags);
};

const removeNodeFromString = (result, content) => {
    return content.replace(result, '');
};



const removeSpaces = (content) => {
    return content.replace(/\r?\n|\r/gm, '');
};


getAllNodes();


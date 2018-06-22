#! /usr/bin/env node

'use strict';

const cli = require('commander');
const core = require('../centraalParser');

cli
    .version('1.0.0')
    .description('An application for generate tree with information html or styles')
    .option('-s, --styles', 'Only generate tree of styles')
    .option('--html', 'Only generate tree of HTML')
    .arguments('<file>')
    .action(file => {
        const content = core.openFile(file);
        if(cli.html){
            const tree = core.parseHTML(content);
            console.log(JSON.stringify(tree));
        }
        if(cli.styles){
            const tree = core.parseCSS(content);
            console.log(JSON.stringify(tree));
        }
    })
    .parse(process.argv);

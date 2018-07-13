#! /usr/bin/env node

'use strict';

const cli = require('commander');
const main = require('../src/main');

cli
    .version('1.0.0')
    .description('Practica HTML-CSS Parser')    
    .arguments('<file>')
    .action(file => {
        main.process(file);
    })
    .parse(process.argv);

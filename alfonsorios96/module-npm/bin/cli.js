#! /usr/bin/env node

'use strict';

const cli = require('commander');
const core = require('../lib/main');

cli
  .version('1.0.0')
  .description('An application for generate documentation')
  .option('-s, --styles', 'Only generate documentation of styles')
  .arguments('<file>')
  .action(file => {
    console.log('your file is: ' + file);
  })
  .parse(process.argv);

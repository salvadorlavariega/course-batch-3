#! /usr/bin/env node

'use strict';

const cli = require('commander');
const core = require('../src/main');

cli
  .version('1.0.0')
  .description('An application for generate HTML tree')
  .arguments('<file>')
  .action(file => {
    core.main(file);
  })
  .parse(process.argv);

#! /usr/bin/env node

'use strict';

const cli = require('commander');
const core = require('../app/analizadorLexico');
const fs = require('fs');

cli
  .version('1.0.0')
  .description('An application for parse a html file')
  .option('-s, --styles', 'Only generate documentation of styles')
  .arguments('<file>')
  .action(file => {
    console.log('your file is: ' + file);
      let contents = '';
      try {
          if(fs.existsSync(file)) {
              contents = fs.readFileSync(file, 'utf-8');
              core.parseHtmlbyFile(contents);
          } else {
              console.log('File not found');
          }

      } catch (error) {
          console.log(error);
          throw new Error(error);
      }


  })
  .parse(process.argv);

'use strict';

const assert    = require('chai').assert;
const expect    = require('chai').expect;
const parser = require('../app/parser');

describe('return code into HTML tags tags', () => {
    describe('Check extractChilds Function: ', () => {
            let html = `<html lang="es">
                    <head>
                      <meta charset="UTF-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <meta http-equiv="X-UA-Compatible" content="ie=edge">
                      <link rel="icon" type="image/png" href="images/icons/amarillo.png">
                      <title>Centraal Academy</title>
                      <link rel="stylesheet" href="css/styles.css">
                      <link rel="manifest" href="manifest.json">
                    </head>
                    <body>
                    </body>
                    </html>`;
        let match = parser.extractChildsByNode('html',html);

        it('Get start node code <HTML>', () => {
            assert(match[1] === '<HTML LANG="ES">', ' Not contains start node <HTML>');
        });
        it('Get close node code </HTML>', () => {
            assert(match[3] === '</HTML>', ' Not contains close node </HTML>');
        });
        it('Get start node code <HEAD>', () => {
            match = parser.extractChildsByNode('head', html);
            assert(match[1] === '<HEAD>', ' Not contains start node </HEAD>');
        });
        it('Get close node code </HEAD>', () => {
            assert(match[3] === '</HEAD>', ' Not contains close node </HEAD>');
        });
        it('Get start node code <BODY>', () => {
            match = parser.extractChildsByNode('BODY', html);
            assert(match[1] === '<BODY>', ' Not contains start node </BODY>');
        });
        it('Get close node code </BODY>', () => {
            assert(match[3] === '</BODY>', ' Not contains close node </BODY>');
        });
    });

    describe('Check extractNodeName Function: ', () => {
        let html = `<html lang="es">
                    <head>
                      <meta charset="UTF-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <meta http-equiv="X-UA-Compatible" content="ie=edge">
                      <link rel="icon" type="image/png" href="images/icons/amarillo.png">
                      <title>Centraal Academy</title>
                      <link rel="stylesheet" href="css/styles.css">
                      <link rel="manifest" href="manifest.json">
                    </head>
                    <body>
                    </body>
                    </html>`;
        let match = parser.extractChildsByNode('HTML',html);

        it('Get word html of code <html lang="es">', () => {
            let res = parser.extractNodeName(match[1]);
            assert('HTML' === res, ' imposible get the name of node');
        });
        it('Get word HEAD of code <head>', () => {
            match = parser.extractChildsByNode('HEAD',html);
            let res = parser.extractNodeName(match[1]);
            assert('HEAD' === res, ' imposible get the name of node');
        });
        it('Get word body of code <body>', () => {
            match = parser.extractChildsByNode('body',html);
            let res = parser.extractNodeName(match[1]);
            assert('BODY' === res, ' imposible get the name of node');
        });
        it('Get word META of code <META>...</META>', () => {
            let res = parser.extractNodeName('<META NAME="VIEWPORT" CONTENT="WIDTH=DEVICE-WIDTH, INITIAL-SCALE=1.0">');
            assert('META' === res, ' imposible get the name of node');
        });
    });

    describe('Check extractHeadChilds Function: ', () => {

        let html = `<html lang="es">
                    <head>
                      <meta charset="UTF-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <meta http-equiv="X-UA-Compatible" content="ie=edge">
                      <link rel="icon" type="image/png" href="images/icons/amarillo.png">
                      <title>Centraal Academy</title>
                      <link rel="stylesheet" href="css/styles.css">
                      <link rel="manifest" href="manifest.json">
                      <script async="async" type="text/javascript" src="//static.h-bid.com/w3schools.com/20180525/snhb-w3schools.min.js"></script>
                    </head>
                    <body>
                    </body>
                    </html>`;


        it('Get <TITLE>CENTRAAL ACADEMY</TITLE> of head block', () => {
            let match = parser.extractChildsByNode('HEAD',html);
            match = parser.extractChildsByNode('title',match[2]);
            assert('<TITLE>CENTRAAL ACADEMY</TITLE>' === match[1]+match[2]+match[3], ' imposible get <TITLE>CENTRAAL ACADEMY</TITLE>');
        });

        it('Get <script>...</script> of head block', () => {
            let match = parser.extractChildsByNode('HEAD',html);
            match = parser.extractChildsByNode('script',match[2]);
            assert('<script async="async" type="text/javascript" src="//static.h-bid.com/w3schools.com/20180525/snhb-w3schools.min.js"></script>'.toUpperCase()
                    === match[1]+match[2]+match[3], ' imposible get <script>...</script>');
        });
    });

    describe('Check extractAttributes Function: ', () => {


        let html = `<html lang="es">
                    <head>
                      <meta charset="UTF-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <meta http-equiv="X-UA-Compatible" content="ie=edge">
                      <link rel="icon" type="image/png" href="images/icons/amarillo.png">
                      <title>Centraal Academy</title>
                      <link rel="stylesheet" href="css/styles.css">
                      <link rel="manifest" href="manifest.json">
                      <script async="async" type="text/javascript" src="//static.h-bid.com/w3schools.com/20180525/snhb-w3schools.min.js"></script>
                    </head>
                    <body>
                    </body>
                    </html>`;

        let match = parser.extractChildsByNode('HEAD',html);
        match = parser.extractChildsByNode('script',match[2]);
        const script = match[1]+match[2]+match[3];
        let jsn = parser.extractAttributes(script);

        it('Get Attributes of <script>...</script>  ', () => {
            const key = jsn.attributes[0].key;
            const value = jsn.attributes[0].value;
            assert('ASYNC' === key, 'imposible get ASYNC of <script ASYNC="async"..');
        });

        it('Get Attributes of <script>...</script>  ', () => {
            const key = jsn.attributes[1].key;
            const value = jsn.attributes[1].value;
            assert('TYPE' === key, 'imposible get TYPE of <script TYPE="..."...>');
        });
        it('Get Attributes of <script>...</script>  ', () => {
            const key = jsn.attributes[2].key;
            const value = jsn.attributes[2].value;
            assert('SRC' === key, 'imposible get SRC of <script SRC="..."...>');
        });

        it('Get Attributes of <META>...</META>  ', () => {
            jsn = parser.extractAttributes('<META NAME="VIEWPORT" CONTENT="WIDTH=DEVICE-WIDTH, INITIAL-SCALE=1.0">');
            const key = jsn.attributes[1].key;
            const value = jsn.attributes[1].value;
            assert('CONTENT' === key, 'imposible get SRC of <META NAME="..."...>');
        });
    });
});
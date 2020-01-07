#!/usr/bin/env node
const spawn = require('cross-spawn');
const chalk = require('chalk');
const script = process.argv[2];
switch (script) {
    case "-v":
        console.log(require('../package.json').version);
        break;
    case "build":
    case "server":
        let result = spawn.sync(
            "node", [require.resolve(`../lib/${script}.js`)], { stdio: 'inherit' }
        );
        process.exit(result.status);
        break
    default:
        console.log('don');
        break
}
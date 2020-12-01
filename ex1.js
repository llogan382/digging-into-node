#!/usr/bin/env node

"use strict";

var args = require("minimist")(process.argv.slice(2));

console.log(args);

// Don't print the file paths, as those are unnecessary. Use SLICE to hide those:
console.log(process.argv.slice(2));


// Always add helper  error messages

function printHelp(){
    console.log("ex1 usage: ")
    console.log("   ex1.js --help");
    console.log("")
    console.log("--help                     print this help")
    console.log("")


}
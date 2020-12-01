#!/usr/bin/env node

"use strict";


// Don't print the file paths, as those are unnecessary. Use SLICE to hide those:
var args = require("minimist")(process.argv.slice(2), {
    boolean: [ "help"],
    string: ["file"]
});

console.log(args);




// Always add helper  error messages

function printHelp(){
    console.log("ex1 usage: ")
    console.log("   ex1.js --help");
    console.log("")
    console.log("--help                     print this help")
    console.log("")

}
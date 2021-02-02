#! /usr/bin/env node

const colors = require('colors');
// colors.enable();

// colors.setTheme({
//   silly: 'rainbow',
//   input: 'grey',
//   verbose: 'cyan',
//   prompt: 'grey',
//   info: 'green',
//   data: 'grey',
//   help: 'cyan',
//   warn: 'yellow',
//   debug: 'blue',
//   error: 'red'
// });

const fs = require('fs')

fs.readFile(__dirname + '/info.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data.silly);
    return data.silly;
  }
})
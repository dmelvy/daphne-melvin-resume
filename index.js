#! /usr/bin/env node

const colors = require('colors');
const fs = require('fs')

fs.readFile(__dirname + '/info.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data.rainbow);
    return data;
  }
})
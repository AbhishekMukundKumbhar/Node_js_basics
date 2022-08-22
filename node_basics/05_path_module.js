//path module
const path  = require('path');

const filePath = path.join('contents','subfolder','testTxt.txt');
console.log(filePath);

const base  = path.basename(filePath);
console.log(" ",base);

const absolute = path.resolve(__dirname,'contents','subfolder','testTxt.txt');
console.log(absolute);

const filepath = path.resolve(__filename);
console.log(filepath);

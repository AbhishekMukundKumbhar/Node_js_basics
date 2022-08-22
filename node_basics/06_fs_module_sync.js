const {readFileSync, writeFileSync} = require('fs');

const data1 = readFileSync('contents/first.txt', 'utf8');
const data2 = readFileSync('contents/first.txt', 'utf8');
console.log(data1+ '\n'+ data2);

writeFileSync('contents/sync_result.txt',"added result data is "+data1+" "+data2);

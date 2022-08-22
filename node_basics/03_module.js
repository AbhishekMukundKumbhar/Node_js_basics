// modules is encapsulated code
// comman js every file is module (by default)

// accessing using "require"
const {abhishek,kumbhar} = require('./03_modules_names');
const sayHi = require('./03_modules_method');
const data = require('./03_modules_alternative');

sayHi('abhi');
sayHi(abhishek);
sayHi(kumbhar);

console.log(data);
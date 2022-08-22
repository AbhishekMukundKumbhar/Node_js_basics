// modules in node
// ---path
// ---http
// ---file
// ---os

const os  = require('os');
const path = require('path');

//user info
const user = os.userInfo();
console.log('hi ',user);

//system uptime in seconds
console.log(os.uptime());


// system details object
const current = {
    name : os.type(),
    version : os.version(),
    freeMemo : os.freemem(),
    totalMemo : os.totalmem()
}

console.log(current);
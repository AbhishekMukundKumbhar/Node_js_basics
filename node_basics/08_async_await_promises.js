const { readFile, writeFile } = require('fs');
const utils = require('util');

const promissedWriteFile = utils.promisify(writeFile);
// const promissedReadFile = utils.promisify(readFile);

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        })
    })
}

const start = async () => {
    try {
        const data1 = await getText('./contents/first.txt'); // wait untill the promise get resolved
        const data2 = await getText('./contents/second.txt');
        const writingText = "promisify() is used to make particular methode is promisable"+
        "like how we did for readfile creating promise object if we do this for read file also then no need of gettext method"
        await promissedWriteFile('./contents/async_await_promises_result.txt',writingText);
        // const result = await promissedReadFile('./contents/async_await_promises_result.txt','utf-8');
        console.log(data1+" "+data2);
    } catch (error) {
        console.log(error);
    }

}
start();

//if we call method by using "await" then no need of "then-catch" block we need to place function call within "try-cath" block
// getText('./contents/first.txt')
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
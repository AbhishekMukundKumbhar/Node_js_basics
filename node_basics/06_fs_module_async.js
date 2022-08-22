const {readFile, writeFile} = require('fs');

readFile('contents/first.txt','utf8',(err, result1)=>{
    if(err){
        console.log(err);
        return;
    }
    const res1 = result1;
    readFile('contents/second.txt','utf-8',(err, result2)=>{
        if(err){
            console.log(err);
            return;
        }
        const res2 = result2;  
        console.log(res1+res2);

        writeFile('contents/async_result.txt',"added result data "+res1+" "+res2,(err,result)=>{
            if(err)
            {
                console.log(err);
                return;
            }
        })
    })
    
})

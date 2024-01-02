// const colors = require('colors')

// console.log("tut about jun ".green)

const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'files');

// this give the path of the file 
// console.log(dirPath)

// create file in the 
for(i=0;i<5;i++)
{
    fs.writeFileSync(`${dirPath}/hello ${i}.txt`,"some simple text in file")
}


// fs.readdir(dirPath,(err,files)=>{
//     files.forEach((item)=>{
//         console.warn("file name is : ",item)
//     });
// }
// )
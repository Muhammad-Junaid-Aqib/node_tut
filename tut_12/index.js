// the below line give us output 'junaid'
// node index.js junaid
// console.log(process.argv[2])

const fs = require('fs');

const input = process.argv;
if (input[2] == 'add') {
    fs.writeFileSync(input[3],input[4])   
}else if (input[2] == 'remove') {
    fs.unlinkSync(input[3])
}else {
    console.log('Invalid Output')
}
    

// this file run through

// create file and add data in file
// node index.js add file.txt 'this is file'

//delete file
// node index.js remove file.txt

//else is run 
// node index.js abc file.txt


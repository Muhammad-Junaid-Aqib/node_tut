const { isUtf8 } = require('buffer')
const fs = require('fs')
const path = require('path')

const dirPath = path.join(__dirname, 'crud')

const filePath = `${dirPath}/fileNames.txt`

// create file in the specific folder

// fs.writeFileSync(filePath, "i create my first file")


// Read file data from the specific folder
// utf8 is a function which convert binary data to human readable text
// we can see the below code as a example
// if we remove the 'utf8' parameter then output is in binary code

// fs.readFile(filePath, 'utf8', (err, item) => {
//     console.log(item)
// })


// update data in a file
// err= error through check data is update successfully or not
// fs.appendFile(filePath, '. This is a simple text file.', (err) => {
//     if(!err) console.log('file is update successfully')
// })


// change the file name
// first parameter is the file path
// second parameter is the new file path and file name

// fs.rename(filePath, `${dirPath}/fileNames.txt`, (err) => {
//   if(!err) console.log('file name is updated')
// })


// delete the the file that are on filepath

// fs.unlinkSync(filePath)


//Buffer : means temporary memory location
// jb b hum file create karta hai, koi b operation perform karta hai
// file system k uper
//  node ko thori si memory/space chya hoti hai
//  js p wo apna operation perform kar ska
// us space/memory ko hum buffer khata hai.
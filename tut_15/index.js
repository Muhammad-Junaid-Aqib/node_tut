// synchronous
// in synchronous, operations/tasks are perform one at a time


// Asynchronous
// in Asynchronous, second task do not wait to finish first task

// if we simply console these below code without setTimeOut it execute
// line by line

// console.log('first task')

// console.log('Second task')

// console.log('Third task')

// Asynchronous example through setTimeOut
// 

// console.log('first task')

// setTimeout(() => {
//     console.log('Second task')
// },[2000])

// console.log('Third task')

// if we console these above code with setTimeOut it execute
// first task
// Third task
// Second task  (after 2 seconds)

// -------------------- ************************** --------------

// Drawback of Asynchronous

let a = 10
let b = 0

setTimeout(() => {
    b = 30
}, 2000)

console.log(a + b)

// the output of the above code is 10
// because b is update after two min of execution of fun console.log(a+b)


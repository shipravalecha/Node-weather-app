//async-basics.js

console.log('starting app');

setTimeout(() => {
	console.log('inside of callback');
}, 2000);

setTimeout(() => {
	console.log('second timeout');
}, 0);

console.log('finishing apps');


// callback functions are those that are passed as an argument to another function and executes after some event occurs... eg is setTimeout.. in this settimeout fn, we passedcallback 
//function which executes after 2000 ms

// order of above program is 
// starting app 
// fninshing app
//second timeout
//inside callback

// the reason why second timeout with 0 ms delay did run after fininshing is 
// we have 4 terms: 
//call stack(that takes the program in a stack line by line and excutes and removes when completes..)
//node api(that takes any node apis or node function or callback fns i.e.  setTimeout())
// callback queue (that takes callback fns from node api and wait for call stack to get free and then send callback fn for execution in callstack )
// eventloop which takes care of callback fn execution by checking when call stack is free and then put callback fn from callback queue to call stack
// when we do async operations, we do it with callback or promises
// difference b/w callback & promises
// callback has only one fn with 2 arguments if it is a success or a failure whereas promises have 2 separate fns for success & failure
// callback fn can be called many times whereas promises can either be resolved or rejected & can be called single time which is the biggest
// advantage of promises over callback. because a request can either be success or failure not both.
// once promise is resolved/ rejected, we can tell what it should do afterwards using .then method...
// .then 1st argument is called in case of success and 2nd in case of failuer
// initially promise is in the pending state, then promise gets settled once it is resolved or rejected

// const promise = new Promise((resolve, reject) => {
//   var i = Math.random > 0.5;
//   if(i) {
//     resolve('Hey it worked');
//   } else {
//     reject('Hey not worked');
//   }
// });
//
// promise.then((message) => {
//   console.log('success ', message);
// }, (errorMessage) => {
//   console.log('failure', errorMessage);
// });



// Now below is async operation we defined that returns promise
// below is promise chaining

var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('both arguments should be numbers');
      }
    }, 1500);
  });
}

// asyncAdd(1,'9').then((result) => {
// console.log('result is',result);
// return asyncAdd(result, 2);
// }, (errorMessage) => {
// console.log(errorMessage);
// }).then((res) => {
//   console.log('res is ', res);
// }, (errorMessage) => {
//   console.log(errorMessage);
// });

// now in above asyncAdd .then problem is first .then is called and even if it fails it calls asynadd on line 44, so to avoid this
// lets move error in separate catch block

asyncAdd(1,'9').then((result) => {
console.log('result is',result);
return asyncAdd(result, '2');
}).then((res) => {
  console.log('res is ', res);
}).catch((errorMessage) => {
  console.log(errorMessage);
});

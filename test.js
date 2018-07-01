// let count = 'apple'

// if(typeof count === 'function')
// {
//     console.log('it is string')
// } else {
//     console.log('not a string')
// }


// let promise = new Promise(resolve => {
//   setTimeout(() => resolve("done!"), 1000);
// });

// promise.then(alert); // shows "done!" after 1 second


let promise = new Promise(function(resolve, reject) {
    // not taking our time to do the job
    resolve(123); // immediately give the result: 123
  });

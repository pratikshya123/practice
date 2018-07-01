// let promisesinger = new Promise (function (resolve, reject){
//     if(realese = false){
//     resolve('realese');
//     } else {
//         reject('not realese')
//     }
    
// })
// promisesinger.then ((resolve) => {
//     console.log('song is '+ resolve)
// })
// .catch((reject) =>{
//     console.log ('song is' + reject)
// }

// )
let promise = new Promise(function(resolve, reject) {
    resolve("done");
  
    reject(new Error("…")); // ignored
    setTimeout(() => resolve("…")); // ignored
  }); 
  promise.then ((resolve) => {
    console.log(resolve)
  })
  
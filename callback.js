// function hw(subject,y){
//     console.log(`Start doing ${subject}`);
//     y();
// };

// hw('math',function(){
//     console.log("finished my homework")
// })



// function doHomework(subject, callback) {
//     console.log(`Starting my ${subject} homework.`);
//     callback();
//   }
  
//   let alertFinished = () => {
//         let array = [1,2]
//         return
//   }
//   doHomework('math', alertFinished);


var message = "hello world";

function myCallbackFunction(){

   console.log('My function is called');
}

function testCallback(param, callback){

   console.log(param);

   if( typeof(callback) === 'function'){

      callback();

   }

}

testCallback(message,myCallbackFunction); // see what happens when you add myCallbackFunction as a parameter here

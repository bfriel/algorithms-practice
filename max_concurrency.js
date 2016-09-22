// Terminal.com coding challenge
// program a function that will only allow max concurrency of given number


// const pool = new Pool(5); // max concurrency = 5
//
// for (let i = 0; i < 20; i++) {
//   pool.run(
//     (cb /* signals completion when called */) => {
//       setTimeout(() => {
//         console.log('hello');
//         cb();
//       }, 500);
//     }
//   );
// }
//
// pool.join(() => console.log('done!'));


class Pool {
 constructor(maxConcurrency) {
   this.maxConcurrency = maxConcurrency;
   this.currentConcurrency = 0;
   this.heldTasks = [];
   this.finishedMessage;
 }

 run(task) {
   if(this.currentConcurrency < this.maxConcurrency){
     this.currentConcurrency += 1;
     task(this.successFunction.bind(this));
   } else {
     this.heldTasks.push(task)
   }
 }

 successFunction() {
   if(this.heldTasks.length > 0){
     this.heldTasks.shift()(this.successFunction.bind(this))
   } else {
     this.currentConcurrency -= 1;
   }
   if(this.currentConcurrency === 0 && this.heldTasks.length === 0){
     this.finishedMessage();
   }
 }

 join(cb) {
   this.finishedMessage = cb;
 }
}

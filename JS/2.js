//Exercise 2
let promise1 = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("1");
        resolve("1");
    }, 2000);
})
let promise2 = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("2");
        resolve("2");
    }, 4000);
})
let promise3 = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("3");
        resolve("3");
    }, 1000);
})
let promise4 = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("4");
        resolve("4");
    }, 2000);
})
let promise5 = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("5");
        resolve("5");
    }, 3000);
})

Promise.all([promise1, promise2, promise3, promise4, promise5]).then(function(){
    console.log("All tasks are ready!");
})
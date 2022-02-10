//Exercise 1
let promise = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve("Hello World!");
    }, 5000);
})
promise.then(function(){
    console.log("Hello World!");
})

//Exercise3
async function sayHello(){
    setTimeout(() => {
        console.log('Hello World!');
        return 'Hello World!';
    }, 5000);
}
let a =  sayHello();
console.log('Exercise3', a);
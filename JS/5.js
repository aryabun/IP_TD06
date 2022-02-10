var myVar;
//'loading' disappear after 2s
function myFunction() {
    myVar = setTimeout(showPage, 2000);
} 
//show 'loading'by default
function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("user").style.display = "inline";
}
//promise
const promise = axios.get('https://jsonplaceholder.typicode.com/users');
promise.then(function (response) {
    console.log(response);
    console.log(response.data);
    console.log('data', promise);
  })
  .catch(function (error) {
    console.log(error);
  });


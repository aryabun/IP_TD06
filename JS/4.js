//Exercise4
const getPost = axios.get('https://jsonplaceholder.typicode.com/posts');
const getComment = axios.get('https://jsonplaceholder.typicode.com/comments');
const getPhoto = axios.get('https://jsonplaceholder.typicode.com/photos');

Promise.all([getPost, getComment, getPhoto]).then((result) => {
    //console.log("Data is loaded", result);
    const ex4Message = document.getElementById("ex4_message");
    console.log('ex4Message', ex4Message);
    ex4Message.style.display = "inline";
})

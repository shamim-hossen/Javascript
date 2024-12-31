/**
 * 
Asynchronous JavaScript allows for non-blocking operations, making it possible to handle tasks like fetching data from a server, waiting for user input, or performing other time-consuming operations without freezing the rest of the application. Below are the main asynchronous JavaScript patterns and their syntax with examples:

1. Callbacks
A callback is a function passed into another function as an argument, which is executed after the completion of an operation.
 */

function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback("Here is the data!");
    }, 2000);
}

fetchData((data) => {
    console.log(data);
});

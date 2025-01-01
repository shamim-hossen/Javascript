/**
Callbacks: Functions passed as arguments to other functions that get executed later, once the operation is complete
 */
function fetchData(callback) {
    setTimeout(() => {
        callback("Data fetched");
    }, 2000);
}

fetchData((data) => {
    console.log(data); // Output after 2 seconds: 'Data fetched'
});


/* 
Promises: A more structured way to handle asynchronous operations, which represent values that might not be available yet but will be at some point.
*/
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 2000);
    });
}

fetchData()
    .then((data) => {
        console.log(data); // Output after 2 seconds: 'Data fetched'
    })
    .catch((error) => {
        console.error(error);
    });


/** 
Async/Await: Syntax that allows working with Promises in a more synchronous-like manner, making code easier to read and maintain
*/
async function fetchData() {
    return "Data fetched";
}

async function displayData() {
    const data = await fetchData();
    console.log(data); // Output: 'Data fetched'
}

displayData();


/**
setTimeout() and setInterval(): Functions that allow delayed execution (asynchronous behavior).
setTimeout() runs a function once after a delay.
 */
setTimeout(() => {
    console.log("This message appears after 2 seconds");
}, 2000);


/**
Event Loop: JavaScript uses an event loop to manage asynchronous operations. The event loop continuously checks the call stack and the message queue (where asynchronous tasks like setTimeout and Promises wait), ensuring tasks are executed in the right order.
 */
/**
2. Promises
A Promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
 */
// Syntax
let promise = new Promise((resolve, reject) => {
    // Asynchronous operation
    if (/* success */) {
        resolve("Data fetched successfully");
    } else {
        reject("Failed to fetch data");
    }
});


// Example
let fetchData = new Promise((resolve, reject) => {
    let success = true; // Simulate a successful operation
    setTimeout(() => {
        if (success) {
            resolve("Data fetched successfully");
        } else {
            reject("Error: Data fetching failed");
        }
    }, 2000);
});

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((data) => {
      console.log(data); // On success
    })
    .catch((error) => {
      console.error(error); // On failure
    });

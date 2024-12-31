/**
3. Async/Await
async and await provide a more readable and cleaner way to work with asynchronous code, building on top of Promises.

async is used to define an asynchronous function.
await is used inside async functions to pause execution until the Promise is resolved.
 */
// Syntax
async function exampleFunction() {
    const result = await someAsyncFunction();
    console.log(result);
}

// Example
function fetchData() {
    return new Promise((resolve, reject) => {
        let success = true;
        setTimeout(() => {
            if (success) {
            resolve("Data fetched successfully");
            } else {
            reject("Error: Data fetching failed");
            }
        }, 2000);
    });
}

async function getData() {
    try {
    let data = await fetchData();
    console.log(data); // On success
    } catch (error) {
    console.error(error); // On failure
    }
}

getData();


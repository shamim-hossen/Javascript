// 1. Using split(), reverse(), and join()
const str = "hello";
const reversed = str.split("").reverse().join("");

// 2. Using a for loop (iterative approach)
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// 3. Using for...of + unshift()
function reverseString(str) {
    const arr = [];
    for (const char of str) {
        arr.unshift(char);
    }
    return arr.join("");
}

// 4. Using Recursion
function reverseString(str) {
    if (str === "") return "";
    return reverseString(str.slice(1)) + str[0];
}

// 5. Using Array.prototype.reduce()
const str = "hello";
const reversed = str.split("").reduce((rev, char) => char + rev, "");

// 6. Using Spread Syntax (...str)
const str = "hello";
const reversed = [...str].reverse().join("");

// 7. Using Array.from()
const str = "hello";
const reversed = Array.from(str).reverse().join("");

// 8. Using Stack (simulate push/pop)
function reverseString(str) {
    const stack = str.split("");
    let reversed = "";
    while (stack.length) {
        reversed += stack.pop();
    }
    return reversed;
}

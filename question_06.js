// This exercise will construct an array as it loops through the incrementing values of x.
// Once the array is done, this exercise also will demonstrate several ways to output
// array contents.
// a. Create an empty array
// b. Run a loop 10 times, adding a new incrementing value to the array
// c. Log the array into the console
// d. Use the for loop to iterate through the array (adjust the number of iterations
// to however many values are in your array) and output into the console
// e. Use the for of loop to output the value into the console from the array
let arr = [];
let ASCIICode = 47;
for (let i = 0; i < 10; i++) {
    ASCIICode = ASCIICode + 1;
    let number = String.fromCharCode(ASCIICode)
    arr.push(number);
}
console.log(" Log the array into the console")
console.log(arr);
console.log("Use the for loop to iterate through the array {adjust the number of iterationsto however many values are in your array} and output into the console")
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log(" e. Use the for of loop to output the value into the console from the array")
for (num of arr) {
    console.log(num);
}
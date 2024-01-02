"use strict";
let username = "sheshadri";
console.log(username);
let a = 12;
let b = '6';
let c = 2;
console.log(a / c);
function sum(a, b) {
    return a + b;
}
let person1 = {
    name: "sheshu",
    object: {},
    age: 34,
    city: "banglore"
};
let arr = ['sh', 45, true];
arr.push("sheshu");
let arr2 = [[], [], []];
arr2 = [[2]];
console.log(arr2);
console.log(sum(a, b));
console.log("hi");
let sumall = function (a, b, c) {
    return a + b + c;
};
console.log(sumall(5, 3, 4));
let total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
console.log(total(1, 2, 5, 6));

"use strict";
function sum(a, b) {
    return a + b;
}
let nums = [1];
let arrs = [1, 2];
// let name:string = undefined
let name = undefined;
let a = "hello";
console.log(a);
console.log(sum(1, 2));
function throwError(msg) {
    throw new Error(msg);
    console.log(msg);
}
function xunhuan() {
    while (true) {
    }
}
let aa = "A"; //字面量约束
let user;
user = {
    name: 'aa',
    age: 1
};
let u;
u = {
    name: 'dd',
    age: 12,
    gender: "女"
};
function getUsers(g) {
    return [];
}
function combine(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a * b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    throw new Error("a和b必须是相同的类型");
}
const result = combine(1, 2);
function sums(a, b, c) {
    if (c) {
        return a + b + c;
    }
    return a + b;
}
function sums1(a, b, c = 0) {
    if (c) {
        return a + b + c;
    }
    return a + b;
}
sums1(1, 2);

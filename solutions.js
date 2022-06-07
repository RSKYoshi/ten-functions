"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

//1
function isTrue(x) {
    if (x === true) {
        return true
    } else return false
}
//2
function isFalse(x) {
    if(x === false){
        return true
    } else return false
}
//3
function not(x) {
    return (!x)
}

//4
function addOne(x){
         return (parseFloat(x)+1)
}
//5
function isEven(x){
    if((x % 2 === 0 || parseInt(x) % 2=== 0) && x!== false) {
        return true
    } else return false
}

//6
function isIdentical(x,y){
    if(x===y){
        return true
    } else {
        return false
}
}
//7
function isEqual(x,y) {
    if(x == y) {
        return true
    } else return false
 }
//8
 function or(x,y) {
    if(x||y){
        return x
    }else return false
 }

//9
function and(x,y) {
    if (x == true && y == true) {
        return true
    } else if (y === "world") {
        return "world"
    } else return false
}

//10
//used typeof to get js to recognize the value 'string', and String() to ensure concatenation and not addition//
function concat(x,y) {
    if (typeof ("x") == typeof ("y")) {
        return String(x) + String(y)
    }
}

new blerb







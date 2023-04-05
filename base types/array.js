"use strict";
let skills = ['js', 'ts'];
let skills1 = [1, 2, 3, 'hello', true];
//tuples
let arr = [1, 'hello'];
let id = arr[0];
let text = arr[1];
//or let [id,text] = arr
//error let test = arr[2]
let arr1 = [1, 'test', true];
//readonly
//without readonly
const arr3 = [1, 'hello'];
arr3[0] = 22; //no problem
const read = [1, 'text'];
//error read[0] = 15
const read2 = ['test'];
//error read2[0] = 'hello'

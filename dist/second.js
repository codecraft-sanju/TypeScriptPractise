"use strict";
// // // // let b = 25;
// // // // b = "sanjay"
// // // // console.log(b);
// // // let c: string = "78";
// // // let x = <string>"sanjay";
// // // console.log(c);
// // // console.log(x);
// // // let d: number = 98;
// // // let v = <number>67;
// // // console.log(d);
// // // console.log(v);
// // // let cheak: boolean = true;
// // // console.log(cheak);
// // // let j;    //any (any is a data type)
// // // let h: any;
// // let surname: string | number;  //means that the variable surname can hold either a string or a number. This is an example of a union type, which allows multiple data types for a single variable.
// // surname = 45;
// // console.log(surname)
// // surname = "sharma"
// // console.log(surname);
// // const fullname = (n:number,m:string) => {
// //     console.log(n + m);
// //     console.log(n, m);
// // }
// // fullname(45, "sanjay");
// // type username = string | number;
// // let s: username = 89
// // console.log(s);
// // s = "sanjay";
// // console.log(s);
// // type vb = (n: number, m: number) => number;
// // const func: vb = (n, m) => {
// //     console.log(n, m);
// //     return n + m;
// // }
// // func(3, 4);
// // console.log(func(9,8));
// //Array
// const arr: number[] = [45, 67, 34, 3, 2, 78];
// const arr2: string[] = ["s", "ba"];
// const arr3: (number | string)[] = [45, 67, "hello", 3, "world", 78];
// const arr4: Array<string> = ["g", "v"];
// //tuple tuple means fix how much number in a array
// const arr5: [number, number, number] = [5, 7, 3];
// //in this if we enter forth number then error showing
//object
// const obj = {
//     height: 34,
//     width: 89,
// }
// console.log(obj);
// const obj: {
//     height: number;
//     width: number;
// } = {
//     height: 56,
//     width:89,
// }
// console.log(obj);
// type jk= {
//     height: number,
//     width: number,
//     gender?:boolean,
// }
// const obj: jk = {
//     height: 78,
//     width:56,
// }
// console.log(obj);
// height: number → A required property of type number.
// width: number → A required property of type number.
// gender?: boolean → An optional property of type boolean. The ? indicates that this property may or may not be present in an object.
// interface ob {
//     height: number;
//     weight: number;
//     gender: boolean;
// }
// const obj: ob = {
//     height: 90,
//     weight: 89,
//     gender: true,
// }
// console.log(obj);
// interface Person {
//     name: string;
//     age: number;
// }
// interface Employee extends Person {
//     employeeId: number;
//     department: string;
// }
// const emp: Employee = {
//     name: "Alice",
//     age: 30,
//     employeeId: 101,
//     department: "IT"
// };
// console.log(emp);
// interface Employee extends Person:
// This means Employee inherits all properties from Person (name and age).
// It also adds new properties: employeeId and department.
// emp is an object of type Employee, so it must include all properties from Person plus the additional ones.
//---------
// const func = (n:number,m:number,p:number) => {
//     return n * m * p;
// }
// console.log(func(8, 3, 4));
// type h = (n: number, m: number, p: number) => number;
// const f: h = (n, m, l) => {
//     return n + m + l;
// }
// console.log(f(8, 8, 8));
//rest operator
// const func = (...y:number[]) => {
//     return y
// }
// console.log(func(5, 6, 7, 6, 7, 5, 4, 3, 5));
//This JavaScript function uses the rest operator (...), which allows it to accept any number of arguments as an array.
// type funcType = (...m:number[]) => number[];
// const func:funcType = (...m) => {
//     return m;
// }
// console.log(func(5, 6, 7, 6, 7, 5, 4, 3, 5));
// function p (n: number):number{
//     return 50
// }
// console.log(p(56)); //print 50
// type p = (n: number) => number;
// const lol: p = function lol(k) {
//     return 89;
// }
//functions with object
// const getData = (product: { name: string, stock: number, price: number }) => {
//     console.log(product);
// }
// getData({ name: "sanjay", stock: 90, price: 89 });
// type t = (product: {
//     name: string, stock: number, price: number
// }) => void;
// const p: t = (product) => {
//     console.log(product);
// }
// p({ name: "sanjay", stock: 89, price: 9 });
// type t = (name: string, stock: number, price: number) => void;
// const p: t = (name, stock, price) => {
//     console.log({ name, stock, price });
// };
// p("sanjay", 89, 9);
//----------
// const productfirst = {
//     name: "macbook",
//     stock: 67,
//     price:100000,
// }
// type t = (product: {
//     name: string, stock: number, price: number
// }) => void;
// const p: t = (product) => {
//     console.log(product);
//     console.log(productfirst)
// }
// p({ name: "sanjay", stock: 89, price: 9 });
//-----
// Define an interface for product structure
// interface B {
//     name: string;
//     stock: number;
//     price: number;
// }
// const productFirst: B = {
//     name: "macbook",
//     stock: 67,
//     price: 100000,
// };
// // Define function type using the interface
// type T = (product: B) => void;
// const p: T = (product) => {
//     console.log(product);
//     console.log(productFirst);
// };
// p({ name: "virendra", stock: 89, price: 9 });
//-------

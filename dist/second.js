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

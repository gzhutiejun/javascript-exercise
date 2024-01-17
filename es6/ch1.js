// {
//     let a = 10;
//     var b = 1;
// }

// a
// b

// for (let i = 0; i < 10; i++) {
//     // ...
// }
// console.log(i);

// var a = [];
// for (var i = 0; i < 10; i++) {
//     a[i] = function () {
//         console.log(i);
//     }
// }
// console.log(a);
// a[6]();

// for (let i = 0; i < 3; i++) {
//     let i = 'abc';
//     console.log(i);
// }

// // var 的情况
// console.log(foo); // 输出undefined var foo = 2;
// // let 的情况
// console.log(bar); // 报错ReferenceError let bar = 2;

// var tmp = 123;
// if (true) {
//   tmp = 'abc'; // ReferenceError
//   let tmp;
// }

// if (true) {
//     // TDZ开始
//     tmp = 'abc'; // ReferenceError console.log(tmp); // ReferenceError
//     let tmp; // TDZ结束 console.log(tmp); // undefined
//     tmp = 123;
//     console.log(tmp); // 123
// }

// typeof x; // ReferenceError
// let x;

// function bar(x = y, y = 2) {
//     return [x, y];
// }
// bar(); // 报错

// function bar(x = 2, y = x) {
//     return [x, y];
// }
// console.log(bar()); // [2, 2]

// // 不报错 
// var x = x;
// // 报错
// let x = x;
// // ReferenceError: x is not defined

// // 报错 
// function () {
//     let a = 10;
//     var a = 1;
// }


// function func(arg) {
//     let arg; // 报错
// }
// function func(arg) {
//     {
//         let arg; // 不报错 
//     }
// }

// var tmp = new Date();
// function f() {
//     console.log(tmp);
//     var tmp = 'hello world';
//     console.log("second:", tmp)

// }
// f(); // undefined


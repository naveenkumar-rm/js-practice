// Hoisted

console.log(b);
var b = 10;

console.log(a);
let a = 10;

function Add() {
    let a = 10;
    console.log(a);
}

sub(110);

function sub(a) {
    console.log(a);
}

let fun
Add();
sub();


const mathOperations = (a,b) => {
    console.log(a-b);
    console.log(a+b);
    console.log(a*b);
}

mathOperations(3,5);


// Object
// const student = {
//     name:"Naveen",
//     Age:23,
//     school:"ZSGS"
//  }
// //  console.log(student);
// //  console.log(student["id"]);
// //  console.log("name"in student);
// // student.city = "kovai";
// // console.log(student);
// // delete student.Age;
// // console.log(student);
// // console.log(typeof student);
// // console.log(Object.keys(student));
// console.log(Object.values(student));


// const pers = {
//             name: "Naveen",
//             greet: function () {
//                 console.log("Hello Dude");
//             }
//         };
//         pers.greet();

// const person = {
//             name: "Rahul",
//             greet() {
//                 console.log("Hello " + student.name);
//             }
//         };
//         person.greet();
//    // 1. Simple Array
//         let numbers = [1, 2, 3];
//         console.log("Simple:", numbers);
// // 2. Mixed Array
//         let mixed = [10, "Hello", true];
//         console.log("Mixed:", mixed);
// // 3. Multi-Dimensional Array
//         let matrix = [
//             [1, 2],
//             [3, 4]
//         ];
//         console.log("2D:", matrix[0][1]); // 2
// // 4. Array of Objects
//         let users = [
//             { name: "Anu", age: 22 },
//             { name: "John", age: 25 }
//         ];
//         console.log("User Name:", users[0].name);
// // 5. Empty Array + Dynamic
//         let arr = [];
//         arr.push(100);
//         arr.push(200);
//         console.log("Dynamic:", arr);


let map = new Map();
let student = {
  name: "Anu",
  age: 16
};
map.set("student1", student);
console.log(map.get("student1"));
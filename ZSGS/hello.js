let num = 10
let name ='Naveenkumar'
let age = 19
let mark = 47
let result = mark>35 ? "pass" : "fail"

if(age>18){
    let age =14
    console.log(age);
}else{
    console.log("no");
    
}
let person ="Naveen"
switch (person) {
    case "praveen":
        console.log(
        "praveenkumar");
        break;
    case "Naveen":
        console.log(
        "naveenkumar");
        break;

    default:"Hari"
        break;
}

console.log(typeof (num));
console.log(num);
console.log(name);
console.log(typeof(name));
console.log(result);

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let today = new Date().getDay();
console.log(days[today]);

let fname = `"i love my life"`
console.log(fname);



let numbers=[1,3,4,5,8,9,6,5]

numbers.forEach(num => {
    console.log(num);
});
numbers.length

console.log(numbers.length);

numbers.push(10)
console.log(numbers);

numbers.pop()
console.log(numbers);

numbers.unshift(20)
console.log(numbers);

numbers.shift()
console.log(numbers);

console.log(numbers.includes(2));

console.log(numbers.indexOf(3));

let numbers1 =numbers.join("")
console.log(numbers1);
 
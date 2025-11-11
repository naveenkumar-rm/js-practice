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
 
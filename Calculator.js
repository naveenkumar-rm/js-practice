// const mathOperations = (a,b) => {
//     console.log(a-b);
//     console.log(a+b);
//     console.log(a*b);
// }

// mathOperations(3,5);


const mathOperations = (a,b,Symbol) => {
    switch (Symbol) {
    case "-":
        console.log(a - b); 
        break;
    case "+":
        console.log(a + b);
        break;
    case "*":
        console.log(a * b);
        break;
    case "/":
        console.log(a / b);
        break;
    default:
        console.log("Enter valid Math");
        break;
}
}

mathOperations(1000,10,"-");


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
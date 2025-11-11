numbers=[1,2,3,4,5]
console.log(numbers);

console.log(numbers[0]);

//adding elements into the arrr

numbers.push('hello')//it will add at the end
console.log(numbers);

numbers.unshift('world')
console.log(numbers); //it will add as a first element

numbers.pop()
console.log(numbers);

numbers.shift()
console.log(numbers);



//slice

console.log(numbers.slice(1,4)); //(start index,targetindex+1)

colors=['red','orange','red','black','blue','pink','orange']
console.log(colors.slice(1,4)); 

//splice #we can add, delete, or replace
colors.splice(2,1) //(targetindex, no of elements to delt, optional: elements to add])
console.log(colors);

colors.splice(3,0,'purple','peach','pink')
console.log(colors);



//includs
console.log(colors.includes('red'));




//map

let sqrnum=numbers.map(elm=>elm**2)
console.log(sqrnum);

//foreach

let sum=0

numbers.forEach(element => {
    sum+=element
    
});

console.log(sum);


//filter

let filtr=numbers.filter(el=>el>3)
console.log(filtr);

//indexOf, lastindexof


let colors1=['red','orange','red','black','blue','pink','orange']
console.log(colors1.indexOf('red')); //indexof it will find the first occurance of element

console.log(colors1.lastIndexOf('red'));

console.log(colors1.reverse());

//convert array to string
let stringarr=colors1.join('-')
console.log(stringarr);


console.log([colors1,12,34,566]);

console.log([...colors1,12,34,566]);
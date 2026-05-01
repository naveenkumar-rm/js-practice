// const person = {
//   name: 'anu',
//   greet: function () {
//     console.log('hello', this.name);
//   }
// };

// person.greet();
// console.log(person);

function Person() {
  this.name = 'anu';
  this.greet = function () {
    console.log('hello', this.name);
  };
}

let detail = new Person();
detail.greet();
console.log(detail);
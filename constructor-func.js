//4.-----constructor function-----
//as good as parent child
//properties are inherited and also new properties can be added
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}
const person1 = new Person("Niyati", 21, "female");
const person2 = new Person("Ria", 20, "female");
console.log(person1);

person1.dept = "cse";
console.log(person1);
console.log(person2);

//EXAMPLE2
function Fruit(name1, color, size) {
  this.name1 = name1;
  this.color = color;
  this.size = size;
}
const fruit1 = new Fruit("Apple", "Red", "Large");
console.log(fruit1);

//4.1. ---- using class ----
/*class Person {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
  }
  const person2 = new Person("N", 21, "female");
  console.log(person2);*/

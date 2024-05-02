//block scope
/*function blockscope() {
  let x = 5;
  console.log(x);
}
blockscope();
//console.log(blockscope()); will return undefined as there is no return statement
let x = 4;
console.log(x);

//object datatype
var Student = {
  name: "rashi",
  rollno: 44,
  age: 20,
  cgpa: 8.6,
  skills: ["UIUX", "Java", "Python"],
};
console.log(Student.name);

var Student1 = Student;
Student1.name = "bhoomika";
console.log(Student.name);

var str = "Hello";
console.log(str.toUpperCase());
console.log(str);

//comparison
console.log(Student1 == Student); //returns true

let Student3 = {
  name: "saloni",
  rollno: 46,
  age: 20,
  cgpa: 8.6,
  skills: ["UIUX", "Java", "Python"],
};
console.log(Student1 == Student3);
console.log(Student1 === Student3); //returns false as obejcts aRE DIFF.*/

var name = "abc"; //globally scoped

if (name) {
  console.log(`dh`, name);
  var name = "Mahadev";
  console.log(`bh`, name);
} else {
  console.log(`ah`, name);
}
name = "sourabh";
console.log(`eh`, name);

let names = "abc"; //block scoped

if (names) {
  console.log(`dh`, names);
  let names = "Mahadev";
  console.log(`bh`, names);
} else {
  console.log(`ah`, names);
}
names = "sourabh";
console.log(`eh`, names);

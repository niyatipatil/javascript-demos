//---string methods---
var Sent = "I am feeling good";
console.log(Sent.indexOf("I"));
console.log(Sent.indexOf(" "));

console.log(Sent.toLowerCase());
console.log(Sent.toUpperCase());

console.log(Sent.length);
console.log(Sent.replace("am", "am not"));

//--typecasting--
/*var a = "Number('123')";
console.log(typeof a);*/

/*var str = "123";
console.log(typeof str);
console.log(typeof Number(str));


var Student = {
  name: "rashi",
  rollno: 44,
  age: 20,
  cgpa: 8.6,
  skills: ["UIUX", "Java", "Python"],
};
console.log(Student.name);
console.log(Student["name"]);*/

//--local and global scope--
/*function demo() {
  var nm = "abc1";
  console.log(nm);
}
demo();
var nm = "xyz1";
console.log(nm);*/

//--addition function using parameters x,y and arguements 10,10
/*function add(x, y) {
  z = x + y;
  console.log(z);
}
add(10, 10);*/

//--function as a value to a key-- METHOD
//object has properties and methods
/*var adds = {
  add: function (x, y) {
    let z = x + y;
    console.log(z);
    //return z;
  },
};
adds.add(30, 10);
adds["add"](10, 10);
//console.log(adds.add(10, 10));*/

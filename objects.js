//1.object is a mutable datatype so it allows changes or updation of property in the object
/*const person = {
  firstName: "Niyati",
  lastName: "Patil",
  age: 50,
};
person.age = 30;
console.log(person);
//Array is an immutable datatype so it will throw error assignment to constant variable
person = ["Niyati", "Patil"];*/

//2.-----interpolation-----
/*let name = "Niyati";
console.log(`My name is ${name}`);*/

//3.-----nested object-----
let person = {
  name: "Niyati Patil",
  age: 21,
  address: {
    city: "Vasai",
    country: "India",
    zip: {
      code: 401208,
      street: "Rajavali Road",
    },
  },
};
console.log(person.address.city);
console.log(person.address.zip.code);
console.log(person["name"]);

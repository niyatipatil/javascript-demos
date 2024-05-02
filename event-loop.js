//--understanding event loop call stack
console.log("Hello");

setTimeout(() => {
  console.log("not this");
}, 5000);

//--------------------

console.log("this");

const faker = {
  string: "aednjshksk",
};

const user = {
  id: faker.string,
};

console.log(user);

const user = {
    name: "John",
    age: 30,
    agee: 30
  }
const {age, ...data} = user;
console.log(data);
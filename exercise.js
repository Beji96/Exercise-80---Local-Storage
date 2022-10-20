const user = {
  id: 1,
  name: "John",
  age: 25,
};
localStorage.setItem("user", JSON.stringify(user));
localStorage
  .getItem("user")
  .then((res) => JSON.parse(res))
  .then((user) => console.log(user))
  .catch((err) => console.log(err));
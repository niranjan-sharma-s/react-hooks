/*The Proxy object wraps the target object and overrides its behaviour by setting traps. To return a default value for an undefined object property, you can set a get trap in the Proxy handler which returns the default value */


let user = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

let newUser = new Proxy(user, {
  get: function (obj, prop) {
    return obj.hasOwnProperty(prop) ? obj[prop] : "default value";
  },
});


//Creating new object and adding new key-values

let userAddress = {...user , address:"India"}

Object.assign(user , {address:"india"})

let userAdd = new Object(user)
userAdd = {
    ...user,
    address : "India"
}

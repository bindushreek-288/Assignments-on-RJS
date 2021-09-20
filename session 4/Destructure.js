const user = { person:
    { employee: {
       firstname: "Rahul" }, 
       likes: ["Cycling", "Hiking", "Driving"] } }
let {person:{employee:{firstname:name},likes:likes}}=user;

console.log(name,likes);
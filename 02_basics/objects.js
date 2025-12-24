//singleton

//object literals 

const mysym=Symbol("Key1");

const jsUser={
    name:"Rohini",
    "full name":"Rohini patil",
    age:24,
    location:"Pune",
    email:"rohini@123tech.com",
    isloggedIn: false,
    lastLoginDays:["Monday", "Saturday"],
    [mysym]:"key2"
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser.full name)
// console.log(jsUser["full name"])
// console.log(jsUser[mysym])
// console.log(typeof jsUser[mysym])

jsUser.email="rohini@gmail.com"
// console.log(jsUser);

// Object.freeze(jsUser);

jsUser.email="rohini@google.com"
// console.log(jsUser);

jsUser.greeting=function(){
    console.log("hello js user");
}

jsUser.greeting2=function(){
    console.log(`hello js user ${this.name}`);
}
console.log(jsUser.greeting);
console.log(jsUser.greeting());

console.log(jsUser.greeting2());
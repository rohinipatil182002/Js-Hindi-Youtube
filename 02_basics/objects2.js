const tinderuser = new Object()
//  const tinderuser={}

tinderuser.name = "Rohini"
tinderuser.age = 24
tinderuser.isloggedin = false
//  console.log(tinderuser);


const regularUser = {
    email: "some@gmail.com",
    fullName: {
        username: {
            firstname: "rohini",
            lastname: "Patil"
        }
    }
}

//  console.log(regularUser.fullName.username.firstname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
// const obj3 = { obj1, obj2 }
// const obj3=Object.assign({},obj1, obj2)
const obj3={...obj1, ...obj2}
// console.log(obj3);



function Myname(){
    console.log("R");
     console.log("o");
     console.log("h");
     console.log("i");
     console.log("n");
     console.log("i");
}

// Myname();

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }

function addTwoNumbers(num1,num2){
    let result= num1 + num2;
    return result;
}

const result= addTwoNumbers(5,3);
// console.log("Results : " , result);

function loginuserMessage(userName){
    if(!userName){
        return "Please enter a valid username";
    }
   return`${userName} just logged in`;
}
// console.log(loginuserMessage("Rohini"));

function calculateCartPrice(...prices){ //... rest operator or spread operator
    return prices;
}
console.log(calculateCartPrice(200,300,400,500));


const user={
    name:"Rohini",
    age:24,
    class:"MSC"
}

function printInfo(userinfo){
console.log(`User name is ${userinfo.name} and age is ${userinfo.age}`);
}
printInfo(user)

const array=[1,2,3,4,5];
function printArrayInfo(arr){
    return arr[3];
}
console.log(printArrayInfo(array));


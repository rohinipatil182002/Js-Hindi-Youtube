let a = 10;
const b = 20;
var c = 30;
// console.log(a);
// console.log(b);
// console.log(c);


if (true) {
    let a = 100;
    const b = 200;
    var c = 300;
    // console.log("Inner :",a);
    // console.log("Inner :",b);
    // console.log("Inner :",c);
}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    let username="Rohini";
    function two(){
        let age=24;
        let message="Hello "+username;
        // console.log(message);
    }
   
    // confole.log(age);
     two();
}
one();


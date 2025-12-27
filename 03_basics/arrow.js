const user={
    username:"Rohini",
    price :999,

    welcomeMessage:function(){
        console.log(`Welcome ${this.username}, your price is ${this.price}`);
        console.log(this);
        
    }
}
console.log(this);

user.welcomeMessage();
function globlalFunction(){
    console.log(this);
}
globlalFunction();

const myArrowFunction=()=>{
    console.log(this);
}
myArrowFunction();

const addtonumbers=(num1, num2)=>{
    return num1 + num2; // explicit return
}
console.log(addtonumbers(5,7));

const addtwovalues=(num1, num2)=> num1 + num2; // implicit return
console.log(addtwovalues(10,15));

const displayuser=()=>({username :"Rohini Patil"});
console.log(displayuser());

const MyArray=[1,2,3,4,5];

MyArray.forEach((element)=>{
    console.log(element);
});

const displayarray=()=>
{
    return MyArray;
}
console.log(displayarray());
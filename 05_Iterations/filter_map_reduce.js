// const coding=['JavaScript', 'Python', 'Ruby', 'Java', 'C++', 'Go', 'Swift'];

// const values=coding.forEach((item)=>{
//     // console.log(item);
// })
// console.log(values);


const mynums=[1,2,,3,4,5,6,7,8,9,10];

// const newnums=mynums.filter((num)=>{
//     return num>5;
// })

// const newnums=[];
// mynums.forEach((num)=>{
//     if(num>5){
//         newnums.push(num);
//     }   
// })
// console.log(newnums);

// const books=[
//     {title:"Book One", author:"Author One", rating:4.5},
//     {title:"Book Two", author:"Author Two", rating:3.5},
//     {title:"Book Three", author:"Author Three", rating:4.8},
//     {title:"Book Four", author:"Author Four", rating:2.5},
// ];

// const userbooks=books.filter((bk)=>bk.rating>4.5)

// console.log(userbooks);

// const userbooks2=books.filter((bk)=>bk.author==="Author Two" && bk.rating>4.0)

// console.log(userbooks2);

// const mynums2=[1,2,3,4,5,6,7,8,9,10];

// const mynumbers=mynums2.map((num)=> num+10);
// console.log(mynumbers);

// const chaininguse=mynums2
//                   .map((num)=> num*2)
//                   .map((num)=> num+5)
//                   .filter((num)=> num>15);

// console.log(chaininguse);

const mynums3=[1,2,3,4,5];
const total=mynums3.reduce((accumulator, currentvalue)=>{
    return accumulator + currentvalue;
},0);

console.log(total);
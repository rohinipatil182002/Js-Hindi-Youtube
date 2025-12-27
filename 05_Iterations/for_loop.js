// for loop

for(let i=0;i<5;i++){
    console.log("Iteration number :",i);
}

array=[1,2,3,4,5,6,7,8,9,10];
for(let index=0; index<array.length; index++){
    console.log("Array element at index ", index , " is ", array[index]);
}


for(let index=0; index<=20; index++){
    
    if(index==5){
        console.log('detedted 5');
        break 
    }
    console.log(`value of i is ${index}`);
}


for(let index=0; index<=20; index++){
    
    if(index==5){
        console.log('detedted 5');
       continue
    }
    console.log(`value of i is ${index}`);
}
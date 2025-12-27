const arr=[1,2,3,4,5];
for (const val of arr) {
    console.log(`value is :${val}`);
}

const greeting="Hello World";
for (const char of greeting) {
    console.log(`character is :${char}`);
}

const map = new Map();

map.set("name","Rohini");
map.set("age",24);
map.set("class","MSC");
map.set("name","Rohini Patil"); // duplicate key, will update the value

for (const [key, value] of map) {
    console.log(`${key} : ${value}`);
}   
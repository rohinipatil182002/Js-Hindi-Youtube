const marvel_heros=["thor", "suparman", "Ironman"]

const dc=["superman" , "flash", "batman"]

marvel_heros.push(dc)

// console.log(marvel_heros);

const new_all_heros=marvel_heros.concat(dc)

// console.log(marvel_heros[3][1]);

// console.log(new_all_heros);
const all_new_heros=[...marvel_heros, ...dc]
// console.log(all_new_heros);

// const mix_array= [1,2,3, [4,5,6],7,[6,7,[4,5]]]
// const real_mix_array= mix_array.flat(Infinity)
// console.log(real_mix_array)

console.log(Array.isArray("Rohini"));
console.log(Array.from("Rohini"));
console.log(Array.from({name:"Rohini"}));   //interesting

let score1=100;
let score2=100;
let score3=100;
console.log(Array.of(score1,score2, score3));

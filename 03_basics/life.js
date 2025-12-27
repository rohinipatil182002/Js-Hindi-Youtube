//Immediate Invoked Function Expression (IIFE) to avoid polluting global scope
(function (){
    console.log("Life is beautiful!");
})();
(()=>{
    console.log("Enjoy every moment of life!");
})(); 
((name)=>{
    console.log(`Hello ${name}, make the most of your life!`);
})("Rohini");
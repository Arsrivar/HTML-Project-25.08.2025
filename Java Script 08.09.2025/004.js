var myNameScript = "Justin VAR";
let myNewNameScript = "Justin LET";
try { if (true){
    var myGlobalVariable="I am global";
   
    console.log("myScopedVariable declared inside a block:", myScopedVariable);
 
}}catch(error){console.info("i caught an error:", error);}
console.log(myGlobalVariable);

//console.log(myScopedVariable); // Uncaught ReferenceError: myScopedVariable is not defined

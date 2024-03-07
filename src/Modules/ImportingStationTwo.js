
// importing module export object
const RLG = require("./ExportationStationTwo");

// importing a single function
const RNG = require("./ExportationStationOne");

// creating a function from imported functions
function codeGenerator(RNG, letterGenerator, letterPicker){

    let code = [];

    for(let i = 0; 6 > i; i++){

        if(i <= 1){
        code.push(letterGenerator(letterPicker(26)).toUpperCase())
        } else {
            code.push(RNG())
        }
    }

    code = code.join("");

    return code
}

console.log("Hello sir, your access code to the laser rifle testing faciltiy for the day is")
console.log(codeGenerator(RNG,RLG.letterGenerator,RLG.letterPicker))



    
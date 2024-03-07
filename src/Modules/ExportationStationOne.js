
// Declaring A  Single Function To Be Exported

function randomNumberGenerator() {

    let randomNumber = Math.floor(Math.random() * 10);

    //console.log("I will generate a number 1 - 100 0_0\n")

    //console.log("GENERATING NUMBER *_*!")
    //console.log("GENERATING NUMBER *_*!")
    //console.log("GENERATING NUMBER *_*!\n")

    //console.log("Here is your random number: " + randomNumber);

    return randomNumber

}

// Exporting a Single Piece Of Data

//This function is being exported to ImportingStationOne.js

module.exports = randomNumberGenerator;



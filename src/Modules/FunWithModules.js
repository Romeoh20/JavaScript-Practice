
// Declaring Functions To Be Exported

function randomNumberGenerator() {

    let randomNumber = Math.ceil(Math.random() * 100);

    console.log("I will generate a number 1 - 100 0_0\n")

    console.log("GENERATING NUMBER *_*!")
    console.log("GENERATING NUMBER *_*!")
    console.log("GENERATING NUMBER *_*!\n")

    console.log("Here is your random number: " + randomNumber);

}

function randomIndexPicker(arrayLength) {

return randomIndex = Math.floor(Math.random * arrayLength)

}

// Exporting a Single Piece Of Data

//This function is being exported to ImportingStationOne.js

module.exports = randomNumberGenerator;



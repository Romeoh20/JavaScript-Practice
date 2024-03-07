
// Declaring Multiple Functions To Be Exported

function randomIndexPicker(arrayLength) {

    return randomIndex = Math.floor(Math.random() * arrayLength)
    
}

function randomLetterGenerator(indexPicker) {

    let alphabet = "a b c d e f g h i j k l m n o p q r s t u v w x y z"
    let alphabetArray = alphabet.split(" ");

    return alphabetArray[indexPicker]

}

module.exports = {

    letterPicker: randomIndexPicker,
    letterGenerator: randomLetterGenerator
};





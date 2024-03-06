
// Defining functions 


function multiplyByTen(number){
    return number * 10;
}

function hasRemainder(dividend,divisor){

    if (dividend % divisor === 0){
        return false
    }

    return true
}

// Calling functions 


console.log(multiplyByTen(100));

console.log(hasRemainder(15,4))

// Referencing functions


let multiply = multiplyByTen;

let remainder = hasRemainder;

// Calling referenced functions


console.log("\n")

console.log(multiply(100));

console.log(remainder(15,4));

console.log("you can see that the same functions are preformed even under different aliases")

// Defining an anonymous function


createSmallList = function(item1,item2,item3){

    let smallList = [item1,item2,item3]

    return smallList
};


// Calling an anonymous function


console.log("\n")

console.log(createSmallList("egg","sandwich","sand castle"))


// Defining a high-order function
// This formula is completely made up 

function calculateAreaOfImpossibleShape(length,dimensionCalculator){

    let area = dimensionCalculator(7) * length;

    return area;
}

// Calling an high-order function
// The high-order function takes another function as a parameter !!!


console.log(calculateAreaOfImpossibleShape(32,multiplyByTen));


// Defining one-use-functions inside of  high order functions\


let tools = ["drill", "saw", "hammer"];

// defining a high order function first
function printNumberedItems(items,format){

    console.log(format(items));

}

// I am calling the high order function that I defined above and defining a function inside of it at the same time"
printNumberedItems(tools, function(array){

    let result = "";
    for(let i = 0; i < array.length; i++){
        result+= i+1 + ". " + array[i] + "\n";
    }
    return result;
});

// Defining a recursive function

let powerTools = ["drill", "buzz saw", "radial arm saw", "miter saw"];
let hammers = ["sledge hammer", "mallet", "inflatable hammer"];
let farmTools = ["pitchfork", "scythe", "cattle prod"]

let ultimateList = [farmTools, hammers, powerTools];

function findRadialArmSaw(powerToolList, index){


    if(powerToolList[index] === "radial arm saw"){
        console.log('RADIAL ARM SAW FOUND AT INDEX ' + index + "!!!!!!!!!")
        return console.log("YESSSSS")
    }

    console.log("No radial arm saw found at index " + index + "!!!!!!")

    return findRadialArmSaw(powerToolList,index += 1)

}

// Calling a recursive function 
// It is basically a loop, lets try a 3 dimensional one

findRadialArmSaw(powerTools,0);


// This function is able to through a 3D Array !!
function findRadialArmSawInBiggerList(listOfAllTools, index1, index2){


    if(listOfAllTools[index1][index2] === "radial arm saw"){
        return console.log('RADIAL ARM SAW FOUND AT INDEX ' + index1 + ' AND INDEX '  + index2 + '!!!!!!!' )
    }

    if(listOfAllTools[index1][index2] === undefined){
        return findRadialArmSawInBiggerList(listOfAllTools, index1+= 1, index2 = 0);
    }

    console.log('No radial arm saw found at index ' + index1 + ' and index '  + index2)

    return findRadialArmSawInBiggerList(listOfAllTools, index1, index2+= 1)

}

let exampleList = [1,2,3]

console.log(exampleList[3]);

findRadialArmSawInBiggerList(ultimateList,0,0);




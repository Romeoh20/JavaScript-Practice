
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


// Defining a one-use-function inside of a high order function


let tools = ["drill", "saw", "hammer"];

// defining a high order function first
function printNumberedItems(items,format){

    console.log(format(items));

}

printNumberedItems(tools, function(array){

    let result = "";
    for(let i = 0; i < array.length; i++){
        result+= i+1 + ". " + array[i] + "\n";
    }
    return result;
});



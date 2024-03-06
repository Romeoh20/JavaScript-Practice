
//declaring a function to put inside of the person object
let burp1 = function(){

}

// declaring the person object
let person = {

    gender: "male",
    height: "5'7",
    weight: "176",
    eyeColor: "green",
    screamAtRandomPeople: function(){
        console.log("HEEEELLLOOOOOO CITIZENNNNNNN")
    },
    burp: burp1
    
};

// declaring the cat object
let cat = {

    color: "black",
    age: "1",
    name: "Eva",

}

person.screamAtRandomPeople();

console.log(person.gender);
console.log(person.height);
console.log(person.weight);
console.log(person.eyeColor);


// practice using the for in loop
for(let key in cat){
    console.log(key +": " + cat[key])
}

person.pet = cat;

console.log("\n");
console.log("\n");

// more for in loop practice with a bit more complexity
for(let key in person){

    if(typeof(person[key]) === typeof(person.pet) || typeof(person[key]) === typeof(person.screamAtRandomPeople)){
        break;
    }else{
        console.log(key + ": " + person[key] + "    type: " + typeof(person[key]));
    }
}

console.log("\n");
console.log("\n");

console.log(typeof(person.pet))
console.log(typeof(person.burp))


console.log("\n");
console.log("\n");


// creating an object inside of an object inside of an object 0_0
let mouse = {
    color: "grey",
    age: 5,
    eyeColor: "red",
    brain: {
        color: "pink",
        IQ: 140,
        chip: {
            brand: "neuroLink",
            powerToRun: "1000W"
        }
    }
}

console.log(mouse.brain.color);
console.log(mouse.brain.chip.brand);
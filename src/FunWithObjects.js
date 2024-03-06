

let burp1 = function(){

}


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

for(let key in cat){
    console.log(key +": " + cat[key])
}

person.pet = cat;

console.log("\n");
console.log("\n");

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
//Inspired By Borderlands, a video game that I really enjoy, the loot system in that game works by 
// generating weapon type, level, element and weapon parts. It is "randomly" generated with odds,
// with higher chances of lower tier loot and lower chances of higher tier loot kinda like fortnite
// but a lot more in depth

const crypto = require('crypto');

let commonChest = {
    name: "Scrap Chest",

}


function generateRandomLootSource(){

    let lootSourceList = ["commonChest", "rareChest", "boss"];
    let lootSourcePicker = Math.floor(3 * Math.random());

    return lootSourceList[lootSourcePicker];

}

const randomBuffer = crypto.randomBytes(1);
const randomNumber = randomBuffer.readUInt8();
const randomNum = Math.ceil((randomNumber/255) * 100) / 10

const randomByt = crypto.randomBytes(10);

console.log(`You just got loot from a ${generateRandomLootSource()}!`)

console.log(randomNum);
console.log(randomByt)
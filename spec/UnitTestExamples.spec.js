
const addTwoNumbers = require("../src/UnitTestExamples.js");

function addNumbers(num1,num2){
    return num1 + num2
}


describe("The addTwoNumber function", function() {
    it("should return the sum of two numbers",function() {

        expect(addNumbers(2,2)).toEqual(4)
    });
});
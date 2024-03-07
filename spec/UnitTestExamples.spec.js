
const addTwoNumbers = require("../src/UnitTestExamples.js");


describe("The addTwoNums function", function(){
    it("should return the sum of two numbers", function(){
       expect(addTwoNumbers(2,2)).toEqual(4);
    });

});

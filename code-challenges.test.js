// ASSESSMENT 2: Coding Practical Questions with Jest

const { number } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.
const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]

const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// -------------------------<break>---------------------------------

// Jest template
// describe (" ", () => {
//   it (" ", () => {
//     expect().toEqual()
//   })
// })

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe ("divisibleByThree", () => {
    it ("takes a object as an argument and decides if the number inside it is evenly divisible by three or not.", () => {
      expect(divisibleByThree(15)).toEqual("is divisible by three")
      expect(divisibleByThree(0)).toEqual("is divisible by three")
      expect(divisibleByThree(-7)).toEqual("is not divisible by three")
    })
})
// Reference Error: divisibleByThree is not defined
    // This error is expected, divisibleByThree has yet to be definied for the test function to be able to that oubject as an argument.

// b) Create the function that makes the test pass.

// I will need to declare the function called divisibleByThree that returns whether or not a given number is divisible by three.
    // One parameter - number 
        // I'm not using an array so I won't be able to use .map or .filter I don't think... I'll try it anyway and see what happens. More on that later.
    // Expected return => "<number> is/is not divisible by three"
    // I'll probably use a conditional if/else statement to check whether the number within the object is divisible by three, and return the string "<number> is divisible by three"  if it is || return "<number> is not divisible by three" 
    // Return the appropriate response.

    const object1 = { number: 15 }
    const object2 = { number: 0 }
    const object3 = { number: -7 }

const divisibleByThree = (num) => {
    if (num % 3 === 0){
        return "is divisible by three"
    } else if (num % 3 !== 0){
        return "is not divisible by three"
    } else {
        return "Error"
    }
   }
// Reference error: Expected: "is divisible by three"
                // Received: "is not divisible by three"
    // I'm not entirely sure what is happening here. I'm sure that it is a syntax/logic issue. 
// Update: I ran a successfull test! My issue was in my expect statements not having the value of the number for the objects being passed through.

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// -------------------------<break>---------------------------------

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
// I will need to write the test function that takes in an array of words and returns an array with all the words capitalized.
describe ("capAllLetters", () => {
    it ("takes in an array of words and returns an array with all the words capitalized.", () => {
      expect(capAllLetters(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
      expect(capAllLetters(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})
//  ReferenceError: capAllLetters is not defined
// The test failed successfully. I have a feeling that there's something wrong or out of place, I could be wrong but we will find out soon.

// b) Create the function that makes the test pass.
// Declare capAllLetters variable. Since the object being passed through the function is an array, I will need to take the array to a string using .join() so that I can then use the .toUpperCase() method to capitalize the strings. 
    
//This approach doesn't seem to be working. 

// I think I'm going to need to run a for loop to iterate over the array to capitalize the words, and then return the new array. Since I will need to return another array, I think I'm going to need to use .map to be able to return an altered array.
const capAllLetters = (array) => {
    return array.map(() => {

    })
}

// -------------------------<break>---------------------------------

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2


// -------------------------<break>---------------------------------

// b) Create the function that makes the test pass.

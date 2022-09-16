// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Foxtrot 2022"
// console.log(cohort.split(""))

// a) Your answer: The .split("") method is a built-in method that is used to take a string and create a new array. The string will be broken up into the individual characters and be assigned an index beginning at the zeroth position and continuing for each character within the string. The spacing between the new characters within the new array can be assigned inside of the quotation marks within the split method .split("<here>")
// Expected Return => 
// ['F', 'o', 'x', 't', 'r', 'o', 't', ' ', '2', '0', '2', '2']

// b) Verify and explain:I was correct in the output. The .split method iterated through the string to identify each character, assign the character a cooresponding index for the new array, and then display the new array to the console.
// Researched return =>
// ['F', 'o', 'x', 't', 'r', 'o', 't', ' ', '2', '0', '2', '2']

// -------------------------<break>---------------------------------

// --------------------2) What will this log?

const greeter = (name) => {
  return `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: I believe this will log an undefined message. The function has been declared, however there is no return statement within the function. As it reads right now, "LEARN Student" is being passed as the argument for the greeter function.

// Since name is being used as a placeholder for any string entered for the greeting, "LEARN Student" is then called to the string `Hello, ${name}!` through string interpolation, however that string has no return statement to display the output.

// Expected Return => undefined

// b) Verify and explain:I was correct!! The function had no issue with running, however without the return statement, there is nothing telling the function to return that output back to the console. By adding a return statement before the string interpolation at line 26, this will return the greeter function output.

// Researched Return => Hello, LEARN Student!

// -------------------------<break>---------------------------------

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: .map is a Higher-Order Function that uses a built in function to iterate through a given array and return a new array of the same length. This same task could be accomplished using a for loop to iterate through the array and push the new multiplied index values to an empty array that we could then display. However using .map is much more efficient and concise.

// multipliedByTwo is being used as the argument in the .map function. The iteration will then multiply i * 2 at each index for the array, with i being the current value of the index in the array 0-4.

// Array Indexes       0  1   2   3   4
// Expected Return => [8, 10, 12, 14, 16]

// b) Verify and explain:I was correct again!! map returned a new array with a length of 0-4 and each index value from multipliedByTwo, well, multiplied by two!

// Researched Return => [ 8, 10, 12, 14, 16 ]

// -------------------------<break>---------------------------------

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: .filter() is another Higher-Order Function that has a built-in iteration to return a new array with only values cooresponding to whatever parameters have been declared as the 'filter' for the given array. In this instance, we want to take array onlyOdds with a length of 0-4 and pass it through the .filter method

// For this filter function, the filter is using the modulo operator to determine whether a given value for (onlyOdds[i]/2) has a remainder that is not strictly equal to zero, making it an odd number. 
// i.e. even: 4 / 2 = 2(0 remainder)    odd:  5 / 2 = 2(.5 remainder)

// If the number is an odd number, that number is the sent to a new array containing only those values. The .filter() and .map() differ in that .map must return an array of equal length to the original array. 
// .filter can return an array that now has a length of 0-2. 

// Expected return => [11, 13, 15]

// b) Verify and explain:I am on a ROLL :D The onlyOdds array was passed through the filter function as the argument. Using the modulo operator, .filter determined through iteration which values for each index were odd numbers, and then pushed those numbers to a new array that was then returned to the console.

// Researched return => [ 11, 13, 15 ]

// -------------------------<break>---------------------------------

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer:

// Expected return =>

// b) Verify and explain:

// Researched return =>

// -------------------------<break>---------------------------------

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name,
    this.cohort = "Foxtrot",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer:

// Expected return =>

// b) Verify and explain:

// Researched return =>

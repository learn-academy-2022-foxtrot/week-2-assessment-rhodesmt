# ASSESSMENT 2: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: An argument is what is passed through a function that will determine a specific output. A parameter is what is set within the function that determines what kind of data can be passed through the function.

Researched answer: A parameter is a placeholder variable that is located inside the parentheses of a function expression. The parameter essentially acts as the stand-in until an arugment is passed through using a function invocation statement.  

    [Function Declaration] 
    const exampleFunction = (parameter) => {
        return 'example statement here'
    }
  [console.log(exampleFunction(argument))]<--------- Function invocation
  
  An argument is what is passed through the function and must be a data type recognized by JavaScript and will take the place in the function wherever the parameter has been placed. Multiple arguments can be passed through a function, however the number of arugments must also equal the number of parameters within the function expression. 

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: The predefined .map() parameters are that it must be an array and the array must contain JavaScript data types. Optionally, you can add specific bracket notation for accessing specific data within the array for output.  

Researched answer: .map() has two parameters: the function, which is what will iterate through a given array, and the currentValue which holds the value of the current element.

function(currentValue) <----- Required Parameters

                        *      *
function(currentValue, index, arr)
*Optional Parameters: Index, which holds the index of the given array at the present iteration
And arr, which holds the array. 
thisValue can also be used to hold the value of passed into the function.

3. What is the difference between map and filter?

Your answer: .map() takes in an array, runs an interation through the indexes and returns a new array of equal length with different values. It is a non-mutator meaning that it wont alter the original values of the indexes within the given array. 
.filter() is an array mutator that takes in an array and through whatever instructions are preset will deliver a subset of that data in a new array  

Researched answer: .filter() will return anything with a boolean value (either true/false||truthy/falsy) with values that are determined true/truthy being the only ones passed on to the subset array in the return. Both .map() and .filter() are useful in that the replace the need of writing out a for loop. This helps us to write condense and concise code, or refactor to be more optimized.

4. What is iteration?

Your answer:Iteration is the continuous repetition of a process until a specific condition is met. Methods like a for loop, or higher-order functions like .map() and .filter() are ways a program is able to iterate through an array and process that data in the way specified at that time.

<!-- for (let i=0; i<array.length; i++;) --> The framework for the for loop array iteration

Researched answer:A for loop runs on a basis of true or false conditions, depending on the conditions set, and will only continue to run as long as the condition is true. When the iteration detects a false value, the loop stops.

5. What is the difference between a class and an object?

Your answer:A class is like a container that is used to hold a collection of multiple individual objects. Classes can be called and used to specifically reference an individual object. Objects are one of the six primitive data types and can also be functions. The are the pieces of data that are used to perform actions by storing the logic for the action required. 

Researched answer:Classes are the blueprints of objects, and contain both data and behavior. Class names must be in PascalCase, they must contain a constructor: a method used for the creation and initialization of the objects within the class. this: is a keyword that is used to refer to the object that it belongs to. new: a keyword that is used whenever a developer wants to create a new instance of a class.

6. STRETCH: What is hoisting in JavaScript?

Your answer:I do not know what hoisting is in Javascript, but I will absolutely be able to give you an answer. 

Researched answer:Hoisting refers to JavaScripts default behavior that moves all declarations to the top of the current scope or function. The hoisted variables are not initialized however, until they are declared, the output will result in a ReferenceError.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories: A user story is like the pseudo-code for the design process when creating an app. It is a descriptive statement about a specific feature of an application, wrote from the perspective of a user.

2. Spread operator: The spread operator(...) is a built-in method for Javascript that allows us to copy part or all of an existing array or object into another array or object. 

3. React: React is a JavaScript library that allows us to create out user interface (UI) and built applications. React allows us to compartmentalize and separate each component along with their functionality and return markup.

4. React props: React properties are specialized objects that pass information from one component to another. Props create a 'waterfall' flow of data and behavior from the parent component down to a specific nested component depending on the component invocation.

5. DOM events: DOM stands for Document Object Model and is the visual representation of code, ie. a website in a mobile or web browser. Events are "things" that happen to webpages. They can be anything such as the page finishes loading, the user clicks on a button, or inputs information into a field.

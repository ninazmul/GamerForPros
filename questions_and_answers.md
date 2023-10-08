<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: The correct answer is A: {}.

<i>The variable greetign is declared with the let keyword, which means that it is a block-scoped variable. This means that it can only be accessed within the block in which it is declared. In this case, the block is the entire code snippet.

The variable greetign is then assigned the empty object literal {}. This creates a new empty object and assigns it to the variable greetign.

Finally, the console.log() function is used to log the value of greetign. The value of greetign is the empty object literal {}, so that is what is logged to the console.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: The correct answer is A: NaN.

<i>
JavaScript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
Use code with caution. Learn more
The sum() function takes two numbers as input and returns their sum. In this case, the function is called with the arguments 1 and "2".

The JavaScript engine will try to convert the string "2" to a number before adding it to the number 1. However, the string "2" does not contain a valid number, so the engine will convert it to NaN.

The + operator will then add the number 1 to NaN, which will result in NaN.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: The correct answer is A: ['🍕', '🍫', '🥑', '🍔'].

<i>The variable food is declared as a constant array. This means that the elements of the array cannot be changed.

The variable info is declared as a constant object. This means that the properties of the object cannot be changed. However, the values of the properties can be changed.

When the info.favoriteFood property is assigned the value "🍝", the value of the favoriteFood property of the info object is changed. However, the elements of the food array are not changed.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: The correct answer is B: Hi there, undefined.

<i>
The correct answer is B: Hi there, undefined.

Here is an explanation:

JavaScript
function sayHi(name) {
 return `Hi there, ${name}`;
}

console.log(sayHi());
Use code with caution. Learn more
The sayHi() function takes a name as input and returns a greeting. In this case, the function is called without any arguments.

When the sayHi() function is called without any arguments, the name parameter will be assigned the value undefined. This is because the undefined value is the default value for function parameters that are not assigned a value.

The string template literal Hi there, ${name} will evaluate to the string "Hi there, undefined", because the name variable is equal to undefined.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: The correct answer is B: 2.

<i>The nums.forEach() method iterates over the elements of the nums array and calls the callback function for each element. The callback function takes the current element of the array as its argument.

In this case, the callback function checks if the current element of the array is not equal to 0. If it is not equal to 0, the callback function increments the count variable by 1.

The nums array contains four elements: 0, 1, 2, and 3. The first element of the array, 0, is equal to 0. Therefore, the callback function will not increment the count variable for the first element of the array.

The second, third, and fourth elements of the array are not equal to 0. Therefore, the callback function will increment the count variable by 1 for each of these elements.

After the nums.forEach() method has finished iterating over the elements of the nums array, the count variable will be equal to 2.

</i>

</p>
</details>

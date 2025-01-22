// const { generateRandomNumber, celciusToFahrenheit } = require("./utils");

// console.log(generateRandomNumber());
// console.log(celciusToFahrenheit(0));

import getPosts, { getPostsLength } from "./postController.js";

console.log(getPosts())
console.log(`Post Length: ${getPostsLength()}`)
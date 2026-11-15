const assert = require("assert");
const hello = require("./app");
const result = hello("World");

assert.strictEqual(result, "Hello, World!");
console.log("Tests passed");
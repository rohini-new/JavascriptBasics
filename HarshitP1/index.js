// let multi = [["i1"], ["i2"], ["i3"]];
// let multi = ["i1", "i2", "i3"];
// let spread = [...multi];
// console.log(spread);
// // spread = [...multi].pop();
// console.log(spread);
// spread = [...multi].pop().pop();
// console.log(spread);
// let age = 6;
// let drink = age >= 8 ? "coffee" : "milk";
// console.log(drink);

// console.log(drink);

// let num = 19;
// let userguess = +prompt("guess a number?");
// if (userguess === num) {
//   console.log("correct!");
// } else if (userguess > 19) {
//   console.log("too high");
// } else console.log("too low");

// let priority = +prompt("enter the priority:");
// switch (priority) {
//   case 0:
//     console.log("job");
//     break;
//   case 1:
//     console.log("fitness");

//   case 2:
//     console.log("skincare");
//     break;
//   case 3:
//     console.log("shaadi");
//     break;
//   default:
//     console.log("peace");
// }
// let sum = 0;
// for (let i = 0; i < 100; i++) {
//   sum += i;
// }

// console.log(sum);

// let arr = ["pizza", "biryani", "waffle", "cappucino"];
// let o = {};
// console.log(typeof arr);
// console.log(Array.isArray(arr));
// console.log(Array.isArray(arr));
// console.log(Array.isArray(o));

// console.log(arr.pop());
// console.log(arr);
// console.log(arr.push("chicken ghee roast"));
// console.log(arr);
// let newArr;
// newArr = [].concat(arr);
// console.log(newArr);
// console.log(arr);
// console.log(arr === newArr);

// let multi = [["i1"], ["i2"], ["i3"]];
// let spread = [...multi];
// console.log(multi === spread);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

const fruits = ["apple", "litchi", "mango", "kiwi"];
// let i = 0;
// while (i < fruits.length) {
//   console.log(fruits[i]);
//   i++;
// }

// for (let fruit of fruits) {
//   console.log(fruit);
// }

// for (let fruit in fruits) {
//   console.log(fruits[fruit]);
// }

// const myArr = ["val1", "val2", "val3", "val4"];
// let [value1, value2] = myArr;
// console.log(value1, value2); // val1 val2

// let [value1, , value2] = myArr;
// console.log(value1, value2); // val1 val3

// const shortArr = ["val1"];
// let [value1, value2, value3] = shortArr;
// console.log(value1, value2, value3); // val1 undefined undefined

// let [value1, value2, ...newArr] = myArr;
// console.log(value1, value2, newArr); // val1 val2 Array [ "val3", "val4" ]

// const userArr = [];
// for (let i = 0; i < 5; i++) {
//   userArr.push(+prompt("enter number in array:"));
// }

// let [first, , , , last] = userArr;
// console.log("first element is", first);
// console.log("last element is", last);

// const probArr = [1, 4, 7, 2, 9, 18, 20];
// const [firstHalf, secondHalf] = [
//   probArr.slice(0, probArr.length / 2),
//   probArr.slice(probArr.length / 2),
// ];
// console.log(firstHalf);
// console.log(secondHalf);

// const probArr = [1, 4, 7, 2, 9];
// let [] = probArr.slice(2);
// console.log(newArr);

// const myObj = {
//   name: "rohini",
//   age: 25,
//   sex: "female",
//   location: "Pune, IN",
// };

// console.log(myObj);
// console.log(myObj["age"]);
// console.log(myObj.location);
// let job = "occupation";
// myObj[job] = "Tester";
// console.log(myObj);

// for (let key in myObj) {
//   console.log(key, " : ", myObj[key]);
// }

// console.log(Array.isArray(Object.keys(myObj)));

// for (let key of Object.keys(myObj)) {
//   console.log(key, " : ", myObj[key]);
// }

// const key1 = "objKey1";
// const key2 = "objKey2";

// const val1 = "objValue1";
// const val2 = "objValue2";

// const obj = {};
// obj[key1] = val1;
// obj[key2] = val2;

// console.log(obj);

// computed properties

// const obj = {
//   [key1]: val1,
//   [key2]: val2,
// };

// console.log(obj);

// const obj1 = {
//   key1: "value1",
//   key2: "value2",
// };

// const obj2 = {
//   key1: "newValue",
//   key3: "value3",
//   key4: "value4",
// };

// const newObj = { ...obj1 };
// console.log(newObj);
// const secondObj = { ...obj1, ...obj2 };
// console.log(secondObj);
// console.log({ ..."abcd" });
// console.log({ ...["first", "second", "third"] });

// const objProb1 = {
//   name: "John",
//   age: 30,
//   city: "new york",
// };

// const { name, ...restObj } = objProb1;
// console.log(name);
// console.log(restObj);
// let { name, age } = objProb1;
// console.log(name, age);

// const objProb2 = {
//   first: "John",
//   last: "Doe",
// };

// let { first: firstName, last: lastName } = objProb2;
// console.log(firstName, lastName);

// const objProb3 = { person: { name: "Alice", age: 25 } };

// const {
//   person: { name, age },
// } = objProb3;
// console.log(name, age);

// const objProb4 = {
//   prop1: "val1",
//   prop2: "val2",
//   prop3: "val3",
//   prop4: "val4",
// };

// const { prop1, prop2, ...restProp } = objProb4;
// console.log(prop1);
// console.log(prop2);
// console.log(restProp);

// const arrObj = [
//   { namee: "John", age: 30 },
//   { namee: "Jacob", age: 20 },
//   { namee: "Josh", age: 40 },
//   { namee: "Johnny", age: 50 },
// ];

// for (obj of arrObj) {
//   let { namee, age } = obj;
//   console.log(namee, age);
// }

//Write a function that takes two numbers as parameters and returns their sum
// const sumTwo = (num1, num2) => num1 + num2;
// console.log(sumTwo(3, undefined));

//°F = °C × (9/5) + 32.
// const fahrenheit = (cel) => (cel * 9) / 5 + 32;
// console.log(fahrenheit(-273.15));

//Write a function that takes an array of numbers as
// input and returns the maximum value in the array.

// const max = (arr) => {
//   let max = 0;
//   for (val of arr) {
//     if (val > max) max = val;
//   }
//   return max;
// };

// console.log(max([2, 6, 1, 10, 10]));

// Create a function that takes a positive integer
// as input and returns true if it is a prime number, or false otherwise.

// const isPrime = (num) => {
//   if (num === 1) return "1!";
//   else if (num === 2) return true;
//   else {
//     for (i = 2; i <= num / 2; i++) {
//       if (num % i === 0) return false;
//     }
//   }
//   return true;
// };

// console.log(isPrime(51));

// Write a function that takes a string as input and
// returns the string in reverse order.

// const rev = (str) => {
//   let revStr = "";
//   for (let i = str.length - 1; i > -1; i--) {
//     revStr += str[i];
//   }
//   return revStr;
// };

// console.log(rev("abcd"));

// let text = "Apple, Banana, Kiwi, Banana";
// let newText = text.replace("Banana", "Fig");
// console.log(newText);
// console.log(text);

// let newTextTwo = text.replace(/Banana/g, "Fig");
// console.log(newTextTwo);

// let newTextThree = text.replaceAll("Banana", "Fig");
// console.log(newTextThree);

// let text1 = "Hey rOh";
// let text2 = text1.toUpperCase();
// console.log(text2);

// let text1 = "Hey";
// let text2 = "hottie";

// let text3 = text1.concat(" ", text2, "!");
// console.log(text3);

// let text = "5";
// let padded = text.padStart(4, "0");
// console.log(padded);

// console.log(finalText[6]);
// console.log(finalText.charAt(6));
// finalText[0] = "A";
// console.log(finalText);
// let finalText = "Rohini, Roshni, Ragini";
// let textComma = finalText.split(",");
// console.log(textComma);
// let textNone = finalText.split();
// console.log(textNone);
// let textEmpty = finalText.split("");
// console.log(textEmpty);

// function sumReducer(arr) {
//   const sum = arr.reduce((acc, curr) => acc + curr, 0);
//   return sum;
// }
// console.log(sumReducer([1, 2, 3, 5]));

// function sumReducer(arr) {
//   const sum = arr.reduce((acc, curr) => acc * curr, 1);
//   return sum;
// }

// console.log(sumReducer([]));

// function maxReducer(arr) {
//   let max = arr.reduce((acc, curr) => (acc > curr ? acc : curr));
//   return max;
// }

// console.log(maxReducer([1, 2, 1, 2, 5]));

// function concatenateStrings(arr) {
//   let concatenatedStr = arr.reduce((acc, curr) => acc + curr, "");
//   return concatenatedStr;
// }

// console.log(concatenateStrings(["r", "o", "h", "i"]));

// function countReducer(arr, item) {
//   let itemsArr = arr.reduce((acc, curr) => {
//     if (curr === item) acc.push(curr);
//     return acc;
//   }, []);
//   return itemsArr.length;
// }

// console.log(countReducer([1, 5, 2, 9, 2, 8, 2], 2));

// function flatterReducer(arr) {
//   let flat = arr.reduce((acc, curr) => {
//     return acc.concat(curr);
//   }, []);
//   return flat;
// }

// console.log(
//   flatterReducer([
//     [1, 2],
//     [3, 4],
//     [7, 9],
//   ])
// );

//Given an array of numbers, find the average of all elements in the array.

// function avgArrayReducer(arr) {
//   const sum = arr.reduce((acc, curr) => acc + curr, 0);
//   return sum / arr.length;
// }

// console.log(avgArrayReducer([1, 2, 3, 6]));

// Given an array, create a new array with only unique elements (remove duplicates).
// function uniqueReducer(arr) {
//   const unique = arr.reduce((acc, curr) => {
//     if (!acc.includes(curr)) {
//       acc.push(curr);
//     }
//     return acc;
//   }, []);
//   return unique;
// }

// console.log(uniqueReducer([1, 2, 3, 4, 6, 1, 2]));

// Sort an array of strings based on the length of the strings, in ascending order.

// function stringsSort(arr) {
//   arr.sort((a, b) => a.length - b.length);
//   return arr;
// }

// console.log(stringsSort(["rohini", "bhar", "Kanis"]));

// Sort an array of numbers in such a way that all
// the even numbers come before the odd numbers,
// and both even and odd numbers are in ascending order

// function sortOdd(arr) {
//   arr.sort((a, b) => {
//     // If both numbers are even or both are odd, sort them normally in ascending order
//     if ((a % 2 === 0 && b % 2 === 0) || (a % 2 !== 0 && b % 2 !== 0)) {
//       return a - b;
//     }

//     // If a is even and b is odd, a comes first
//     if (a % 2 === 0 && b % 2 !== 0) {
//       return -1;
//     }

//     // If a is odd and b is even, b comes first
//     if (a % 2 !== 0 && b % 2 === 0) {
//       return 1;
//     }
//   });
//   return arr;
// }

// const names = ["Rohini", "Rohiy", "roshni", "Arijit"];
// names.sort((a, b) => {
//   let nameA = a.toUpperCase();
//   let nameB = b.toUpperCase();
//   return nameA.localeCompare(nameB);
// });

// console.log(names);

// console.log(sortOdd([1, 4, 9, 5, 10, 23, 12]));

// Given an array of objects representing students with their names and scores,
// sort the students in descending order based on their scores

// const students = [
//   { name: "rohini", score: 100 },
//   { name: "roshni", score: 90 },
//   { name: "ragini", score: 120 },
// ];

// students.sort((a, b) => b.score - a.score);
// console.log(students);

// const arr = [0, 1, 5, 0, 9, 2, 0, 5, 0];
// arr.sort((a, b) => {
//   if (a === 0 && b !== 0) return 1;
//   else if (a !== 0 && b === 0) return -1;
//   else if (a !== 0 && b !== 0) return a - b;
// });

// console.log(arr);
// ["5","9","1200","400","3000"] - [[53,57,49,52,51]] - [49,51,52,53,57] - ["1200","3000","400","5","9"]

// const trying = [5, 9, 1200, 400, 3000];
// trying.sort((a, b) => a - b);
// console.log(trying);

// const arr = ["10", "2", "8", "1", "10"];
// arr.sort((a, b) => {
//   if (parseInt(a) > parseInt(b)) return 1;
//   else if (parseInt(a) < parseInt(b)) return -1;
//   return 0;
// });
// console.log(arr);

// const nameObj = ["Johnny Sins", "Rohini Bharti", "Rohini Bhatia", "John Doe"];
// nameObj.sort((a, b) => {
//   if (a.split(" ")[1] == b.split(" ")[1]) {
//     return a.split(" ")[1].localeCompare(b.split(" ")[1]);
//   } else if (a.split(" ")[1] > b.split(" ")[1]) return 1;
//   else return -1;
// });

// console.log(nameObj);

// const names = [
//   "John Doe",
//   "Alice Smith",
//   "Bob Johnson",
//   "Eve Adams",
//   "David Lee",
// ];

// // Custom comparator function to sort names by last name in alphabetical order
// names.sort((a, b) => {
//   // Extract the last names from the full names
//   const lastNameA = a.split(" ")[1];
//   const lastNameB = b.split(" ")[1];

//   // Compare the last names alphabetically
//   return lastNameA.localeCompare(lastNameB);
// });

// console.log(names);
// // Output: ["Eve Adams", "Bob Johnson", "David Lee", "Alice Smith", "John Doe"]

// const myArray = ["item1", "item2", "item3"];
// myArray.splice(1, 2, "inserted item");
// console.log(myArray);

// const duplicatesArr = [1, 3, 5, 1, 2, 3];
// const unique = [];
// for (let a of duplicatesArr) {
//   if (unique.includes(a)) duplicatesArr.splice(duplicatesArr.indexOf(a), 1);
//   else unique.push(a);
// }

// console.log(duplicatesArr);

// Given an array, use splice() to extract the middle elements of the array
// (if the length is odd, return the middle element; if even, return the two middle elements).

// const midArray = [1, 3, 5, 2, 6, 7, 9];
// const extracted =
//   midArray.length % 2 === 0
//     ? midArray.splice(midArray.length / 2 - 1, 2)
//     : midArray.splice(Math.floor(midArray.length / 2), 1);

// console.log(extracted);

// Given an array and two indices,
// use splice() to swap the elements at the specified indices.

// function swapSplice(arr, i1, i2) {
//   let deletedI1 = arr.splice(i1, 1, arr[i2]);
//   let deletedI2 = arr.splice(i2, 1, ...deletedI1);
//   return arr;
// }

// console.log(swapSplice([1, 2, 3, 4, 5], 1, 3));

// const myArr = [1, 2, 3, 45, 69];
// const index = 3;
// myArr.splice(index, 0, 6);
// console.log(myArr);

// Given an array and a positive integer k, use splice()
// to rotate the array k positions to the right.
// For example, if k = 3 and the array is [1, 2, 3, 4, 5],
//  the resulting array should be [3, 4, 5, 1, 2].

// function rotateSplice(arr, pos) {
//   for (i = 0; i < pos; i++) {
//     let last = arr.splice(arr.length - 1, 1);
//     arr.splice(0, 0, ...last);
//   }
//   return arr;
// }
// console.log(rotateSplice([1, 2, 3, 4, 5], 4));

// const users = [
//   {
//     userId: 0,
//     userName: "Rohini",
//   },
//   {
//     userId: 1,
//     userName: "Roshni",
//   },
//   {
//     userId: 5,
//     userName: "Ramni",
//   },
// ];
// let user = users.find((user) => user.userId === 1);
// console.log(user);

// let userIndex = users.findIndex((user) => user.userId === 1);
// console.log(userIndex);

// const nestedArr = [[1, 2], [3, 4, 5], [6]];
// const flat = nestedArr.reduce((acc, curr) => {
//   acc.push(...curr);
//   return acc;
// }, []);

// console.log(flat);

// Subset Check: Write a function to check if one set is a subset of another set.

// function subsetCheck(set1, set2) {
//   return [...set1].every((ele) => set2.has(ele));
// }
// const set1 = new Set([1, 2, 3]);
// const set2 = new Set([1, 3, 8, 2, 9]);
// console.log(subsetCheck(set1, set2));

// function supersetCheck(set1, set2) {
//   return [...set2].every((ele) => set1.has(ele));
// }
// // const set3 = new Set([1, 2, 3]);
// // const set4 = new Set([3, 2,1]);
// console.log(supersetCheck(set1, set2));

//symmetric difference

// const set1 = new Set([1, 2, 3, 4]);
// const set2 = new Set([1, 4, 7]);

// function intersection(setA, setB) {
//   return new Set([...setA].filter((ele) => setB.has(ele)));
// }

// const sym = [...set1]
//   .filter((ele) => !intersection(set1, set2).has(ele))
//   .concat([...set2].filter((ele) => !intersection(set1, set2).has(ele)));
// console.log(sym);

// const setstring = new Set([1, 4, 1, 8, 3, 4]);
// for (let str of setstring) {
//   console.log(str);
// }

// setstring.forEach((val) => console.log(val));
// console.log(setstring);
// console.log(setstring.size);
// console.log(setstring.has(8));
// console.log(setstring);
// setstring.add(99);
// setstring.delete(1);
// console.log(setstring);

// const myMap = new Map();
// const age = "age";
// myMap.set("fName", "Rohini");
// myMap.set("lName", "Bharti");
// myMap.set(age, 25);
// console.log(myMap);
// console.log(myMap.get(age));
// for (let key of myMap.keys()) {
//   console.log(key);
// }
// console.log([...myMap.keys()]);
// console.log([...myMap.values()]);
// console.log([...myMap.entries()]);
// myMap.forEach((key, val) => console.log(`${key} - ${val}`));

// for (let val of myMap.values()) {
//   console.log(val);
// }

// console.log(`name is - ${myMap.get("fName")} ${myMap.get("lName")}`);

// for ([key, val] of myMap.entries()) {
//   console.log(key, val);
// }

// for (let [key, val] of myMap) {
//   console.log(key, val);
// }

// function sortString(str) {
//   return str.split("").sort().join("");
// }

// function findAnagrams(words) {
//   const anagramGroups = new Map();

//   for (const word of words) {
//     const sortedWord = sortString(word);
//     if (anagramGroups.has(sortedWord)) {
//       anagramGroups.get(sortedWord).push(word);
//     } else {
//       anagramGroups.set(sortedWord, [word]);
//     }
//   }

//   const result = [];
//   for (const group of anagramGroups.values()) {
//     if (group.length > 1) {
//       result.push(group);
//     }
//   }

//   return result;
// }

// // Example usage:
// const wordsList = [
//   "listen",
//   "silent",
//   "enlist",
//   "hello",
//   "world",
//   "act",
//   "cat",
// ];
// const anagrams = findAnagrams(wordsList);
// console.log(anagrams);

// const orders = [
//   ["product", "Lip Gloss"],
//   ["Brand", "Rom&nd"],
//   ["Color", "Fig fig"],
//   ["OId", 1234],
// // ];
// const oMap = new Map("orders");
// console.log(oMap);

// const orderObj = {
//   product: "Lip gloss",
//   Brand: "Rom&nd",
//   Color: "Fig fig",
//   OID: 1234,
// };

// const orderMap = new Map(Object.entries(orderObj));
// console.log(orderMap);

//Count the occurrences of each element in an array using a Map.
// const arr = [2, 4, 5, 2, 6, 4, 5, 8, 2];
// const arrMap = new Map();
// for (let num of arr) {
//   if (arrMap.has(num)) {
//     arrMap.set(num, arrMap.get(num) + 1);
//   } else {
//     arrMap.set(num, 1);
//   }
// }
// console.log(arrMap);

// // Group an array of words by their first letter using a Map
// const arr = [
//   "rohini",
//   "ragini",
//   "nikita",
//   "naagin",
//   "shraddha",
//   "shreya",
//   "anushka",
// ];
// const arrMap = new Map();
// for (let word of arr) {
//   if (arrMap.has(word[0])) {
//     arrMap.get(word[0]).push(word);
//   } else {
//     arrMap.set(word[0], [word]);
//   }
// }

// arrMap.forEach((key, val) => {
//   console.log(key, val);
// });

// Remove duplicate elements from an array using a Map.
// const arr = [1, 3, 6, 2, 6, 3, 7, 3];
// const mapUnique = new Map();
// arr.forEach((num) => {
//   if (!mapUnique.has(num)) mapUnique.set(num, 1);
// });
// console.log([...mapUnique.keys()]);

//compare two strings are anagram
// let str1 = "listen";
// let str2 = "silent";

// function createMap(str) {
//   const strMap = new Map();
//   for (let i of str) {
//     if (strMap.has(i)) {
//       strMap.set(i, strMap.get(i) + 1);
//     } else {
//       strMap.set(i, 1);
//     }
//   }
//   return strMap;
// }

// console.log([...createMap(str1)]);
// console.log([...createMap(str2)]);

// console.log(createMap(str1) == createMap(str2));
//   console.log(true);
// }

// const user1 = {
//   userName: "Rohini",
//   userId: 123,
//   age: 25,
//   about: function (job) {
//     console.log(
//       `user is ${this.userName} and ${this.age} years old and works as a ${job}`
//     );
//   },
// };

const user2 = {
  userName: "Roshni",
  userId: 125,
  age: 27,
  about: () => {
    console.log(this.userName);
  },
};
// var userName = "global";
// user2.about.call(user2);
// user1.about.call(user2, "dev");
// user1.about.apply(user2, ["software tester"]);
// const laterFunction = user1.about.bind(user2, ["SAP tester"]);
// laterFunction();

// user1.about.call(user1);
// user1.about = function () {
//   console.log("changed about");
// };
// user1.about.call(user1);

// user1About();

// function foo() {
//   console.log(this.a);
// }

// const obj = { a: 2, foo: foo };

// let functionLater = obj.foo;
// functionLater();

let createFunctions = {
  about: function () {
    return `${this.firstName} is  ${this.age} years old`;
  },

  is18: function () {
    return this.age >= 18;
  },
};
function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(createFunctions);
  user.firstName = firstName;
  user.lastName = lastName;
  user.age = age;
  user.email = email;
  user.address = address;
  // user.about = createFunctions.about;
  // user.is18 = createFunctions.is18;

  return user;
}

let userOne = createUser("Rohini", "Bharti", "bkbd@gmail.com", 18, "hsvh");
// console.log(userOne.__proto__);
let userTwo = createUser("Rohit", "Ananad", "bkbdjvj@gmail.com", 28, "hsvhhk");
// console.log(userTwo);
// console.log(userOne.is18());
// console.log(userTwo.about());

const objParent = {
  brand: "Dior",
  product: "lip oil",
  price: 3000,
};

const objChild = Object.create(objParent);
// objChild.brand = "Clarins";
// console.log(objChild);
// console.log(objChild.price);

// objParent.price = 4000;
// console.log(objChild.price);

// let fruit = prompt("Which fruit to buy?", "apple");

// let bag = {
//   [fruit]: 5, // the name of the property is taken from the variable fruit
// };

// console.log(bag[fruit]);
// console.log(bag.apple);
// console.log(bag.appleeee);

// const user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;
// console.log(user);

function isEmptyObj(obj) {
  let len = 0;
  for (let key in obj) {
    len++;
  }
  return !len;
}
// const user = {};
// user.name = "John";

// console.log(isEmptyObj(user));

let salaries = {
  // John: 100,
  // Ann: 160,
  // Pete: 130,
};

let sum = 0;
for (let person in salaries) {
  // if (!isEmptyObj(salaries)) sum += salaries[person];
  sum += salaries[person];
}
// console.log(sum);

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") obj[key] *= 2;
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
multiplyNumeric(menu);
// console.log(menu);
var myObject = { key: "value" };
console.log(myObject.toString());

var customObject = {
  key: "value",
  toString: function () {
    return "Custom Object: " + this.key;
  },
};

console.log(customObject.toString()); // "Custom Object: value"

function myFunction(a, b) {
  return a + b;
}

var functionString = myFunction.toString();

console.log(functionString);

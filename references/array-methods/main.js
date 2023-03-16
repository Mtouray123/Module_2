// ********MAP********
//#1

// const array1 = [1, 4, 9, 16];
// const map1 = array1.map(x => x * 2);
// console.log(map1)

//#2
// const numbers = [1, 4, 9];
// const roots = numbers.map((num) => Math.sqrt(num));
// console.log(roots)

//#3
// const kvArray = [
//     { key: 1, value: 10 },
//     { key: 2, value: 20 },
//     { key: 3, value: 30 },
//   ];
//   const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));
//   console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
//   console.log(kvArray);

//#4





// ********FIND********
//#1 
// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find(element => element > 10);

// console.log(found);

//#2
// const inventory = [
//     { name: "apples", quantity: 2 },
//     { name: "bananas", quantity: 0 },
//     { name: "cherries", quantity: 5 },
//   ];
  
//   function isCherries(fruit) {
//     return fruit.name === "cherries";
//   }
  
//   console.log(inventory.find(isCherries));

//#3
// function isPrime(element, index, array) {
//     let start = 2;
//     while (start <= Math.sqrt(element)) {
//       if (element % start++ < 1) {
//         return false;
//       }
//     }
//     return element > 1;
//   }
//   console.log([4, 6, 8, 12].find(isPrime)); 
//   console.log([4, 5, 8, 12].find(isPrime)); 





// ********FINDINDEX********
//#1
// const array1 = [5, 12, 8, 130, 44];
// const isLargeNumber = (element) => element > 13;
// console.log(array1.findIndex(isLargeNumber));

//#2
// function isPrime(element) {
//     if (element % 2 === 0 || element < 2) {
//       return false;
//     }
//     for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
//       if (element % factor === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
  
//   console.log([4, 6, 8, 9, 12].findIndex(isPrime)); 
//   console.log([4, 6, 7, 9, 12].findIndex(isPrime)); 

//#3
// const arrayLike = {
//     length: 3,
//     0: 2,
//     1: 7.3,
//     2: 4,
//   };
//   console.log(Array.prototype.findIndex.call(arrayLike, (x) => !Number.isInteger(x)) );

// ********FILTER********
//#1
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length > 6);
// console.log(result);

//#2
// function isBigEnough(value) {
//     return value >= 10;
//   }
  
//   const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// console.log(filtered);

//#3
// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// function isPrime(num) {
//   for (let i = 2; num > i; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }

// console.log(array.filter(isPrime)); 

//#4



// ********CONCAT********




// ********SORT********




// ********REDUCE********




// ********JOIN********




// ********SLICE********




// ********SPLICE********

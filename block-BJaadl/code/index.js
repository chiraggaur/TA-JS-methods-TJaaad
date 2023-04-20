let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
      // function findLongestWord(word){
      //    word.filter((a,b) => {
      //       return a.length - b.length;
      //    });
      // } 
      // let out = findLongestWord(words);
// - Convert the above array "words" into an array of length of word instead of word.
    //  function conv(word){
    //   return word.length;
    //  }
    //  let out = words.map(conv);
    //  console.log(out);
// - Create a new array that only contains word with atleast one vowel.
 
    //   function vowel(val) {
    //     return val.includes('a') || 
    //            val.includes('e') || 
    //            val.includes('i') ||
    //             val.includes('o') || 
    //             val.includes('u');
               
    //   }
    //  let vowl = words.filter(vowel);

// - Find the index of the word "rhythm"
    // console.log(words.indexOf("rhythm"));

// - Create a new array that contians words not starting with vowel.
    //  function vowel(val) {
    //     return val[0]  != ('a') &&
    //             val[0] != ('e') &&
    //             val[0]!= ('i') &&
    //             val[0]!= ('o') &&
    //             val[0] != ('u');
               
    //   }
    //  let vowl = words.filter(vowel);
// - Create a new array that contianse words not ending with vowel
// function vowel(val) {
//   return val[val.length - 1]  != ('a') &&
//         val[val.length - 1] != ('e') &&
//         val[val.length - 1]!= ('i') &&
//         val[val.length - 1]!= ('o') &&
//         val[val.length - 1] != ('u');
         
// }
// let vowl = words.filter(vowel);

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
    //   function sumAll(acc,iv){
    //       return acc + iv;
    //   }
    //  let out = numbers.reduce(sumAll);
    //  console.log(out);

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
  //  function multiple(num){
  //     return num * 3;
  //  }
  //     let out = numbers.map(multiple);
  //     console.log(out);
// - Create a new array that contains only even numbers
// function even(num){
//   return num % 2 === 0;

// }
// let out = numbers.filter(even);
// console.log(out);
// - Create  a new array that contains only odd numbers.
  // function odd(num){
  //       return num % 2 !== 0;
     
  //  }
  //     let out = numbers.filter(odd);
  //     console.log(out);
// - Create a new array that should have true for even number and false for odd numbers.
  // function even(num){
  //        return num % 2 === 0;
  //  }
  //     let out = numbers.map(even);
  //     console.log(out);
// - Sort the above number in assending order.
    //  function compare(a, b){
    //    return a - b;
    //  }
    //  console.log(numbers.sort(compare));
// - Does sort mutate the original array?
     // yes it mutates the original array 

// - Find the sum of the numbers in the array.
    //   function sumAll(acc,iv){
    //       return acc + iv;
    //   }
    //  let out = numbers.reduce(sumAll);
    //  console.log(out);
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
    //    function sumAll(acc,iv){
    //       return (acc + iv / 2);
    //   } 
    //  let out = numbers.reduce(sumAll);
    //  console.log(out);
let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
// function averageLength(str){
    
//      return str.length;
// }
// let out = strings.map(averageLength);
// let total = out.reduce((acc,iv)=> {
//       return (acc + iv);
//  });
//  console.log(total/out.length);
// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
    //  console.log(numbers.indexOf(101));
// - Find the last index of `9` in numbers
    // console.log(numbers.lastIndexOf(9));
// - Convert value of strings array into a sentance like "This is a collection of words"
  //  console.log(strings.join(' '));
// - Add two new words in the strings array "called" and "sentance"
    let newarry = [...strings];
    newarry.push("called","sentance");
    // console.log(newarry);
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
  //  console.log(newarry.join(' '));
// - Remove the first word in the array (strings)
  //  newarry.shift(0);
// - Find all the words that contain 'is' use string method 'includes'
    // function duplicate(str){
    //   if(str.includes('is')){
    //     console.log(str);
    //   }
    // }
    // newarry.forEach(duplicate);
// - Find all the words that contain 'is' use string method 'indexOf'
    // doubt
     function duplicate(str){
      if(str.indexOf(is) == 1){
        console.log(str);
      }
    }
    // newarry.forEach(duplicate);
// - Check if all the numbers in numbers array are divisible by three use array method (every)
    // numbers.forEach((div) => {
    //     if(div % 3 === 0){
    //        console.log(div);
    //     }
    // })
// -  Sort Array from smallest to largest
   //doubt
  // console.log(numbers.sort());
// - Remove the last word in strings
    // let strDupicate = [...strings];
    //  console.log(strDupicate.pop());
// - Find largest number in numbers
    // doubt
    //  console.log(numbers.)
// - Find longest string in strings
      //doubt
// - Find all the even numbers
    // numbers.forEach((even) => {
    //     if(even % 2 === 0){
    //        console.log(even);
    //     }
    //   })
// - Find all the odd numbers
// numbers.forEach((odd) => {
//   if(odd % 2 !== 0){
//      console.log(odd);
//   }
// })
// - Place a new word at the start of the array use (unshift)
    //  let strDupicate = [...strings];
    //  strDupicate.unshift("new word");
// - Make a subset of numbers array [18,9,7,11]
    //  let numDuplcate = [...numbers];
    //  console.log(numDuplcate.slice(3,7));
// - Make a subset of strings array ['a','collection']
    //  let strDupicate = [...strings];
    //  console.log(strDupicate.slice(2,4));
// - Replace 12 & 18 with 1221 and 1881
    //  let numDuplcate = [...numbers];
    //     numDuplcate.splice(1,1,1221);
    //     numDuplcate.splice(3,1,1881);
    //     console.log(numDuplcate);

// - Replace words in strings array with the length of the word
    //doubt
// - Find the sum of the length of words using above question
    //doubt
// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
    //  for (let i = 0; i < customers.length; i++ ){
    //   if(customers[i].firstname.startsWith('J')){
    //     console.log(customers[i].firstname);
    //   }
    //  }

// - Create new array with only first name
    //  let newArray = [];
    //  for (let i = 0; i < customers.length; i++ ){
    //       newArray.push(customers[i].firstname);
          
    //  }
    //  console.log(newArray);
// - Create new array with all the full names (ex: "Joe Blogs")
    //  let newArray = [];
    //  for (let i = 0; i < customers.length; i++ ){
    //        newArray.push(customers[i].firstname + ' '+ customers[i].lastname);
         
          
    //  }
    //  console.log(newArray);
// - Sort the array created above alphabetically
    //  console.log(newArray.sort());
// - Create a new array that contains only user who has at least one vowel in the firstname.
//      let vowel = ['a','e','i','o','u'];
//      let newArray = [];
//      for (let i = 0; i < customers.length; i++ ){
//         if(customers[i].firstname.contains(vowel[i])){
//           newArray.push(customers[i].firstname + ' '+ customers[i].lastname);
//         }
       
// }
//   console.log(newArray);
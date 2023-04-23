let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// NOTE: Use reduce method whereever you can to solve this exercise:

// Find the average grade
    let personDuplicate = [...persons];
    //  let average = personDuplicate.map((grades) => grades.grade).reduce((acc,iv) => acc + iv) / personDuplicate.length ;
    //  console.log(average); 

// Find the average grade of male
    // let  maleFilter = personDuplicate.filter((grades) => grades.grade && grades.sex === 'M');
    // let maleAverage =  maleFilter.map((grades) => grades.grade).reduce((acc,iv) => acc + iv) / maleFilter.length;
    //  console.log(maleAverage);

// Find the average grade of female
    // let femaleFilter = personDuplicate.filter((grades) => grades.grade && grades.sex === 'F');
    // let femaleAverage =  femaleFilter.map((grades) => grades.grade).reduce((acc,iv) => acc + iv) / femaleFilter.length;
    //  console.log(femaleAverage);

// Find the highest grade
    // let heighestGrade = personDuplicate.map((grades) => grades.grade).sort((a,b) => a-b).pop();
    // console.log(heighestGrade);

// Find the highest grade in male
    // let highestMaleGrade = maleFilter.map((grades) => grades.grade).sort((a,b) => a - b).pop();
    // console.log(highestMaleGrade);

// Find the highest grade in female
    // let highestFemaleGrade = femaleFilter.map((grades) => grades.grade).sort((a,b) => a - b).pop();
    // console.log(highestFemaleGrade);

// Find the highest grade for people whose name starts with 'J' or 'P'
    // let GradeWithJP = personDuplicate.filter((grades) => grades.grade && grades.name[0] ==='J' || grades.grade && grades.name[0] ==='P');
    // let heighestGradeWithJP = GradeWithJP.map((grades) => grades.grade).sort((a,b) => a - b).pop();
    // console.log(heighestGradeWithJP);

const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig',
];

/* 

Use the fruitBasket array to create an object where key will be the fruit and value will be the number of times
that fruit has appeared in the array. Store it in new variable fruitsObj

Output: 
{banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
*/
let fruitsObj = {};
  let newobj = fruitBasket.filter((x) => { fruitsObj[x] = (fruitsObj[x] || 0) + 1; });
  //  console.log(fruitsObj);


/* 



Use the fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times
that fruit appeared. Use the variable defined above (fruitsObj). To get all the keys of an array you can use Object.keys()

Output: 

[['banana', 2], ['cherry', 3], ['orange', 3], ['apple', 2], ['fig', 1]]
*/
//doubt 
 let fruitsArray = [];
   console.log(fruitsArray.push(newobj.filter((x) => { fruitsObj[x] = (fruitsObj[x] || 0) + 1; })));
    
    
const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

// Using reduce flat data array

// let flatData = data.reduce((acc,iv) =>  acc +','+ iv).split(',');
// console.log(flatData);
 
const dataTwo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11], 12],
];

// Using reduce flat dataTwo array
// let flatData = dataTwo.reduce((acc,iv) =>  acc +','+ iv).split(',');
// console.log(flatData);
/*

Create these functions which accepts a number value and returns a number value:
  - `increment` adds one to the input value
  - `double` doubles the input value
  - `decrement` decrement 1 from the value 
  - `triple` triples the input 
  - `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)
*/

function increment(num){
    return num + 1;
}
function decrement(num){
  return num + 2;
}
function double(num){
  return num * 2;
}
function triple(num){
  return num * 3;
}
function half(num){
  return Math.round((num/ 2));
}
let pipeline = [
  increment,
  double,
  decrement,
  decrement,
  double,
  triple,
  half,
  increment,
];

/*
Using the pipeline variable that contains the collection of functions, taking the initial value 3 find the output.

NOTE: Initial value will be passed to first function the output of that function will be the input to next function.

EXAMPLE:
  initialValue - 3
  increment(3) - return 4
  double(4) - return 8
  decrement(8) - return 7

  ...
*/
//  let out = pipeline[0](3);
//  let outTwice = pipeline[1](out);
//  let outThrice = pipeline[5](outTwice);

let pipeline2 = [
  increment,
  half,
  double,
  decrement,
  decrement,
  triple,
  double,
  triple,
  half,
  increment,
  triple,
];

// Find the output using pipeline2 the initial value if 8
//   let out = pipeline2[0](8);
//  let outTwice = pipeline2[2](out);
//  let outThrice = pipeline2[5](outTwice);
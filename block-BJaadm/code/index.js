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

// Create an array peopleName and store value of name key from persons array
let peopleName = persons.map((people) => people.name);
 
// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map((people) => people.grade);
   console.log(peopleGrade);
// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.map((people) => people.sex);
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
// console.log(peopleName.filter((names) => names.startsWith('J') || names.startsWith('P')));

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
// console.log(peopleName.filter((names) => names.startsWith('A') || names.startsWith('C')));

// Log all the filtered male ('M') in persons array
//  console.log([...persons].filter((males) => males.sex === 'M'));

// Log all the filtered female ('F') in persons array
// console.log([...persons].filter((males) => males.sex === 'F'));

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
//  console.log([...persons].filter((females) => females.sex === 'F' && females.name[0] === 'C' || females.name[0] === 'J'));

// Log all the even numbers from peopleGrade array
//  console.log([...peopleGrade].filter((grades) => grades % 2 === 0));

// Find the first name that starts with 'J' in persons array and log the object 
    // let nameStartWithJ = persons.find((names) => names.name[0] === 'J');
    // console.log(nameStartWithJ);

// Find the first name that starts with 'P' in persons array and log the object
    //   let nameStartWithP = persons.find((names) => names.name[0] === 'P');
    // console.log(nameStartWithP);

// Find the first name that starts with 'J', grade is greater than 10 and is a female
    // let nameStartWithJ = persons.find((names) => names.name[0] === 'J' && names.grade > 10 && names.sex === 'F');
    // console.log(nameStartWithJ);

// Filter all the female from persons array and store in femalePersons array
    let femalePersons = persons.filter((females) => females.sex === 'F' );
    // console.log(femalePersons);

// Filter all the male from persons array and store in malePersons array
    let malePersons = persons.filter((males) => males.sex === 'M' );
    // console.log(malePersons);
    
// Find the sum of all grades and store in gradeTotal
  //  let gradeTotal = persons.map((grades) => grades.grade).reduce((acc,iv) => acc + iv );
  //    console.log(gradeTotal);

// Find the average grade
    // let averageGrade = (gradeTotal/persons.length);
    // console.log(averageGrade);
// Find the average grade of male
    // let totalMalegrade = malePersons.map((mg) => mg.grade).reduce((acc,iv) => acc + iv );
    // console.log(totalMalegrade/ malePersons.length);
// Find the average grade of female
    // let totalfemalegrade = femalePersons.map((mg) => mg.grade).reduce((acc,iv) => acc + iv );
    // console.log(totalfemalegrade/ femalePersons.length);
// Find the highest grade
  // let highestGrade = console.log(persons.map((grades) => grades.grade).sort((a,b) => a - b).pop());
// Find the highest grade in male
//  let highestGradeMale = console.log(malePersons.map((mg) => mg.grade).sort((a,b) => a - b).pop());
// Find the highest grade in female
// let highestGradeFemale = console.log(femalePersons.map((mg) => mg.grade).sort((a,b) => a - b).pop());

// Find the highest grade for people whose name starts with 'J' or 'P'
  // let highestGrade = persons.filter((num) => num.grade & num.name[0] === 'J' || num.name[0] === 'P').map((ng) => ng.grade).pop();
  // console.log(highestGrade);

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
  //  console.log(peopleGrade.sort((a, b) => a - b)); // yes

// Sort the peopleGrade in descending order
  //  console.log(peopleGrade.sort((a, b) => b - a)); // yes

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
  // console.log([...peopleGrade].sort((a, b) => b - a)); // yes

// Sort the array peopelName in ascending `ABCD..Za....z`
  //  console.log(peopleName.sort());
 
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
    // console.log([...peopleName].sort());
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
// let peopleName =[];
//  function sex(name){
//   for( let i = 0; i < name.length; i++){
//     peopleName.push(name[i].name);
//     }
//   }

//   sex(persons);
//   console.log(peopleName);
 
// Create an array peopleGrade and store the value of grade key from persons array
  // let peopleGrade = [];
  // function grades(grade){
  //  for( let i = 0; i < grade.length; i++){
  //    peopleGrade.push(grade[i].grade);
  //    }
  //  }
 
  //  grades(persons);
  //  console.log(peopleGrade);
// Create an array peopleSex and store the value of sex key from persons array
// let peopleSex =[];
//  function sex(gender){
//   for( let i = 0; i < gender.length; i++){
//     peopleSex.push(gender[i].sex);
//     }
//   }

//   sex(persons);
//   console.log(peopleSex);
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
//  let peopleName =[];
//  function sex(name){
//   for( let i = 0; i < name.length; i++){
//     peopleName.push(name[i].name);
//     }
//   }

//   sex(persons);
//   console.log(peopleName.filter((nm) => {
//         return nm[0] == 'J' || nm[0] =='P';
//   }));
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
//     let peopleName =[];
//  function sex(name){
//   for( let i = 0; i < name.length; i++){
//     peopleName.push(name[i].name);
//     }
//   }

//   sex(persons);
//   console.log(peopleName.filter((nm) => {
//         return nm[0] == 'A' || nm[0] =='C';
//   }));
// Log all the filtered male ('M') in persons array
// let maleSex =[];
//  function sex(gender){
//   for( let i = 0; i < gender.length; i++){
//     maleSex.push(gender[i].sex);
//     }
//   }

//   sex(persons);
//   console.log(maleSex.filter((nm) => {
//         return nm == 'M';
//   }));
// Log all the filtered female ('F') in persons array
// let peopleSex =[];
//  function sex(gender){
//   for( let i = 0; i < gender.length; i++){
//     peopleSex.push(gender[i].sex);
//     }
//   }

//   sex(persons);
//   console.log(peopleSex.filter((nm) => {
//         return nm == 'F';
//   }));
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
    //  let personsCopy = [...persons]
    //  personsCopy.filter((cond)=>{
    //      for( let i = 0; i < cond.length; i++){
    //            if(cond[i].name[0] === 'C' || cond[i].name[0] === 'J'){
    //              console.log(cond.name);
    //            }
    //     }
          
    //  });
// Log all the even numbers from peopleGrade array
  //   let peopleGrade = [];
  // function grades(grade){
  //  for( let i = 0; i < grade.length; i++){
  //    peopleGrade.push(grade[i].grade);
  //    }
  //  }
 
  //  grades(persons);
  // console.log(peopleGrade.filter((even) => {
  //      return even % 2 == 0;
  //  }));
// Find the first name that starts with 'J' in persons array and log the object
  // doubt 

// Find the first name that starts with 'P' in persons array and log the object
  // doubt
// Find the first name that starts with 'J', grade is greater than 10 and is a female
  // doubt
// Filter all the female from persons array and store in femalePersons array
// let femalePersons = [];
// for(let i = 0; i < persons.length; i++){
//   if(persons[i].sex == 'F'){
//     femalePersons.push(persons[i]);
//   }
  
// }
// console.log(femalePersons);
// Filter all the male from persons array and store in malePersons array
    // let malePersons = [];
    // for(let i = 0; i < persons.length; i++){
    //   if(persons[i].sex == 'M'){
    //     malePersons.push(persons[i]);
    //   }
      
    // }
    // console.log(malePersons);
    
// Find the sum of all grades and store in gradeTotal
    // let gradeTotal = 0;
    //   for(let i = 0; i < persons.length; i++){
    //        gradeTotal += persons[i].grade;
    //   }
    //   console.log(gradeTotal);
// Find the average grade
    // let gradeTotal = 0;
    //   for(let i = 0; i < persons.length; i++){
    //     if(persons[i].sex == 'M'){
    //       gradeTotal += persons[i].grade;
    //     }
           
    //   }
    //   console.log(gradeTotal / persons.length);
// Find the average grade of male
    // let gradeTotal = 0;
    // let maleLength = malePersons.length;
    //   for(let i = 0; i < persons.length; i++){
    //     if(persons[i].sex == 'M'){
    //       gradeTotal += persons[i].grade;
    //     }
           
    //   }
    //   console.log(gradeTotal / maleLength);
// Find the average grade of female
    // let gradeTotal = 0;
    //   for(let i = 0; i < persons.length; i++){
    //     if(persons[i].sex == 'F'){
    //       gradeTotal += persons[i].grade;
    //     }
           
    //   }
    //   console.log(gradeTotal / persons.length);
// Find the highest grade
  //   let peopleGrade = [];
  // function grades(grade){
  //  for( let i = 0; i < grade.length; i++){
  //    peopleGrade.push(grade[i].grade);
  //    }
  //  }
 
  //  grades(persons);
  //  function compare (a, b){
  //   return a - b;
  //  }
  // console.log(peopleGrade.sort(compare).pop());
 
// Find the highest grade in male
  //   let gradeTotal = [];
  //     for(let i = 0; i < persons.length; i++){
  //       if(persons[i].sex == 'M'){
  //         gradeTotal.push(persons[i].grade);
  //       }
  //     }
  //  function compare (a, b){
  //   return a - b;
  //  }
  //     console.log(gradeTotal.sort(compare).pop());
// Find the highest grade in female
// let gradeTotal = [];
// for(let i = 0; i < persons.length; i++){
//   if(persons[i].sex == 'F'){
//     gradeTotal.push(persons[i].grade);
//   }
// }
// function compare (a, b){
// return a - b;
// }
// console.log(gradeTotal.sort(compare).pop());
// Find the highest grade for people whose name starts with 'J' or 'P'
// let gradeTotal = [];
// for(let i = 0; i < persons.length; i++){
//   if(persons[i].name[0] === 'J' || persons[i].name[0] === 'P' ){
//     gradeTotal.push(persons[i].grade);
//   }
// }
// function compare (a, b){
// return a - b;
// }
// console.log(gradeTotal.sort(compare).pop());
// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
  //     let peopleGrade = [];
  // function grades(grade){
  //  for( let i = 0; i < grade.length; i++){
  //    peopleGrade.push(grade[i].grade);
  //    }
  //  }
 
  //  grades(persons);
  //  function compare (a, b){
  //   return a - b;
  //  }
  // console.log(peopleGrade.sort(compare)); // yes value got changed
// Sort the peopleGrade in descending order
// let peopleGrade = [];
// function grades(grade){
//  for( let i = 0; i < grade.length; i++){
//    peopleGrade.push(grade[i].grade);
//    }
//  }

//  grades(persons);
//  function compare (a, b){
//   return b-a;
//  }
// console.log(peopleGrade.sort(compare)); // yes value got changed
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
// let peopleGrade = [];
// function grades(grade){
//  for( let i = 0; i < grade.length; i++){
//    peopleGrade.push(grade[i].grade);
//    }
//  }

//  grades(persons);
//  function compare (a, b){
//   return b-a;
//  }
// console.log(peopleGrade.sort(compare)); // yes value got changed
// Sort the array peopelName in ascending `ABCD..Za....z`
  function grades (grade){
  for( let i = 0; i < grade.length; i++){
        return [grade[i].name] ;
   }
 }

 let out = grades(persons);
 console.log(out.sort())
//  function compare (a, b){
//   return b-a;
//  }
 
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array

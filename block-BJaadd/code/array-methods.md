Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
   - Parameter: it specifies a string to separate each pair of adjecent element in array, if omitted it will insert (,)as separaotor and if ("") then it will join array elements  without space
   - Return: it will return all array elements join and if arr.length is xero then empty string is returned
   - Example:
   ``` js 
   let title = "Manohar is a best doctor of Noida".split(' ');
      title.join(' '); 
   let title = "Manohar is a best doctor of Noida".split(' ');
      title.join('');
   let title = "Manohar is a best doctor of Noida".split(' ');
      title.join();
   ```
  - `join` it will convert array into string and join them with passed seprator.
  - mutate the original array

3. `flat`
   - Parameter: it accepts dept as parameter which specified the level upto array should be flattened.
   - Return: it will return new array with all sub-array concatenated into it.
   -Example:
   ```js
   let number = [1,2,[4,5,[6,7,8,[9,10]]]];
   number.flat(2);
    let number = [1,2,[4,5,[6,7,8,[9,10]]]];
   number.flat(3);
    let number = [1,2,[4,5,[6,7,8,[9,10]]]];
   number.flat(5);
   ```
   -`flat` - flat will remove all the sub-array and merge into one with specified depth.
   - mutate the original array
4. `push`
  - Parameter: it accepts any datatype with multiple input value
   - Return: it will return new array length with last element added in to array.
   -Example:
   ```js
   let number = [1,2,[4,5,[6,7,8,[9,10]]]];
   number.flat(2);
    let number = [1,2,[4,5,[6,7,8,[9,10]]]];
   number.flat(3);
    let number = [1,2,[4,5,[6,7,8,[9,10]]]];
   number.flat(5);
   ```
   -`flat` - flat will remove all the sub-array and merge into one with specified depth.
   -mutate the original array

5. `indexOf`
  - Parameter: it accepts seacrh elemt to locate in array and fromIndex(starts from)
   - Return: it will return first index of element located inside the array.
   -Example:
   ```js
   let name = ["Manohar is a best doctor of is  Noida"];
     name.indexOf("is");
        let name = ["Manohar is a best doctor of is  Noida"];
     name.indexOf("is",10);
        let name = ["Manohar is a best doctor of is  Noida"];
     name.indexOf("is",4);
   ```
   - `indexOf` will give the first indexOf element present in array and also set from to select index to start from.

6. `lastIndexOf`
  - Parameter: it accepts seacrh elemt to locate in array and fromIndex(starts from)
   - Return: it will return first index of element located inside the array.
   -Example:
   ```js
   let name = ["Manohar is a best doctor of is  Noida"];
     name.lastIndexOf("is");
    let name = ["Manohar is a best doctor of is  Noida"];
     name.lastIndexOf("is",10);
    let name = ["Manohar is a best doctor of is  Noida"];
     name.lastIndexOf("is",4);
   ```
   - `indexOf` will give the first indexOf element present in array and also set from to select index to start from.
7. `includes`
  - Parameter: it accepts search element to locate in array and fromIndex(starts from)
   - Return: it will return true or false if array contains the search value.
   -Example:
   ```js
   let colors = ["red","green","orange","pink"];
   colors.includes("green"); //true
   let colors = ["red","green","orange","pink"];
   colors.includes("ora");  // false
   let colors = ["red","green","orange","pink"];
   colors.includes("gr");  // false
   ``` 
 - `includes ` it will check in array if the search value includes it 
 note: only full array element can be searched. otherwise it will return false

8. `reverse`
   - Parameter: with reverse() ot toReversed()
   - Return: it will return the revered order array as output
   -Example:
   ```js
   let colors = ["red","green","orange","pink"];
    colors.reverse(); // give reversed order
   let numbers = [1, 2, 3,4,5,6,7];
    numbers.reverse();
    let numbers = [1, 2, 3,];
    numbers.reverse();
   ```
 `reverse` - it will reverse the order of the array .

9. `every`
    - Parameter: accepts callback fn and optionally - element,index,array
   - Return: it will return true if callback return truthy value for each element otherwise false.
   -Example:
   ```js
    function checkColor(clr){
        return clr.length > 4 ;
    }
    let colors = ["red","green","orange","pink"];
    console.log(colors.every(checkColor));
    //////////////////////////////////////////////
    function checkColor(clr , element , i , arr){
      console.log(element,i,arr);
    return clr.length > 4 ;
    }
    let colors = ["red","green","orange","pink"];
    console.log(colors.every(checkColor));
   ```

10. `shift`
   - Parameter: shift()
   - Return: it will remove the first elemnt from array and return the removed element.
   -Example:
   ``` js
   let colors = ["red","green","orange","pink"];
    colors.shift();
   ```
  - it will mutate the original array 

11. `splice`
   - Parameter: indexstart , delete count ,to delete elements from start and in last the, items to add.
   - Return: it will return the array containing deleted elements.
   -Example:
   ``` js
   let colors = ["red","green","orange","pink"];
    colors.splice(1,0,"fuciapink");
       let colors = ["red","green","orange","pink"];
    colors.splice(1,-2,"fuciapink");
   ```
  - it will mutate the original array 
  note: delete count can only be positive morethan zero and negative otherwise nothing will remove.

12. `find`
   - Parameter: accepts callback fn and optionally - element,index,array
   - Return: it will return the first first elemnt in array that will satisfy the provided function condition.
   -Example:
   ```js
   function clicking(check){
      return check > 4;
   }
  let colors = [1,2,3,4,5,6,7];
    console.log(colors.find(clicking));

  function clicking(check){
      return check.length > 4;
   }
   let colors = ["red","green","orange","pink"];
    console.log(colors.find(clicking));
   ```

13. `unshift`
   - Parameter: accepts ushift() function after array
   - Return: it will add specified element to the start of array and return length of array.
   -Example:
   ```js
   let number = [1,2,3,4,5,6,7];
   number.unshift("total",20);
   ```
   - it will mutate the original array

14. `findIndex`
   - Parameter: accepts callback fn and element,index,array  optionally - thisArg
   - Return: it will return the index of first elemnt in array that will satisfy the provided function condition. otherwise -1.
   -Example:
   ```js 
   let checkIndex = (clg)=>{
     return clg == 1;
   }
  let number = [1,2,3,1,5,6,7];
   number.findIndex(checkIndex);

      let checkIndex = (clg)=>{
     return clg == 1;
   }
  let number = [2,2,3,15,5,1,7];
   number.findIndex(checkIndex);
   ```
15. `filter`
  - Parameter: accepts callback fn and element,index,array  optionally - thisArg
   - Return: it will return the filter down value which satisfied condition if no pass test empty value as output.
   -Example:
      ```js 
   let checkIndex = (clg)=>{
     return clg > 4 ;
   }
  let number = [1,2,3,1,5,6,7];
   number.filter(checkIndex);

      let checkIndex = (clg)=>{
     return clg < 2;
   }
  let number = [2,2,3,15,5,1,7];
   number.findIndex(checkIndex);
   ```
16. //`flat` - done above 
17. `forEach`
  - Parameter: accepts callback fn and element,index,array  optionally - thisArg
   - Return: it will return undefined.
   -Example:
      ```js 
   let checkIndex = (clg)=>{
     console.log(clg);
   }
  let number = [1,2,3,1,5,6,7];
   number.forEach(checkIndex); // log each array element

      let checkIndex = (clg)=>{
      console.log(clg < 2) ;
   }
  let number = [2,2,3,15,5,1,7];
   number.forEach(checkIndex); // log boolean
   ```
  - `forEach` - it will execute function for each element of array. 
18. `map`
   - Parameter: accepts callback fn and element,index,array  optionally - thisArg
   - Return: A new array with each element being the result of the callback function.
   -Example:
   ```js
   let checkIndex = (clg)=>{
     return clg = clg + 2 ;
   }
  let number = [1,2,3,1,5,6,7];
   number.map(checkIndex);

      let checkIndex = (clg)=>{
     return clg < 2;
   }
  let number = [2,2,3,15,5,1,7];
   number.map(checkIndex);
   ```
19. `pop`
   - Parameter: accepts pop()
   - Return: an removed element from array.
   -Example:
   ```js
    let number = [1,2,3,1,5,6,7];
   number.pop();
    let number = [1,2,3,1,];
   number.pop();
   let colors = ["red","green","orange","pink"];
    colors.pop();
   ```
  -`pop` - it will remove last element from Array and return that element.

20. `reduce`
  - Parameter: accepts callback fn and accumulator,currentvalue,currentIndex,array  optionally - initialValue
   - Return: The value that results from running the "reducer" callback function to completion over the entire array.
   -Example:
   ```js
   let checkIndex = (accumulator, currentValue) =>{
      const initialValue = 0;
     console.log (accumulator + currentValue);
   }
  let number = [1,2,3,1,5,6,7];
   number.reduce(checkIndex); // doubt
   ```
21. `slice`
  - Parameter: optional start and end
   - Return: returns shallow copy of array as per start and end value.
   -Example:
  ```js
    let colors = ["red","green","orange","pink"];
    colors.slice(2);
    let colors = ["red","green","orange","pink"];
    colors.slice(1,3);
    let colors = ["red","green","orange","pink"];
    colors.slice();
  ```
22. `some`

  - Parameter: accepts callback fn and element,index,array  optionally - thisArg
   - Return: true if the callback function returns a truthy value for at least one element in the array. Otherwise, false.
   -Example:
   ```js
      let checkIndex = (clg)=>{
     return clg < 2;
   }
  let number = [2,2,3,15,5,1,7];
   number.some(checkIndex);
         let checkIndex = (clg)=>{
     return clg.length > 2;
   }
  let number = [2,2,3,15,5,1,7];
   number.some(checkIndex);
   ```


   note : accepts callback fn and element,index,array  optionally - thisArg

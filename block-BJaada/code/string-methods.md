Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
  - Parameter: it accepts (string) value 
   - Return: convert string value to upperCase value (string data type)
   - Example:
   ``` js
   let lower1 = "amit badana";
    lower1.toUpperCase(); 
  let lower2 = "small";
    lower2.toUpperCase();  
  let lower3 = "AbJnS";
    lower3.toUpperCase();
   ``` 
   -`toUpperCase` accepts string as input and covert it to UpperCase (string type). 

3. `toLowerCase`
  - Parameter: it accepts (string) value 
  - Return: convert string value to LowerCase value (string data type)
  - Example:
     ``` js
     let name = "CHIRAG";
       name.toLowerCase();
     let name1 = "Super";
       name1.toLowerCase();
     let name2 = "SYsTeM";
       name2.toLowerCase();
     ```
   - `toLowerCase` accepts string as input and covert it to LowerCase (string type) .   

4. `trim`
  - Parameter: it accepts (string) value as a input .
  - Return: remove white space from both the ends and return new string as output without modifying original string.
  - Example:
   ``` js
  let name = "  Hello World  ";
    name.trim();
  let address = "    Apna Gaon     ";
    address.trim();
  let city = "     GHAZIBAD World      ";
    city.trim();
   ```
   - `trim`  accepts string and remove white spaces from both the ends and return string as output.

5. `trimEnd`
  - Parameter: it accepts (string) value as a input .
  - Return: remove white space from Right end and return new string as output without modifying original string.
  - Example:
  ``` js
  let name = "  Hello World  ";
    name.trimEnd();
  let address = "    Apna Gaon     ";
    address.trimEnd();
  let city = "     GHAZIBAD World      ";
    city.trimEnd(); // output '     GHAZIBAD World'
   ```
  - `trimEnd` accepts string and remove white spaces from right end and return string as output it can also repaced with trimRight().

6. `trimStart`
  - Parameter: it accepts (string) value as a input .
  - Return: remove white space from Left end and return new string as output without modifying original string.
  - Example:
  ``` js
  let name = "  Hello World  ";
    name.trimStart();
  let address = "    Apna Gaon     ";
    address.trimStart();
  let city = "     GHAZIBAD World      ";
    city.trimStart(); // output 'GHAZIBAD World     '
   ```
  - `trimStart` accepts string and remove white spaces from right end and return string as output it can also repaced with trimLeft().  

7. `concat`
  - Parameter: it accepts one or more (string) value to concat  as a input .
  - Return: the combined strings as output.
  - Example:
  ```js
   let firstName = "Chirag";
   let lastName = "Gaur";
   firstName.concat(' ', lastName);

   let Name = "Amit";
   Name.concat(' ', 'is ',' ' ,23);

      let Name = "Amit";
   Name.concat(' ', 'is ',' ' ,'Rich');
  ``` 
 - `concat` concatenate string values to existing and return new string .

8. `endsWith`
  - Parameter: it accepts the string parameter and check whether a character ends with a specified strig character . 
  - Return: it will check and return boolean true or false as output.
  - Example:
    ``` js 
    let supplier = "kholer";
    supplier.endsWith("er"); // true
    let supplier = "kholer";
    supplier.endsWith("lr"); // false
    let supplier = "kholer";
    supplier.endsWith("r"); // true
    ```
9. `includes`
  - Parameter: it accepts the string parameter and check case -sensitively whether a string  found in within another string . 
  - Return: it will check and return boolean true or false as output.
  - Example:
   ```js 
   let address = "D-17 STREET Crossing";
   address.includes("STREET");  // true
   let address = "D-17 STREET Crossing";
   address.includes("street"); //false
   let address = "D-17 STREET Crossing";
   address.includes("17"); // true
   ```
10. `indexOf`
   - Parameter: it accepts subtring and search for index of first occurence substring in entire string.
   - second Argument or position (optional) - it will check first occurence of the substring GREATER or EQUAL to specified position as argument.
  - Return: it will return the index of the Firstoccurance substring searched inside string and default  -1 if not found.
  - Example:
  ```js 
   let address = "D-17 STREET Crossing";
   address.indexOf("S");  // 5
   let address = "D-17 STREET Crossing";
   address.indexOf("s",16); // 15
   let address = "D-17 STREET Crossing";
   address.indexOf("c",); // -1
   ```

11. `lastIndexOf`
   - Parameter: it accepts subtring and search for index of last occurence substring in entire string.
   - second Argument or position (optional) - it will check last occurence of the substring LESS THAN or EQUAL to specified position as argument.
  - Return: it will return the index of the Last occurance substring searched inside string and default  -1 if not found.
  - Example:
  ```js 
   let address = "D-17 STREET Crossing";
   address.lastIndexOf("S",2);  // -1
   let address = "D-17 STREET Crossing";
   address.lastIndexOf("s"); // 16
   let address = "D-17 STREET Crossing";
   address.lastIndexOf("c",); // -1
   ```
12. `padEnd`
  - Parameter: it will add padding to the end of current string with the given string so that the resulting string reaches the given length.parameters it will accept target-length and the pad-string.
  - Return: A String of the specified targetLength with the padString applied at the end of the current str.
  - Example:
  ```js
  let name = "chirag";
  name.padEnd(10,".");
   let name = "chirag";
  name.padEnd(20,"$");
   let name = "chirag";
  name.padEnd("15","*");
  ```
 - `padEnd` - it will inculde the given string and add to the end of string upto the given length in parameters

13. `padStart`
  - Parameter: it will add padding to the start of current string with the given string so that the resulting string reaches the given length.parameters it will accept target-length and the pad-string.
  - Return: A String of the specified targetLength with the padString applied at the start of the current str.
  - Example:
  ```js
  let name = "chirag";
  name.padStart(10,".");
   let name = "chirag";
  name.padEnd(20,"$");
   let name = "chirag";
  name.padEnd("15","*");
  ```
   - `padEnd` - it will inculde the given string and add to the end of string upto the given length in parameters

14. `repeat`
  - Parameter: it will accept Number from 0 to infinity for the repeating of the given string
  - Return:it will return the repeation of the given string as output without space for the no of times as passed in parameter.
  - Example:
  ```js
    let name = "chirag";
    name.repeat(5);
  ```
15. `replace`
  - Parameter: it will accept pattern and replacement as parameters
  - Return:it will return the new string with one,some or all matches replaced by spefied replacement.
  - Example:
  ```js
   let myDog = "my dog is tallest amongst the other dogs in locality";
   myDog.replace("locality","society");
   let myDog = "my dog the tallest amongst the other dogs in locality";
   myDog.replaceAll("the","is");
    let myDog = "my dog the tallest amongst the other dogs in locality";
   myDog.replace("the","is");
   ```
16. `slice`
  - Parameter: it will accept indexstart and indexend. index of first character included in substring
  - Return:it will return the new string with extracted section of substring
  - Example:
  ```js
   let quality = "chirag is a good boy";
   quality.slice(7,15);
    let quality = "chirag is a good boy";
   quality.slice(2,10);
    let quality = "chirag is a good boy";
   quality.slice(7);
  ```
  - `slice` - it will extract the section of string and return new string without modifying original string.  if end index not given it will give full remaining string as output.

17. `split`
  - Parameter: it will accept seprator string and limit the string a non-negative. if zero then array is returned
  - Return:it will return output in array split each point where seprator occurs in given string.
  - Example:
    ```js
   let quality = "chirag is a good boy";
   quality.split(' ',2);
    let quality = "chirag is a good boy";
   quality.slice('ch',0);
    let quality = "chirag is a good boy";
   quality.slice('is',10);
  ```
18. `substring`


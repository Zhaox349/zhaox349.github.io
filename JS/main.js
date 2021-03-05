//alert box//
console.log('hi everyone~');
alert('hi everyone!!');

/* Question 1 */
// A string consisting of your name //
let name = 'Chichi';
console.log(name);

// Your favorite number as an integer//
let MyFavNumber = 7;
console.log(MyFavNumber);

//Your favorite number as a string//
let num = 7;
String (num);
console.log(num.toString());


//A boolean value//
let hungry= 'true';
let thirsty= 'false';
console.log(hungry);

//An array consisting of each of the letters of your first name//
let letters = ['X','U','R','U'];
console.log(letters);

//An array consisting of multiple, different data types. Include at least 3 different data types.//
let dataType = [2+5, 'milk tea', true]
console.log(dataType);

//Add two strings togethers. The first string is your first name, and the second string is your last name.//
let firstName = 'Xuru';
let lastName = 'Zhao';
console.log(firstName,lastName);

//Add two integers togethers to equal the number 100.//
let int1 =50;
let int2 =50;
console.log(int1+int2);


/* Question 2 */
//For the array you specified in question 1 (consisting of each of the letters of your first name), log the first item of the array and the last item of the array. When you refer to the last item in the array, try to do it by using the length of the array, rather than manually counting the index of the array.//
console.log(letters.length);


/* Question 3 */
//Log the number of characters in the string ‘supercalifragilisticexpialidocious’ by using the length property.//
const str = 'supercalifragilisticexpialidocious';
console.log(`${str.length}`);

/* Question 4 */
//Log the result of this expression: the length of characters in your first name is equal to the length of characters in your last name.//
console.log(`${firstName.length}`) == console.log(`${lastName.length}`);

/* Question 5 */
//Create a for loop that loops through the array of characters in your first name and logs each character.//
let first = ['X', 'U', 'R','U'];
first.forEach(function(item) {
  console.log(item);
});


/* Question 6 */
//Create a conditional statement that checks to see if the current time is between 7pm and 9:40pm.//
let today = new Date().getHours();
if (today >= 19 && today <= 21.40) {
   console.log('Game time!');
} else {
   console.log('Homework time!');
}

/* Question 7 */
//Create a conditional statement with multiple conditions that checks to see what the current date is, and logs a unique message for each day of the week.//
let currentDate = new Date();
if ( currentDate.getDay() == 1) {
    console.log('Tired Monday');
    }
  if ( currentDate.getDay() == 2) {
    console.log('Tuesday Working day');
    }
  if ( currentDate.getDay() == 3) {
    console.log('Half of week!');
    }
  if ( currentDate.getDay() == 4) {
    console.log('Thursday');
    }
  if ( currentDate.getDay() == 5) {
    console.log('Finally Friday!!');
    }
  if ( currentDate.getDay() == 6) {
    console.log('Enjoy Saturday!');
    }
  if ( currentDate.getDay() == 7) {
    console.log('Sunday! Yahooo');
  }

/* Question 8 */
//Create 4 arrays consisting of the following items. Define variables to store each of the 4 arrays.//
let restaurants = ['Haidilao Hotpot','Tsurutontan','Fuyao'];
console.log(restaurants);
let things = ['go to movie theater','travelling','date with boyfriend'];
console.log(things);
let places = ['SoHo','Koreantown','Chinatown'];
console.log(places);
let movies = ['Flipped','Train to Busan','Iron Man'];
console.log(movies);

/* Question 9 */
//Create an array of arrays consisting of the variables from the previous question. Define a variable to hold this array of arrays.//
let combination = ([restaurants,things,places,movies]);
console.log(combination);


/* Question 10 */
//Loop through your array of arrays and log the value of the each item in the array. You should be looping through 4 things, and each value you log should be an array. For example, the first item logged would be an array containing 3 restaurants, the second item would be an array containing 3 animals, etc.//




/* Question 11 */
//Create a nested for loop that loops through the array of your favorite items and logs each individual item. The first loop should log the category of the item, while the nested loop should log each individual item in that category.//

combination.forEach(function(item) {
  console.log(item);

  item.forEach(function(restaurants){
    console.log(restaurants);
  });
});


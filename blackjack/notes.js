// 1. Create two variables, firstCard and secondCard. 
let firstCard = 3
let secondCard = 11
// Set their values to a random number between 2-11 I chose 6 and 9 ⬆️
    
// 2. Create a variable, sum, and set it to the sum of the two cards
   let sum = firstCard + secondCard

   if (sum < 21){
    console.log('do you want to draw a new card 😯')
   }else if (sum === 21){
     console.log("wohoo you got black jack😊")
   } else {
        console.log("you are out of the game 😢")
   }

   // Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

let age = 21
1

if ( age => 21 ){
    console.log("Welcome to sacadian rivers night club")
}else{
    console.log("goodbye")
}

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"

// Check if the person is elegible for a birthday card from the King! (100)

let age1 = 100

// if less than 100    -> "Not elegible"
if (age1 > 100){
    console.log("not elegiable")
}else if(age1 === 100) {
  console.log("happy birthday here is your card")
} else{
    console.log("not elgiable")
}
    
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

let firstCard1 = 10
let secondCard2 = 21
let sum1 = firstCard1 + secondCard2

// Write the conditional according to these rules:
  if(sum1 <=20){
     console.log("new card")
  }else if (sum1 === 21){
     console.log("would you like ")
  }else{
    console.log('your out')
  }
// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"

//cash out
// need a new variable that keeps the state of the game 
// need a variale that tells if the palyer has black jack 
// need a boolen 

let firstCard2 = 10
let secondCard3 = 11
let sum3 = firstCard2 + secondCard3
let hasBlackJack = false


// 1. Create a variable called isAlive and assign it to true, logic is the player alive 
     let isAlive = true;
// 2. Flip its value to false in the appropriate code block where is the player still in the game 
if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
    hasBlackJack = true
} else {
    console.log("You're out of the game! 😭")
    isAlive = false
   
}
console.log(isAlive)// was in the last else statement line 83 but did not execute untill I moved it out

// 3. Log it out to check that you're doing it right
 console.log()
/*if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
    
} else {
    console.log("You're out of the game! 😭")
}
*/

console.log(4 === 3)  //  false
console.log(5 > 2)    //  true 
console.log(12 > 12)  // false 
console.log(3 < 0)    // false
console.log(3 >= 3)   // true because though not larger it is still EGUALL 
console.log(11 <= 11) // TRUE  
console.log(3 <= 2)   //FALSE running the code will also give the answer 

//make the program more robust 
// 1. Declare a variable called message and assign its value to an empty string
let message = ("");
// 2. Reassign the message variable to the string we're logging out
if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂"
} else if (sum === 21) {
    message ="Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true
} else {
    message ="You're out of the game! 😭"
    isAlive = false
}
// the above is the code we have been working on we are replacing console.log with message
// 3. Log it out!
console.log(message)


//arrays order list, add comas between items
let featuredPosts = ["check out my Netflix clone", 
"heres the code for my prject", 
"relaunced phot"]

// Create an array that lists your i.e. experience, education, licenses, skills or similar
// The items of the array should be strings

let myProjects = [
    "blackjack app",// 0
    "counterapp", //1
    "student of front end" //2
]
//arrays are 0 index ⬆️

// 0 indexed
let featuredPosts1 = [
    "Check out my Netflix clone",        // 0 
    "Here's the code for my project",    // 1
    "I've just relaunched my portfolio"  // 2
]

console.log( featuredPosts1.length )
// it will give you a three because there are three are one larger than the ending index⬆️

// Array - ordered list of items - coposite(like the whole) / complex data type
     
// Create an array that describes yourself. Use the three primitive data types you've learned
    let aboutMe = ["Racheal", 100 ,  true] 

// It should contain your name (string), your age (number), and whether you like pizza (boolean)

// adding more to an array you use a method called push

let cards1 = [7 ,4]
cards.push(6) // adds six to the array aka we are passing it into the array

let cards = [7, 4]
cards.push(6)
//console.log(cards)

// Push the newMessage to the messages array, and then log out the array

let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"
messages.push("same here")

//removing message from an array
messages.pop
//Array.filter(newMessage)

// Count to ten!
  0,1,2,3,4,5,6,7,8,9
// We need to specify..👇.
     //
// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

//loops
//    START           FINISH       STEP SIZE: increment by 1 the count increase by one
for ( let count = 10;  count < 21;  count += 1 )  {
    
    console.log(count)

}

//create a loop from scratch 
//inside the () we define our starting point finsihing and how big our steps will be
//can use i or count but can name it what you want
for(let i = 0; i < 5; i += 1){
    console.log(1)
}


// Create a for loop that counts from 10 to 100 in steps of 10

for (let b = 10; b < 101; b += 10)
  console.log(b)
// Use console.log to log out the numbers

//for loops combined with arrays
let messages1 = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately.",
    "Same here!"
]

// console log will put all the messages on one line but what if we want themm all be seperate

// we are going to combine with a four loop
for (let i =0; i < messages.length; i +=1){
   console.log(messages[1]);
}

let cards2 = [7, 3, 9]

// Create a for loop that logs out all the cards in the array
// Use cards.length to specify how long the loop should run; i++ does the same as i+=1
for (let i = 0; i < cards2.length; i+=1 ){
    console.log(cards2[1]);
}


let sentence = ["Hello ", "my ", "name ", "is ", "Per"] 
let greetingEl = document.getElementById("greeting-el")

// ⬆️Render the sentence in the greetingEl paragraph using a for loop and .textContent👇
for (let i = 0; i < sentence.length; i++) {
    //greetingEl.textContent = sentence[i] this would not be correct
    greetingEl.textContent += sentence[i]
}

// modify so we have spaces between words
greetingEl.textContent += sentence[i] + " "

//returning functions in values ctrl +d

let player1Time = 102
let player2Time = 107

function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time
    }
}

let fastestRace = getFastestRaceTime()

// Write a function that returns the total race time
 function totalRace (){
    return player1Time + player2Time

 }
// Call/invoke the function and store the returned value in a new variable

return player1Time + player2Time // goes in the function line 269

// Finally, log the variable out console.log


let randomNumber = Math.random() *6

console.log(randomNumber)


/* 

What does Math.random() do?

Your answer: gives you a random number between 0 to 1 but not 1 for example.999



*/

// let randomNumber = Math.random() * 6

let flooredNumber = Math.floor(3.45632)

console.log(flooredNumber)


/* 

What does Math.floor() do to positive numbers?

Your answer:  it reads the number in front of the decimal
or removes the decimal 

*/

let randomNumber1 = Math.floor() * 6

console.log(randomNumber)

/* 
gives a value between 0-5 no decimal
Write down all the possible values randomNumber can hold now!
gives a number between 0 
 


*/

// Try to modify the expression so that we get a range from 1 to 6
let randomNumber2 = Math.floor( Math.random()   * 6  ) +1
 // i wrote first math.floor( Math.random() *6 + 1) and it did work
console.log(randomNumber)

// logical operators 

let hasCompletedCourse = true
let givesCertificate = true

// how to test if the above is true we can use if statments an if with in an if 
if(hasCompletedCourse == true && givesCertificate == true){
    generateCertificate()
    /*if (givesCertificate == ture){
        generateCertificate()
    }*/
}

function generateCertificate() {
    console.log("Generating certificate....")
}

let hasSolvedChallenge = false
let hasHintsLeft = false

// Create an if statement that checks that both variables are false.
// If so, run the showSolution() function
if (hasSolvedChallenge == false && hasHintsLeft == false){
    showSolution()
}

function showSolution() {
    console.log("Showing the solution....")
}

// above was the and now we will use the or orperator if only two cases can be valid or ||

// Create two boolean variables, likesDocumentaries and likesStartups

let likesDocumentaries = true 
let likesStartups = true 
// Use an OR statement (||) to call recommendMovie() if either of those variables are true
 if (likesDocumentaries == true || likesStartups == true) {
          recommendMovie()
 }

function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}

// Objects - store data in-depth - composite / complex data type
// key-value pairs

let course = {
    titles: "learn css grid for free",
    lesson: 16,
    creator: "per Harald Borgen",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css",]
}
// to access the values we wrote above  
console.log(course.length)

// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

let airbnb ={
  titles: "Castles",
  avaliable: 23,
  isHaunted: true,
  tags: ["scotland", "welsh", "Scandinavia", "Germany", "France"]
}

console.log(airbnb.isHaunted)

// creating functions inside of objects 
let player = {
    name: "Per",
    chips: 200,
    sayHello: function() {
        console.log("Heisann!")
    }
}
player.sayHello()

// Create a person object that contains three keys: name, age, and county.
let person = {
    name: "George",
    age: 31,
    country: "Albaney",
}
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
function logDate(){ // notes lines 423 - 424
    console.log(person.name + " is " + "person.age" + "years old and lives in" + person.country)
}
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works
logDate()

/*let age3 = 15
 if (age3 < 6){
    message = "child is free"
 } else if(age3 < 18){
    message = "child discount"
 } else if (age3 < 27){
    message ="studnet discount"
 }else if (age3 < 67 ){
    message = "full price"
 } else {
    message = "senior discoint "
 }*/
 //message did not work it has to be console.log
// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount
// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable


let age3 = 67
 if (age3 < 6){
    console.log("child is free")
 } else if(age < 18){
    console.log ("child discount")
 } else if (age < 27){
    console.log("studnet discount")
 }else if (age < 67 ){
    message = "full price"
 } else {
    message = "senior discoint "
 }

 let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/
for(let i = 0; i < largeCountries.length; i++){
    console.log(largeCountries)
}
// my code above did work
/*for (let i = 0; i < largeCountries.length; i++) {
    console.log("- " + largeCountries[i])
}*/


let largeCountries1 = ["Tuvalu","India","USA","Indonesia","Monaco"]
for(let i = 0; i < largeCountries1.length; i++){
    console.log(largeCountries)
    largeCountries.push("china")
    largeCountries.pop("china")
    largeCountries.shift()
    largeCountries.unshift(china)
    console.log(largeCountries)
}
// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()


let dayOfMonth = 13
let weekday = "Friday"

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&
if(dayOfMonth == 13 && weekday == "Friday"){
    console.log("😱")
}

let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array
 function getHands (){
  let randomIndex = Math.floor (Math.random() *3)
  return randomIndex 
 }

 let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.

    
})


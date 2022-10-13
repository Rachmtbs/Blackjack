//let firstCard = getRandomCard();
//let secondCard = getRandomCard();
//create the player object 
let player ={
  // we are creating an object
     name: "Per",
     chips: 200
}
let cards = [] //array ordered list of items
let sum = 0
let hasBlackJack = false
let isAlive = false
let playerName = "Per"
let playerChips = 145

// grab ahold of the player el paragraph and store it in a variable
let playerEl = document.getElementById("player-el")

// render the palyers name and the in player el 
playerEl.textContent = player.name + ": $" + player.chips

let message = ""


   
// 1. Store the message-el paragraph in a variable called messageEl
let messageEl = document.getElementById("message-el");

// 2. Store the sum paragraph in a variable called sumEl
   // let sumEl = document.getElementById("sum-el");
let sumEl = document.getElementById("sum-el");

// 3. Store the cards paragraph in a variable called cardsEl
 //let cardsEl = document.querryselectorById("#cards-el")
 let cardsEl = document.getElementById("cards-el")
  // Create a function, getRandomCard(), that always returns the number 5
  // we changed the code from function getRandomCard() {
   // return 5
  //} to the code belpw 

  function getRandomCard (){
    // if 1     -> return 11
    // if 11-13 -> return 10
    //return  Math.floor (Math.random ()* 13 + 1) first we are going to change the return to let
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}

//Create a startGame() function. Move the conditional inside the function
   //create a function newCard that logs ou drawinf a new card from the deck
function startGame() {
  isAlive = true
  // Generate two random numbes we are takeing from lines 1 and 2
   let firstCard = getRandomCard()
   let secondCard = getRandomCard()

  // Re-assign the cards and sum variables so that the game can start
  cards = [ firstCard, secondCard]
  sum = firstCard + secondCard
    renderGame()
}

function renderGame (){
// 5. Render the sum on the page using this format -> "Sum: 14"
  //render out fist and second cards with an array

   cardsEl.textContent = "Cards: " /* + cards[0] + " " + cards[1]*/
 // Create a for loop that renders out all the cards instead of just two
    for(let i = 0; i < cards.length; i++){
           cardsEl.textContent += cards [i] + "  "
    }
sumEl.textContent ="Sum:" + sum 


// 6. Render the cars on the page using this format -> "Cards: 10 4"

  //cardsEl.textContent = "Cards:" + firstCard + "" + secondCard
  
if (sum <= 20) {
    message = "Do you want to draw a new card?"
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!"
    hasBlackJack = true
} else {
  message = "Your our of the game. Try again!"
    isAlive = false
}
// 7. Display the message in the messageEl using messageEl.textContent
messageEl.textContent = message
};

// Create a new function called startGame() that calls renderGame()


function newCard() {
  // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
  if (isAlive === true && hasBlackJack === false) {
      let card = getRandomCard()
      sum += card
      cards.push(card)
      renderGame()        
  }

}


 /*function  newCard(){
      //Use the getRandomCard() to set the value of card
      let card = getRandomCard()
       // 2. Add the new card to the sum variable
      sum += card
      //push card into the array
      cards.push(card)
         // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
         if(){

         }
    // 3. Call startGame()
      renderGame()
}*/


//because i had card and not cards every time i picked new card it did not show the new card 
/*function newCard() {
  // 3. Use the getRandomCard() to set the value of card
  let card = getRandomCard()
  sum += card
  cards.push(card)
  //console.log(cards)
  renderGame()
}*/

// Create a function, rollDice(), that returns a random number between 1 and 6
  function rollDice(){
    let randomNumber = Math.floor(Math.random ()* 6 + 1)
    return randomNumber
  }




//the code wont work untill we render out the cards we will use s forloop

 


// line 24 needs to be inside the function in order to get the do you want to play ,message 
// added get element by id which caused errors, was not needed
//use hastag with querry selctor when calling the id otherwise of you use it 
//elemnt in id you will get an error
//change the function in line 50 to render so the code makes sense code doesnt work
    //will need to create a function that evokes or renders start game
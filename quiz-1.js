var readlineSync = require('readline-sync');


var score = 0;
function play(question, answer){

  var theUser = readlineSync.question(question);// reading concept
  if (theUser.toUpperCase() === answer.toUpperCase()){//branching concept with if else
    score++
    console.log("Congratulations! You're correct you have earned 1 point")
  }else{
    score--
    console.log("Opps! you're Incorrect you have lost 1 point")
  }

  
}

var highScore = [{
                    name : "Sagar",
                    score : "10"
},
                 {
                    name : "Kiran",
                    score : "9",
                 }]

var array = [{                                  //array and object concept
                question : "what color do i like? ",
                answer : "Black",
            },
            {
                question :"what is my birthday month? ",
                answer : "Jan" 
             }]

for (var i = 0; i< array.length; i++){         //for loop concept 
  currentQuestion = array[i];
  play(currentQuestion.question, currentQuestion.answer)  //calling object concept
  console.log("----------------------------------------")
}
console.log("You're total SCORE is "+ score)


console.log("Checkout the Highest Score : ")
for (var i=0; i< highScore.length; i++) { // for loop
  var currentscore = highScore[i]; // array index based access
  console.log(currentscore.name); // function call :: console.log()
  console.log(currentscore.score); // currentHero.costumeColor :: object access on key
  console.log("----------")
}

var userChoice;
var computerChoice;
var message;
var rock = ["R", "Rock", "r", "rock"];
var paper = ["P", "Paper", "p", "paper"];
var scissors = ["S", "Scissors", "s", "scissors"];

//Allows the user to set userChoice
function user(){
    return userChoice = prompt("Do you choose Rock, Paper or Scissors?");
}

//Sets computerChoice randomly
function computer(){
    computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "R";
    } else if(computerChoice <= 0.67) {
        computerChoice = "P";
    } else {
        computerChoice = "S";
    }
}

//Alert
function play(){
    return window.alert("Let's play Rock Paper Scissors!");
}

//Win message
function win(){
    return message = "You win!";
}

//Lose message
function lose(){
    return message = "You lose!";
}

//Tie message
function tie(){
    return message = "You tied!";
}

//Compares user input with computer-generated choice
function result(){
    window.alert(compare(userChoice,computerChoice));
    return compare(userChoice,computerChoice);
}

function compare(choice1,choice2){
    //tie
    if(choice1===choice2){
        return tie();
    }
    //User chose rock, computer chose scissors
    else if(rock.includes(choice1)){
        if(scissors.includes(choice2)){
            return win();
        }
        //user chose rock, computer chose paper
        else {
            return lose();
        }
    }
    //user chose paper, computer chose rock
    else if(paper.includes(choice1)){
        if(rock.includes(choice2)){
            return win();
        }
        //user chose paper, computer chose scissors
        else {
            return lose();
        }
    }
    //user chose scissors computer chose paper
    else if(scissors.includes(choice1)){
        if(paper.includes(choice2)){
           return win();
        }
        //user chose scissors computer chose rock
        else {
           return lose();
        }
    } else {
        return "Input R, P, or S!";
    }
    
}

play();
computer();
user();
result();


while(window.confirm("Do you want to play again?")==true){
    computer();
    user();
    result();
}
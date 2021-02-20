var userChoice;

var computerChoice;

var message;

function user(){
    userChoice = prompt("Do you choose Rock, Paper or Scissors?");
    return userChoice;
}


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

function play(){
    return window.alert("Let's play Rock Paper Scissors!");
}

function win(){
    return message = "You win, play again";
}

function lose(){
    return message = "You lose, play again";
}

function tie(){
    return message = "You tied, play again";
}

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
    else if(choice1==="R"){
        if(choice2==="S"){
            return win();
        }
        //user chose rock, computer chose paper
        else {
            return lose();
        }
    }
    //user chose paper, computer chose rock
    else if(choice1==="P"){
        if(choice2==="R"){
            return win();
        }
        //user chose paper, computer chose scissors
        else {
            return lose;
        }
    }
    //user chose scissors computer chose paper
    else if(choice1==="S"){
        if(choice2==="P"){
            win();
        }

        //user chose scissors computer chose rock
        else {
            lose();
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
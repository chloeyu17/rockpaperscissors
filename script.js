var user_choice;

function userChoice(){
    user_Choice = prompt("Do you choose Rock, Paper or Scissors?");
    return user_Choice;
}

var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "R";
} else if(computerChoice <= 0.67) {
	computerChoice = "P";
} else {
	computerChoice = "S";
}

function play(){
    return window.alert("Let's play Rock Paper Scissors!");
}

function win(){
    var message = "You win, play again";
    return window.confirm(message);
}

function lose(){
    var message = "You lose, play again";
    return window.confirm(message);
}

function tie(){
    var message = "You tied, play again";
    return window.confirm(message);
}

function result(){
    return window.alert(compare(user_Choice,computerChoice));
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
            win();
        }
        //user chose paper, computer chose scissors
        else {
            lose;
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
userChoice();
result();


while(window.confirm("Do you want to play again?")==true){
    userChoice();
    result();
}

//if (window.confirm("Do you want to play again?")) {
  //  window.location.reload();
 // }

//for ( as long as confirm = true){ repeat prompt and result}


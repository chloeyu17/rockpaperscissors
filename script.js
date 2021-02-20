var play = window.confirm("Do you want to play Rock Paper Scisorrs?");

var userChoice = prompt("Do you choose rock, paper or scissors?");

function win(){
    var message = "You win, play again";
    window.confirm(message);
    return message;
}

function lose(){
    var message = "You lose, play again";
    window.confirm(message);
    return message;
}

function tie(){
    var message = "You tied, play again";
    window.confirm(message);
    return message;
}

function result(){
    var compare = this.compare(userChoice,computerChoice);
    window.alert(compare);
    return compare;
}


var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "R";
} else if(computerChoice <= 0.67) {
	computerChoice = "P";
} else {
	computerChoice = "S";
}
var compare=function(choice1,choice2){
    //tie
    if(choice1===choice2){
        tie();
    }
    //User chose rock, computer chose scissors
    else if(choice1==="R"){
        if(choice2==="S"){
            win();
        }
        //user chose rock, computer chose paper
        else {
            lose();
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

result();

if (window.confirm("Do you want to play again?")) {
    window.open("index.html", "Thanks for Visiting!");
  }

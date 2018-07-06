var sendm = "message.channel.send"
var lose = sendm + "(\"You lost.\")", tie = sendm + "(\"Tie!\")", win = sendm + "(\"You win!\")",
rock = sendm + "(\"ROCK!\")", paper = sendm + "(\"PAPER!\")", scissors = sendm + "(\"SCISSORS!\")";

module.exports = function rps(args, message) {
    random = Math.floor((Math.random() * 3) + 1);
		if (args[1] == "rock" || args[1] == "r") { //ROCK
			if (random == 1) { eval(rock); eval(tie); } 
			if (random == 2) { eval(paper); eval(lose); } 
			if (random == 3) { eval(scissors); eval(win); } 
		}
		else if (args[1] == "paper" || args[1] == "p") { //PAPER
			if (random == 1) { eval(rock); eval(win); } 
			if (random == 2) { eval(paper); eval(tie); } 
			if (random == 3) { eval(scissors); eval(lose); } 
		}
		else if (args[1] == "scissors" || args[1] == "s") { //SCISSORS
			if (random == 1) { eval(rock); eval(lose); } 
			if (random == 2) { eval(paper); eval(win); } 
			if (random == 3) { eval(scissors); eval(tie); } 
		}
}

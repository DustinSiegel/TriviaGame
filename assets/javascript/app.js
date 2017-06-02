// Create variables for the title page words and start button
// Display the title page
// A funtion that responds to clicking start that will load the rest of the game
// Create an array of objects. Each object should have a question and several answers to choose from. also, images and sounds?
// Create a function that displays the questions in order
// Create a function that determines if the correct answer has been chosen. And if so, adds to a counter Also, a way to move on to the next question.
// Create a timer that takes a set amount of time and applys it to each question in turn. Also pushes the next question if the timer runs out.
// Create a function that determines the the game is over and displays the number of correct answers and wrong answers
// if time, add in music or sound effects and images


var title = "Cosmic Quiz";	// A variable for the game title.
var startButton = "Click Here to Start";	// A variable for the start button.
var StartTime = 45;
var i=-1;
var questionArray = [
	
	questA = {
		question: "What is the shortest unit of measurment?",
		answerA: "A quark pair",
		answerB: "A helameter",
		answerC: "One micron",
		answerD: "A planck length"
	},

	questB = {
		question: "What is the Sun?",
		answerA: "An giant mass of incandecent gas",
		answerB: "An ongoing chemical reaction where hydrogen is turned into helium",
		answerC: "The star that is nearest to earth",
		answerD: "All of the above"
	},

	questC = {
		question: "What's the deal with Shrodinger's cat?",
		answerA: "A thought experiment that represents the paridoxial nature of quantum superposition.",
		answerB: "Based on the Greek myth; Opening Pandora's box to see if the cat is alive or dead represents taking a seemingly innocent and tiny action that ends up having all consuming and disatorous concequences.",
		answerC: "Marie Curie's short term lab assistent's cat, who was unintentianaly (and unfortunatly for the cat), instramental in the discovery of radiation.",
		answerD: "When the Cromulens show up on earth, and force the planet to compete in an inter-planitary version of who's got talent, in episode 5, season 1 of Rick and Morty (Get Schwifty). Shrodinger's Cat was the name of one of the more unique bands that competed against earth and ultimatly lost and got their planet destroyed.",
	},

	questD = {
		question: "What is E=mc2 refering to?",
		answerA: "It refers to the the constant and unchangable nature of the speed of light and how we can only go forward in time at one constant rate.",
		answerB: "Energy is equal to mass times the speed of light squared: Basically stating that mass and enegy are different forms of the same thing and are therefor interchangable.",
		answerC: "Since light has no mass, it takes no energy and will therefore traval in a straight line indefinatly until reflected or obsorbed.",
		answerD: "Einstien's proof that we in fact live in a multi-dimentional universe."
	},

	questE = {
		question: "Which world famous physicist is director of the Hayden Planetarium in New York City?",
		answerA: "Bill Nye the science guy",
		answerB: "Dr. Richard Dawkins",
		answerC: "Stephen Hawkins",
		answerD: "Neil Degrasse Tyson",
	},

	questF = {
		question: "When the Hubble Space Telescope was sent into space in 1990 it had a major flaw. How did they fix it?",
		answerA: "Astronauts used space welding tools and cannisters of compressed air to repair and rechange the propultion system that is used to reposition the telescope.",
		answerB: "NASA scientists created a machine that was temperaraly attached to the satalite in a subsequent mission in 1993, that meticulously re-ground the main lense to componsate for the warping that occurred during launch",
		answerC: "The focusing proplem seemed to just 'fix itself'. One of the many misteries of space.",
		answerD: "Performing a record setting 5 space walks in 5 days, astronauts retrofitted the telescope with software and hardware that compensated for the miscalculation in the design of convex angle of the main telescope lense.",
	}
]

$("#title").text(title);	// Displays the game title.
$("#start").text(startButton);	// Displays the start button

$(".start").on("click", function() {	// A function that responds to clicking the start button.
	// for (var i=0; i<questionArray.length; i++) {
		$("#title").removeAttr(title);

	i++
 console.log( questionArray[i].question );
// $.each(questionArray, function( key, value ) {
 
    $("#question").text(questionArray[i].question );
    $("#answerA").text(questionArray[i].answerA,);
    $("#answerB").text(questionArray[i].answerB,);
    $("#answerC").text(questionArray[i].answerC,);
    $("#answerD").text(questionArray[i].answerD,);
// });

});

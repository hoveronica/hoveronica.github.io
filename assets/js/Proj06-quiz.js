var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var questions = [
{
	question: "What does Professor Dumbledore claim to see himself holding in front of the Mirror of Erised?",
	answers: {
		a: "An armful of books",
		b: "Thick wollen socks",
		c: "Chocolate frogs",
		d: "The Order of Merlin reward"
	},
	correctAnswer: "b"
},
{
	question: "Name all the Weasley kids starting from the oldest.",
	answers: {
		a: "James, Charlie, Arthur, Fred, George, Ron, Ginny",
		b: "Cedric, Bill, Fred, George, Ron, Ginny",
		c: "Charlie, Bill, Fred, George, Percy, Ron, Ginny",
		d: "Bill, Charlie, Percy, Fred, George, Ron, Ginny"
	},
	correctAnswer: "d"
},
{
	question: "Who was Headmaster of Hogwarts before Albus Dumbledore?",
	answers: {
		a: "Armando Dippet",
		b: "Phineus Nigellus Black",
		c: "Pius Thicknesse",
		d: "Nicolas Flamel"
	},
	correctAnswer: "a"
},
{
	question: "Who is Peeves afraid of?",
	answers: {
		a: "Albus Dumbledore",
		b: "Severus Snape",
		c: "The Bloody Baron",
		d: "Argus Filch"
	},
	correctAnswer: "c"
},
{
	question: "Who is the House Ghost of Hufflepuff?",
	answers: {
		a: "The Fat Friar",
		b: "Peeves",
		c: "The Grey Lady",
		d: "Moaning Myrtle"
	},
	correctAnswer: "a"
},
{
	question: "Which dragon did Victor Krum get for the Triwizard Tournament?",
	answers: {
		a: "Swedish Short-Snout",
		b: "Chinese Fireball",
		c: "Hungarian Horntail",
		d: "Norwegian Ridgeback"
	},
	correctAnswer: "b"
}
];

generateQuiz(questions,quizContainer,resultsContainer,submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
	function showQuestions(questions, quizContainer){
		var output = [];
		var answers;
		for(var i=0; i<questions.length; i++){
			answers = [];
			for (letter in questions[i].answers){
				answers.push(
					'<label>' + '<input type="radio" name="question' + i + '" value="' + letter +'">'
					+ letter + ': '
					+ questions[i].answers[letter]
					+ '</label>'
				);
			}
			output.push(
				'<div class="question">' + questions[i].question + '</div>' 
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}
		quizContainer.innerHTML= output.join('');
	}
	
	function showResults(questions,quizContainer,resultsContainer){
		var answerContainer = quizContainer.querySelectorAll('.answers');
		var userAnswer = '';
		var numCorrect = 0;
		for(var i=0; i<questions.length; i++){
			userAnswer = (answerContainer[i].querySelector('input[name=question'+i+']:checked') || {}).value;
			if(userAnswer===questions[i].correctAnswer){
				numCorrect++;
				answerContainer[i].style.color='lightgreen';
			}else{
				answerContainer[i].style.color='red';
			}
		}
		resultsContainer.innerHTML=numCorrect+ ' out of ' + questions.length;
	}
	
	showQuestions(questions,quizContainer);
	
	submitButton.onclick = function(){
		showResults(questions,quizContainer,resultsContainer);
	}
}
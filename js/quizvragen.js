
  //Check of de gebruiker juiste code invoert, zo ja dan wordt het formulier laten zien
const code = 6650;
const codebar = document.getElementById('js--codebar');
const quizForm =	document.getElementById("quiz-form");
const modal = 	document.getElementById("modal");
const numberCorrect =    	document.getElementById("number-correct");
const message =   	document.getElementById("message");

//Berichten die worden laten zien nadat je de quiz heb gemaakt
const  messages = ["Helaas, volgende keer beter. Kijk nog even op de thema pagina en kom dan weer terug!", "Wow, jij weet al veel! Nog even oefenen, en je kan jezelf een echte Egypte expert noemen", "Wow, je bent een echte Oud-Egypte expert"];

//Kijk of de gebruiker de juiste code heeft in gevoerd
codebar.onkeyup = (event) => {
  let userInput = event.target.value;
  if (userInput == code){
    quiz.style.display ="block";
  }
}

//Check de antwoorden van de gebruiker
const check = () =>{
  let correct = 0;
  let score = 0;

	let questionsInputList = [
									document.quiz.question1.value,
									document.quiz.question2.value,
									document.quiz.question3.value,
									document.quiz.question4.value,
								  document.quiz.question5.value,
									document.quiz.question6.value,
									document.quiz.question7.value,
									document.quiz.question8.value,
								  document.quiz.question9.value,
								  document.quiz.question10.value
								];

	const answersList = ["rivier","nijl","6650","satet","afrika","graan","overstroming","zomer","oktober","ahket"];

	for(let i = 0; i< answersList.length; i++){
		if(questionsInputList[i] == answersList[i]){
		correct++;
	 }
	}

	if (correct > 0 && correct <= 4) {
		score = 0;
	}

	if (correct > 5  && correct <= 7) {
		score = 1;
	}

	if (correct > 7 && correct <=10) {
		score = 2;
	}

  getModal(correct, score);
	}

//Laat modal pop up verschijnen nadat de quiz is gespeeld, waar de score en bijbehorende tekst wordt weergegeven.
const getModal = (correct, score) =>{
  quizForm.style.display ="none";
  modal.style.display = "flex";
  numberCorrect.innerHTML =  correct + "/10";
  message.innerHTML = messages[score];
  document.getElementById("quiz-form").reset();

  //Bij een lage score, kleur de tekst groen
  if (score == 0){
    numberCorrect.style.color = "#DD2929";
  }

  //Bij een score hoger dan 5, kleurt de tekst groen
  else{
      numberCorrect.style.color = "#29BC90";
  }

  //clear input veld waar de gebruiker de code neerzet
 document.getElementById("codebar").value = '';
 if(event.preventDefault) event.preventDefault();
 return false;
}

const close = document.getElementById("closing");

//Wanneer de gebruiker op x klikt, doe de modal weg
close.onclick = () => {
      modal.style.display = "none";
  }
